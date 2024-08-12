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
import { getAccountById, GetUserFollowings, GetUserFollowers } from "../../../../src/controllers/userController";
import { downloadUserImagesFromS3 } from "../../../../src/controllers/utils";

const AutoPlaySwipeableViews = autoPlay(SwipeableViews);

// const images = [
//   {
//     imgPath: "/images/preview/wechat.png",
//   },
//   {
//     imgPath:
//       "https://images.unsplash.com/photo-1538032746644-0212e812a9e7?auto=format&fit=crop&w=400&h=250&q=60",
//   },
//   {
//     imgPath:
//       "https://images.unsplash.com/photo-1537996194471-e657df975ab4?auto=format&fit=crop&w=400&h=250",
//   },
//   {
//     imgPath:
//       "https://images.unsplash.com/photo-1512341689857-198e7e2f3ca8?auto=format&fit=crop&w=400&h=250&q=60",
//   },
// ];
const baseURL = process.env.NEXT_PUBLIC_BASE_URL || "http://localhost:3000";

function SwipeableTextMobileStepper({ userId }) {
  const [targetUserImages, setTargetUserImages] = useState<string[]>([]);
  const [targetUserName, setTargetUserName] = useState<string>("");
  const [targetUserProfile, setTargetUserProfile] = useState<any>();
  const [followingCount, setFollowingCount] = useState<number>(0);
  const [followerCount, setFollowerCount] = useState<number>(0);
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
        console.log("followerInfo", followerInfo.data.length);
        const userAccount = response?.data;
        const userName = userAccount?.userName;
        const photoIndexList = userAccount?.userProfile?.photoIndex;
        const userProfile = userAccount?.userProfile;
        console.log("@@@@@@@@userAccount", userAccount);
        console.log("@@@@@@@@userProfile", userProfile);
        const images = await getPic(userId, photoIndexList);
        setTargetUserImages(images);
        setTargetUserProfile(userProfile);
        setTargetUserName(userName);
        setFollowerCount(followerInfo.data.length);
        setFollowingCount(followingInfo.data.length);
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
    <Box sx={{ flexGrow: 1, position: "relative" }}>
      <AutoPlaySwipeableViews
        axis={theme.direction === "rtl" ? "x-reverse" : "x"}
        index={activeStep}
        onChangeIndex={handleStepChange}
        enableMouseEvents
      >
        {!loading ? (
          targetUserImages.map((step, index) => (
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
          ))
        ) : (
          <div style={{ textAlign: "center" }}>
            <ClipLoader color={Colors.gray7C} loading={loading} size={10} />
          </div>
        )}
      </AutoPlaySwipeableViews>
      <Box
        sx={{
          position: "absolute",
          bottom: 0,
          left: 0,
          zIndex: 2,
          backgroundColor: "rgba(0,0,0,0.5)",
          width: "100%",
          height: "20%",
        }}
      >
        {!loading ? (
          <div style={{          
            display: "flex",
            justifyContent: "center",
            alignItems: "center",
            flexDirection: "column",
            }}>
            <div style={{ fontSize: "1.5rem", fontWeight: "bold" }}>
              {targetUserName}
            </div>
            <div>
              {targetUserProfile.title} at {targetUserProfile.company.companyName}
            </div>
            <div>
              {followingCount} following&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;{followerCount} followers
            </div>
          </div>
        ) : (
          <ClipLoader color={Colors.gray7C} loading={loading} size={10} />
        )}
      </Box>
    </Box>
  );
}

export default SwipeableTextMobileStepper;
