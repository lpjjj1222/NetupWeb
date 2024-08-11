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
import SwipeableViews from "react-swipeable-views";
import { autoPlay } from "react-swipeable-views-utils";
import { array } from "zod";

import GLOBAL from "~/global";
import { userProfileImagePrefix } from "../../../../src/controllers/formatConvert";
import { getAccountById } from "../../../../src/controllers/userController";
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
      const response = await getAccountById(GLOBAL.client, userId);
      const userAccount = response?.data;
      const photoIndexList = userAccount?.userProfile?.photoIndex;
      const images = await getPic(userId, photoIndexList)
      setTargetUserImages(images);
    };
    fetchAccount();
  }, []);


  const theme = useTheme();
  const [activeStep, setActiveStep] = React.useState(0);
  const handleStepChange = (step: number) => {
    setActiveStep(step);
  };

  return (
    <Box sx={{ maxHeight: 380, flexGrow: 1 }}>
      <AutoPlaySwipeableViews
        axis={theme.direction === "rtl" ? "x-reverse" : "x"}
        index={activeStep}
        onChangeIndex={handleStepChange}
        enableMouseEvents
      >
        {targetUserImages.length > 0 ? (
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
                    maxHeight: 380,
                  }}
                  src={step}
                  alt={"user photo"}
                />
              }
            </div>
          ))
        ) : (
          <p>loading...</p>
        )}
      </AutoPlaySwipeableViews>
      {/* <MobileStepper
        steps={maxSteps}
        position="static"
        activeStep={activeStep}
        nextButton={
          <Button size="small" disabled={true}></Button>
        }
        backButton={
          <Button
            size="small"
            disabled={true}
          ></Button>
        }
      /> */}
    </Box>
  );
}

export default SwipeableTextMobileStepper;
