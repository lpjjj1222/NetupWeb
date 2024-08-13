import React from "react";
import styled from "styled-components";
import Colors from "../styles/Colors";
import "../styles/preview.css";
import { M_PLUS_1, Rowdies } from "next/font/google";
import { GENDER, INDUSTRIES, INTENTIONS, LANGUAGE } from "../enum";

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

const HorizontalScrollList = [
    { icon: "/images/preview/meal.png", title: "Type", details: "Coffee chat" },
    { icon: "/images/preview/gender.png", title: "Gender", details: "Everyone" },
    { icon: "/images/preview/langIcon.png", title: "Language", details: "English" },
    { icon: "/images/preview/birthday.png", title: "Age", details: "20-43" },
  ];


const interestedIndustries = ['OTHERS', 'ELECTRICALENGINEERING']

const EventPreview = ({ eventId }: any) => {
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
        <HostImage src={"/images/preview/wechat.png"} alt="host" />
        <HostName>Paige Lin</HostName>
      </HostContainer>
      <EventImage src={"/images/preview/wechat.png"} alt="event" />
      <TitleLine>
        <Title>Event Title</Title>
        <ShareButton>
          <span style={{fontSize:11, marginLeft:5}}>Share</span>
          <img src={"/images/preview/shareOrange.png"} alt="share" style={{ width: 12, height: 12, marginLeft: 10, marginRight:5}}/>
        </ShareButton>
      </TitleLine>
      <DateTime>Monday, 12th July 2021</DateTime>
      <Location>1234, 5th Avenue, New York, NY 10001</Location>
      <CapacityContainer>
        <Capacity>Capacity: 50</Capacity>
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
        {interestedIndustries.map((industry, index) => {
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
        let's have a coffee chat!
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
          onClick={() => {}}
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
    </WrapperContainer>
  )
};

export default EventPreview;