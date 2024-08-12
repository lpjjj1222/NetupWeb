import * as React from "react";
import { useEffect, useState } from "react";
import KeyboardArrowLeft from "@mui/icons-material/KeyboardArrowLeft";
import KeyboardArrowRight from "@mui/icons-material/KeyboardArrowRight";
import Box from "@mui/material/Box";
import Button from "@mui/material/Button";
import MobileStepper from "@mui/material/MobileStepper";
import Paper from "@mui/material/Paper";
import { useTheme } from "@mui/material/styles";
import Typography from "@mui/material/Typography";
import { ClipLoader } from "react-spinners";
import SwipeableViews from "react-swipeable-views";
import { autoPlay } from "react-swipeable-views-utils";
import { array, set } from "zod";

import GLOBAL from "~/global";
import Colors from "~/styles/Colors";
import { userProfileImagePrefix } from "../../../../src/controllers/formatConvert";
import {
  getAccountById,
  GetUserFollowers,
  GetUserFollowings,
} from "../../../../src/controllers/userController";
import { downloadUserImagesFromS3 } from "../../../../src/controllers/utils";
import { GENDER, INDUSTRIES, INTENTIONS, LANGUAGE } from "../enum";

const AutoPlaySwipeableViews = autoPlay(SwipeableViews);

const tagstyles: React.CSSProperties[] = [
  { backgroundColor: "#C2D9F4", color: "#5A99E2" },
  { backgroundColor: "#FFDAB9", color: "#8B4513" },
  { backgroundColor: "#FFFEC8", color: "#C68E17" },
  { backgroundColor: "#F7D5BD", color: "#656363" },
  { backgroundColor: "#C9D0FF", color: "#23395d" },
  { backgroundColor: "#B0E0E6", color: "#3B9C9C" },
];

function SwipeableTextMobileStepper({ userId }) {
  const [targetUserImages, setTargetUserImages] = useState<string[]>([]);
  const [targetUserName, setTargetUserName] = useState<string>("");
  const [targetUserProfile, setTargetUserProfile] = useState<any>();
  const [followingCount, setFollowingCount] = useState<number>(0);
  const [followerCount, setFollowerCount] = useState<number>(0);
  const [industry, setIndustry] = useState<string>("");
  const [gender, setGender] = useState<string>("");
  const [loading, setLoading] = useState<boolean>(true);
  const getPic = async (userId, photoIndexT) => {
    const imagesList: string[] = [];
    for (var photoIndex in photoIndexT) {
      const index = photoIndexT[photoIndex];
      const userPhotoID = userProfileImagePrefix + index;
      const downloadImageResponse = await downloadUserImagesFromS3(
        userPhotoID,
        userId,
      );
      if (downloadImageResponse.status == true) {
        const blob = await downloadImageResponse.data;
        const ImageUrl = URL.createObjectURL(blob);
        imagesList.push(ImageUrl);
      }
    }
    return imagesList;
  };

  useEffect(() => {
    const fetchAccount = async () => {
      try {
        const response = await getAccountById(GLOBAL.client, userId);
        const followingInfo = await GetUserFollowings(GLOBAL.client, userId);
        const followerInfo = await GetUserFollowers(GLOBAL.client, userId);
        const userAccount = response?.data;
        const userName = userAccount?.userName;
        const photoIndexList = userAccount?.userProfile?.photoIndex;
        const userProfile = userAccount?.userProfile;
        console.log("@@@@@@@@userProfile", userProfile);
        const images = await getPic(userId, photoIndexList);
        setTargetUserImages(images);
        setTargetUserProfile(userProfile);
        setTargetUserName(userName);
        setFollowerCount(followerInfo.data.length);
        setFollowingCount(followingInfo.data.length);
        const industry = INDUSTRIES.find((item) => item.enum === userProfile.industry);
        const gender = GENDER.find((item)=> item.enum === userProfile.gender);
        setIndustry(industry?.itemT!);
        setGender(gender?.label!);
      } catch (error) {
        console.log("Error fetching data:", error);
      } finally {
        setLoading(false);
      }
    };
    fetchAccount();
  }, []);

  const theme = useTheme();
  const [activeStep, setActiveStep] = React.useState(0);
  const handleStepChange = (step: number) => {
    setActiveStep(step);
  };

  return (
    <Box sx={{backgroundColor:'white'}}>
      {!loading ? (
        <Box>
          {/* Carousel */}
          <Box sx={{ flexGrow: 1, position: "relative" }}>
            <AutoPlaySwipeableViews
              axis={theme.direction === "rtl" ? "x-reverse" : "x"}
              index={activeStep}
              onChangeIndex={handleStepChange}
              enableMouseEvents
            >
              {targetUserImages.map((step, index) => (
                <div key={index}>
                  {
                    <Box
                      component="img"
                      sx={{
                        display: "block",
                        overflow: "hidden",
                        width: "100%",
                        height: "auto",
                      }}
                      src={step}
                      alt={"user photo"}
                    />
                  }
                </div>
              ))}
            </AutoPlaySwipeableViews>
            <Box
              sx={{
                position: "absolute",
                bottom: 0,
                left: 0,
                zIndex: 2,
                backgroundColor: "rgba(0,0,0,0.5)",
                width: "100%",
                height: "26%",

              }}
            >
              <div
                style={{
                  display: "flex",
                  justifyContent: "center",
                  alignItems: "center",
                  flexDirection: "column",
                }}
              >
                <div style={{ fontSize: "1.5rem", fontWeight: "bold" }}>
                  {targetUserName}
                </div>
                <div>
                  {targetUserProfile.title} at{" "}
                  {targetUserProfile.company.companyName}
                </div>
                <div>
                  {followingCount}{" "}
                  following&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;
                  {followerCount} followers
                </div>
              </div>
            </Box>
          </Box>

          {/* About */}
          <div style={{ padding: "2% 6%" }}>
            <div
              style={{
                fontSize: "1rem",
                color: Colors.gray7C,
                fontWeight: "bold",
                marginBottom: "2%",
              }}
            >
              About
            </div>
            <div style={{ fontSize: "0.8rem", color: Colors.blackOpacity80 }}>
              {targetUserProfile.selfIntroduction}
            </div>
          </div>
          {/* Lineview */}
          <Box style={{ backgroundColor: "#DADADA", height: "1.2vh", width:"100%" }}></Box>
          {/* Intentions */}
          <div style={{ padding: "2% 10%" }}>
            <div
              style={{
                fontSize: "1rem",
                color: Colors.black,
                fontWeight: "bold",
              }}
            >
              Intentions
            </div>
          </div>
          <div
          style={{ 
            padding: "0 10%",
            display: "flex",
            gap: "2%",
            flexWrap: "wrap"
          }}
          >
            {targetUserProfile.intention.map((inte, index) => {
              const intention = INTENTIONS.find((item) => item.enum === inte);
              const label = intention?.itemT;
              const tagStyle = tagstyles[index % tagstyles.length];
              return (
                <span key={index} style={{
                  backgroundColor: tagStyle.backgroundColor,
                  color: tagStyle.color,
                  borderColor: tagStyle.color,
                  border: "1px solid",
                  borderRadius: "4px",
                  marginRight: "2%",
                  marginBottom: "2%",
                  paddingRight: "2%",
                  paddingLeft: "2%",
                  fontWeight: "500",
                  fontSize: "0.8rem"
                }}>
                  {label}
                </span>
              );
            })}
          </div>
          {/* Location */}
          <div style={{ padding: "2% 10%" }}>
            <div
              style={{
                fontSize: "1rem",
                color: Colors.black,
                fontWeight: "bold",
              }}
            >
              Location
            </div>
          </div>
          <div
          style={{ padding: "0 10%"}}
          >
            <span style={{
              color: Colors.black,
              borderColor: Colors?.borderColor6EA,
              border: "0.2px solid",
              borderRadius: "4px",
              marginRight: "2%",
              paddingRight: "2%",
              paddingLeft: "2%",
              fontWeight: "600",
              fontSize: "0.9rem"
            }}>
              {targetUserProfile.location.city}, {targetUserProfile.location.state}
            </span>
          </div>
          {/* My Industry */}
          <div style={{ padding: "2% 10%" }}>
            <div
              style={{
                fontSize: "1rem",
                color: Colors.black,
                fontWeight: "bold",
              }}
            >
              My industry
            </div>
          </div>
          <div
          style={{ padding: "0 10%"}}
          >
            <span style={{
              color: Colors.black,
              borderColor: Colors?.borderColor6EA,
              border: "0.2px solid",
              borderRadius: "4px",
              marginRight: "2%",
              paddingRight: "2%",
              paddingLeft: "2%",
              fontWeight: "300",
              fontSize: "0.9rem"
            }}>
              {industry}
            </span>
    
          </div>
          {/* Language */}
          <div style={{ padding: "2% 10%" }}>
            <div
              style={{
                fontSize: "1rem",
                color: Colors.black,
                fontWeight: "bold",
              }}
            >
              Languages
            </div>
          </div>
          <div
          style={{ padding: "0 10%"}}
          >
            {targetUserProfile.language.map((lang, index) => {
              const language = LANGUAGE.find((item) => item.enum === lang);
              const label = language?.label;
              const tagStyle = tagstyles[(index + 4) % tagstyles.length];
              return (
                <span key={index} style={{
                  backgroundColor: tagStyle.backgroundColor,
                  color: tagStyle.color,
                  borderColor: tagStyle.color,
                  border: "0.3px solid",
                  borderRadius: "4px",
                  marginRight: "2%",
                  paddingRight: "2%",
                  paddingLeft: "2%",
                  fontWeight: "500",
                  fontSize: "0.8rem"
                }}>
                  {label}
                </span>
              );
            })}
          </div>
          <div style={{height:"1.5vh"}}></div>
          {/* Lineview */}
          <Box style={{ backgroundColor: "#DADADA", height: "1.2vh", width:"100%" }}></Box>
          {/* Interested industries */}
          <div style={{ padding: "2% 10%" }}>
            <div
              style={{
                fontSize: "1rem",
                color: Colors.black,
                fontWeight: "bold",
              }}
            >
              Interested industries
            </div>
          </div>
          <div
          style={{ 
            padding: "0 10%",
            display: "flex",
            gap: "2%",
            flexWrap: "wrap"

          }}
          >
            {targetUserProfile.interestedIndustries.map((industry, index) => {
              const indu = INDUSTRIES.find((item) => item.enum === industry);
              const label = indu?.itemT;
              return (
                <span key={index} style={{
                  color: Colors.black,
                  borderColor: Colors?.borderColor6EA,
                  border: "0.2px solid",
                  borderRadius: "4px",
                  marginBottom: "1%",
                  marginRight: "2%",
                  paddingRight: "2%",
                  paddingLeft: "2%",
                  fontWeight: "300",
                  fontSize: "0.8rem"
                }}>
                  {label}
                </span>
              );
            })}
          </div>
          {/* Expertise */}
          <div style={{ padding: "2% 10%" }}>
            <div
              style={{
                fontSize: "1rem",
                color: Colors.black,
                fontWeight: "bold",
              }}
            >
              Expertise
            </div>
          </div>
          <div
          style={{ 
            padding: "0 10%",
            display: "flex",
            gap: "2%",
            flexWrap: "wrap"
          }}
          >
            {targetUserProfile.expertise.map((exp, index) => {
              const tagStyle = tagstyles[index % tagstyles.length];
              return (
                <span key={index} style={{
                  backgroundColor: tagStyle.backgroundColor,
                  color: tagStyle.color,
                  borderColor: tagStyle.color,
                  border: "1px solid",
                  borderRadius: "4px",
                  marginRight: "2%",
                  marginBottom: "2%",
                  paddingRight: "2%",
                  paddingLeft: "2%",
                  fontWeight: "500",
                  fontSize: "0.8rem"
                }}>
                  {exp}
                </span>
              );
            })}
          </div>
          {/* Lineview */}
          <Box style={{ backgroundColor: "#DADADA", height: "1.2vh", width:"100%", marginTop:"4%"}}></Box>
          {/* gender */}
          <div style={{
            display: "flex",
            padding: "2% 10%",
            marginBottom: "2%",
            marginTop: "2%",
          }}>
            <div 
            style={{
              width:"30%",
              height:"20%",
              border: "1px solid",
              borderColor: Colors?.borderColor6EA,
              borderRadius: "4px",
              display: "flex",
              justifyContent: "space-around",
              alignItems: "center",
              padding: "0% 2%",
              overflow: "hidden",
              }}>
                <img src={"/images/preview/gender.png"} width="25px" height="25px" />
                <div style={{
                  display:"flex",
                  flexDirection: "column",
                  justifyContent: "center",
                  alignItems: "center",
                  fontSize: "0.8rem",
                  color: Colors.black,


                  }}>
                    <div style={{fontWeight:'bold', fontSize:'0.9rem'}}>Gender</div>
                    <div>{gender}</div>

                </div>

              
            </div>

          </div>
          {/* Lineview */}
          <Box style={{ backgroundColor: "#DADADA", height: "0.1vh", width:"100%" }}></Box>
          {/* report */}
          <div style={{textAlign:'center', marginBottom:'60px'}}>
            <div style={{
              display:'flex',
              flexDirection:'column',
              justifyContent:'center',
              alignItems:'center',
              padding: "2% 10%",
            }}>
              <img src={"/images/preview/reportIconNew.png"} width="25px" height="25px" />
              <div
              style={{
                fontSize: "0.8rem",
                color: Colors.black,
              }}
              >Report</div>

            </div>

          </div>
        </Box>
      ) : (
        <ClipLoader
          color={Colors.appColorPrimary}
          loading={loading}
          size={50}
        />
      )}
    </Box>
  );
}

export default SwipeableTextMobileStepper;
