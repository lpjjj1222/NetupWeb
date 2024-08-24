import React from "react";
import { useEffect, useState } from "react";
import styled from "styled-components";
import Colors from "../styles/Colors";
import "../styles/preview.css";
import GLOBAL from "~/global";
import { GENDER, INDUSTRIES, INTENTIONS, LANGUAGE, EVENTTYPE, EVENTGENDER } from "../enum";
import { downloadUserImagesFromS3, downloadEventImagesFromS3 } from "../../../../src/controllers/utils";
import { blobToBase64, eventImagePrefix, userProfileImagePrefix  } from "../../../../src/controllers/formatConvert";
import { GetEventDetails,GetEventAttendees } from "../../../../src/controllers/eventController";
import { getAccountById, getAccountBatchByIds } from "../../../../src/controllers/userController";
import moment from 'moment';
import { set } from "zod";

const WrapperContainer = styled.div<{ bgColor: string }>`
  background-color: ${Colors.white};
  display: flex;
  flex-direction: column;
  // height: 100vh;
`;

const Header = styled.div`
  display: flex;
  flex-direction: row;
  align-items: center;
  justify-content: space-between;
  padding: 2% 5%;
  height: 5%;
`;

const Footer = styled.div`
  display: flex;
  flex-direction: row;
  align-items: center;
  justify-content: center;
  padding: 3% 2%;
  border-top: 1px solid #ccc;
  background-color: ${Colors.white};
  margin-top: auto;
  height: 10%;
  color: ${Colors.appColorPrimary};
`;

const Image = styled.img`
  margin-right: 10px;
`;

const HostContainer = styled.div`
  display: flex;
  flex-direction: row;
  align-items: center;
  padding: 4% 0;
  background-color: ${Colors.white};
  height: 10%;
  color: black;
`;

const HostImage = styled.img`
  width: 50px;
  height: 50px;
  border-radius: 50%;
  margin-right: 15px;
  margin-left: 10px;
`;

const HostName = styled.div`
  font-size: 14px;
  font-weight: medium;
`;

const EventImage = styled.img`
  width: 95%;
  height: 50%;
  align-self: center;
  border-top-left-radius: 20px;
  border-top-right-radius: 20px;
`;

const Button = styled.button`
  color: white;
  border: none;
  border-radius: 4px;
  cursor: pointer;
`;

const TitleLine = styled.div`
  display: flex;
  flex-direction: row;
  align-items: center;
  justify-content: space-between;
  padding: 15px 15px 0px 15px;
`;

const Title = styled.h1`
  font-size: 20px;
  font-weight: bold;
  color: black;
`;

const ShareButton = styled.button`
  background-color: transparent;
  border: 1px solid ${Colors.appColorPrimary};
  border-radius: 20px;
  padding: 2px 5px;
  display: flex;
  align-items: center;
  color: ${Colors.appColorPrimary};
  cursor: pointer;
`;

const DateTime = styled.p`
  color: #3652AD;
  padding: 0px 10px 0px 15px;
  font-size: 12px;
`;

const Location = styled.p`
  color: #3652AD;
  padding: 0px 10px 0px 15px;
  font-size: 12px;
  text-Decoration: underline;
`;
const CapacityContainer = styled.div`
  display: flex;
  flex-direction: row;
  align-items: center;
  margin: 5px 15px;
  justify-content: space-between;
  font-size: 12px;
`;

const Capacity = styled.div`
  color: ${Colors.greyText};
`;

const Attendees = styled.div`
  display: flex;
  align-items: center;
  color: ${Colors.greyText};
`;
const AttendeeImage = styled.img`
  width: 23px;
  height: 23px;
  border-radius: 50%;

  &:first-child {
    margin-left: 2px;
  }
`;

const Line = styled.div`
  border-bottom: 1px solid #ccc;
  margin: 10px 15px;
`;

const ScrollViewWrap = styled.div`
  display: flex;
  flex-direction: row;
  overflow-x: auto; 
  padding: 10px 15px;
  white-space: nowrap;
  &::-webkit-scrollbar {
    display: none; 
  }
`;

const ScrollWrapInnerView = styled.div`
  display: inline-flex; 
  align-items: center;
  border: 1px solid ${Colors.borderColor6EA};
  margin-right: 16px;
  padding: 0px 10px;
  border-radius: 5px;
`;

const CardImage = styled.img`
  width: 20px;
  height: 20px;
`;

const TextContainer = styled.div`
  margin-left: 8px;
  margin-right: 6px;
  margin-top: 4px;
  margin-bottom: 4px;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  padding: 0px 15px 0px 0px;
`;

const HeadingText = styled.span`
  font-size: 14px;
  font-weight: bold;
  color: black;
`;

const DescText = styled.span`
  font-size: 12px;
  color: black;
  margin-top: 2px;
`;

const Details = styled.p`
  color: ${Colors.greyText};
  padding: 10px 15px;
  font-size: 12px;
`;

const MessageReport = styled.div`
  display: flex;
  flex-direction: row;
  align-items: center;
  justify-content: space-between;
  padding: 10px 8px;
`;

const ButtonWrapper = styled.div`
  display: flex;
  flex-direction: row;
  align-items: center;
  margin: 0 8px 6px 8px;
  cursor: pointer;
`;

const Icon = styled.img`
  height: 15px;
  width: 15px;
`;

const MessageText = styled.span`
  font-size: 12px;
  color: ${Colors.appColorPrimary};
  margin-left: 10px;
`;

const ReportText = styled.span`
  font-size: 12px;
  color: ${Colors.greyText};
  margin-left: 6px;
`;


const attendees = [
  { userPhoto: "/images/preview/wechat.png" },
  { userPhoto: "/images/preview/wechat.png" },
  { userPhoto: "/images/preview/wechat.png" },
  { userPhoto: "/images/preview/wechat.png" },
  { userPhoto: "/images/preview/wechat.png" },  
];




const interestedIndustries = ['OTHERS', 'ELECTRICALENGINEERING']

const EventPreview = ({ eventId }: any) => {
  const link = `netup://global-link/event/${eventId}`;
  const [eventDetail, setEventDetail] = useState<any>();
  const languageEnum = eventDetail?.language;
  const [targetHostImages, setTargetHostImages] = useState<string[]>([]);
  const [targetHostName, setTargetHostName] = useState<string>("");
  const [attendees, setAttendees] = useState<any[]>([]);
  const [eventImage, setEventImage] = useState<string>("");
  const [eventTitle, setEventTitle] = useState<string>("");
  const [eventDateTime, setEventDateTime] = useState<string>("");
  const [eventLocation, setEventLocation] = useState<string>("");
  const [eventCapacity, setEventCapacity] = useState<number>(0);
  const [eventType, setEventType] = useState<string>("");
  const [genders, setGenders] = useState<string[]>([]);
  const arraysEqual = (a, b) =>
    (a == null && b == null) ||
    (a?.length === b?.length && a?.every((val, index) => val === b[index]));
  const languageEnumStrings =
    LANGUAGE.filter(i => i.enum === languageEnum).length > 0
      ? LANGUAGE.filter(i => i.enum === languageEnum)[0].label
      : null;
  const [minAge, maxAge] = eventDetail?.ageRange ?? [18, 100];
  const HorizontalScrollList = [
    { icon: "/images/preview/meal.png", title: "Type", details: EVENTTYPE.find(t => t.enum === eventType)?.itemT, },
    { icon: "/images/preview/gender.png", title: "Gender", details: EVENTGENDER.find(t => arraysEqual(t.enums, genders))?.label },
    { icon: "/images/preview/langIcon.png", title: "Language", details: languageEnumStrings },
    { icon: "/images/preview/birthday.png", title: "Age", details: maxAge == 100 && minAge == 18 ? 'Open to All' : minAge + ' - ' + maxAge,},
  ];
  const UTCtoLocalWithYear = (date, format='MMM DD YYYY, hh:mm a') => {
    return moment(date).local().format(format);
  };
  const getHostImage = async (hostId, photoIndex) => {
    const index = photoIndex[0];
    const userPhotoID = userProfileImagePrefix + index;
    const downloadImageResponse = await downloadUserImagesFromS3(
      userPhotoID,
      hostId,
    );
    if (downloadImageResponse.status == true) {
      const blob = await downloadImageResponse.data.blob();
      const userImgBase64 = await blobToBase64(blob);
      return userImgBase64;
    }
    return null;
  };
  
  const getEventImage = async eventId => {
    const downloadImageResponse = await downloadEventImagesFromS3(
      eventImagePrefix + eventId,
    );
    if (downloadImageResponse?.status == true) {
      const blob = await downloadImageResponse?.data?.blob();
      const eventImgBase64 = await blobToBase64(blob);
      return eventImgBase64;
    }
    return null;
  };

  const getEventAssociatesInner = async (client, eventDetails) => {
    const eventId = eventDetails?.id;
    const hostId = eventDetails?.hostId;
    console.log("EventPreview - eventDetail@@@@@@@@@@@@@@@@@@@@@@@@", eventDetails);
    const hostData = await getAccountById(client, hostId);
    const hostName = hostData?.data?.userName;
    const photoIndex = hostData?.data?.userProfile?.photoIndex;
    const hostImage = await getHostImage(hostId, photoIndex);
    const eventImage = await getEventImage(eventId);
    return [hostName, hostId, hostImage, eventImage];
  };

  const getEventDetailsWithExtraInfo = async (client, eventId) => {
    const eventDetails = await GetEventDetails(client, eventId);
    const extra_info = await getEventAssociatesInner(client, eventDetails?.data);
    eventDetails.data.hostName = extra_info[0];
    eventDetails.data.hostId = extra_info[1];
    eventDetails.data.hostImage = extra_info[2];
    eventDetails.data.eventImage = extra_info[3];
    return eventDetails;
  };

  const getAccountImage = (accountIds) => {
    getAccountBatchByIds(GLOBAL.client, accountIds).then(attendeeResp => {
      if (attendeeResp?.status !== false && attendeeResp?.data !== undefined && attendeeResp?.data !== null) {
        let attendees = attendeeResp?.data
        attendees.forEach(async account => {
          const photoIndex = account?.userProfile?.photoIndex[0];
          const userPhotoID = userProfileImagePrefix + photoIndex;
          const imageResp = await downloadUserImagesFromS3(userPhotoID, account?.id)
          let imgBase64: string = ""; // Explicitly type imgBase64 as a string
          if (imageResp?.status == true) {
            const userProfileBlob = await imageResp?.data.blob()
            const userImgBase64 = await blobToBase64(userProfileBlob)
            imgBase64 = userImgBase64
          }
          account["userPhoto"] = imgBase64
          setAttendees(attendees)
        })
      }
    })
  }

  const getAttendees = (eventId) => {
    GetEventAttendees(GLOBAL.client, eventId).then(eventAttendees => {
      let accountIdSet = new Set()
      eventAttendees.forEach(account => {
        accountIdSet.add(account["user"])
      });
      const acocuntIds = Array.from(accountIdSet)
      getAccountImage(acocuntIds);
    })
  }

  useEffect(() => {
    getEventDetailsWithExtraInfo(GLOBAL.client, eventId).then(eventDetail => {
      // let temp_event_detail = eventDetail;
      // temp_event_detail.data.eventId = eventDetail?.data?.id;
      setEventDetail(eventDetail?.data);
      setTargetHostImages([eventDetail?.data?.hostImage]);
      setTargetHostName(eventDetail?.data?.hostName);
      setEventImage(eventDetail?.data?.eventImage);
      setEventTitle(eventDetail?.data?.title);
      // updateFollowers(eventDetail?.data?.hostId);
      getAttendees(eventDetail?.data?.id);
      let date = new Date(eventDetail?.data?.startTime);
      const dateString = UTCtoLocalWithYear(date);
      setEventDateTime(dateString);
      setEventType(eventDetail?.data?.eventType);
      setGenders(eventDetail?.data?.genders);

      const eventLocation = eventType == 'ONLINE' ? eventDetail?.data?.eventLink : eventDetail?.data?.location?.address;
      setEventLocation(eventLocation);
      const capacity = eventDetail?.data?.capacity ?? 'unlimited';
      setEventCapacity(capacity);
      console.log("EventPreview - eventDetail@@@@@@@@@@@@@@@@@@@@@@@@", eventDetail);
    });
    // const fetchEventDetails = async () => {
    //   const eventDetails = await GetEventDetails(GLOBAL.client, eventId);
    //   console.log("EventPreview - eventDetail@@@@@@@@@@@@@@@@@@@@@@@@", eventDetails);
    // }
    // fetchEventDetails();
    
  }, []);

  return (
    <WrapperContainer bgColor={Colors.white}>
      <Header>
        <div style={{ width: 26, height: 26 }}>
          <Image 
            src={"/images/preview/backBtn.png"} 
            alt="back"
            width="100%"
            height="100%"/>
        </div>
        <div style={{ width: 26, height: 26 }}>
          <Image
            src={"/images/preview/likeEmp.png"}
            alt="next"
            width="100%"
            height="100%"/>
        </div>
      </Header>
      <HostContainer> 
        <HostImage src={eventDetail?.hostImage} alt="host" />
        <HostName>{eventDetail?.hostName}</HostName>
      </HostContainer>
      <EventImage src={eventDetail?.eventImage} alt="event" />
      <TitleLine>
        <Title>{eventDetail?.eventName}</Title>
        <ShareButton>
          <span style={{fontSize:11, marginLeft:5}}>Share</span>
          <img src={"/images/preview/shareOrange.png"} alt="share" style={{ width: 12, height: 12, marginLeft: 10, marginRight:10}}/>
        </ShareButton>
      </TitleLine>
      <DateTime>{eventDateTime}</DateTime>
      <Location>{eventLocation}</Location>
      <CapacityContainer>
        <Capacity>Capacity: {eventCapacity}</Capacity>
        <Attendees>
          <span style={{ marginRight:2 }}>Attendees: </span>
          {attendees.slice(0, 5).map((attendee, index) => (
            attendee && attendee.userPhoto && (
            <AttendeeImage
              key={index}
              src={attendee.userPhoto}
              alt={`Attendee ${index + 1}`}
            />
            )
          ))}
        </Attendees>
      </CapacityContainer>
      <div
        style={{
          padding: "10px 15px",
          display: "flex",
          gap: "2%",
          flexWrap: "wrap",
        }}
      >
        {eventDetail?.industries.map((industry, index) => {
          const indu = INDUSTRIES.find((item) => item.enum === industry);
          const label = indu?.itemT;
          return (
            <span
              key={index}
              style={{
                color: '#6C7A9C',
                borderColor: Colors?.borderColor6EA,
                border: "0.2px solid",
                borderRadius: "10px",
                marginBottom: "1%",
                marginRight: "2%",
                paddingRight: "2%",
                paddingLeft: "2%",
                fontWeight: "300",
                fontSize: "0.8rem",
              }}
            >
              {label}
            </span>
          );
        })}
      </div>
      <Line />
      <ScrollViewWrap>
        {HorizontalScrollList?.map((res, index) => (
          <ScrollWrapInnerView key={index}>
            <CardImage src={res?.icon} alt="Icon" />
            <TextContainer>
              <HeadingText>{res?.title}</HeadingText>
              <DescText>{res?.details}</DescText>
            </TextContainer>
          </ScrollWrapInnerView>
        ))}
      </ScrollViewWrap>
      <Details>
        {eventDetail?.description}
      </Details>
      <MessageReport>
        <ButtonWrapper >
          <Icon src={"/images/preview/chatActive.png"} alt="Chat Icon" />
          <MessageText>Message host</MessageText>
        </ButtonWrapper>
        <ButtonWrapper >
          <Icon src={"/images/preview/reportIconNew.png"} alt="Report Icon" />
          <ReportText>Report</ReportText>
        </ButtonWrapper>
      </MessageReport>
      <Footer>
        <Button
          className="gradient-button"
          onClick={() => {
            window.location.href = link;
          }}
          style={{
            width: "90%",
            alignItems: "center",
            justifyContent: "center",
            fontWeight: "bold",
            fontSize: "16px",
          }}
        >
          Join now!
        </Button>
      </Footer>
      {/* Open in Netup App */}
      <div 
      style={{
        padding: "8px 0",
        backgroundColor: Colors.appColorPrimary,
        color: Colors.white,
        fontSize: "1.2rem",
        fontWeight: "500",
        position: "fixed",
        bottom: 100,
        left: '50%',
        transform: 'translateX(-50%)',
        borderRadius: 20,
        width: "48%",
      }}>
        <button 
        style={{
          display: "flex",
          justifyContent: "space-around",
          alignItems: "space-around",
          padding: "0 15px",
        }}
        onClick={() => {
          window.location.href = link;
        }}
        >
          <img src={'/newBigLogo.png'} width="30px" height="30px" style={{marginRight:"10px"}} />
          <span>Open in App</span>
        </button>
      </div>
    </WrapperContainer>
  )
};

export default EventPreview;