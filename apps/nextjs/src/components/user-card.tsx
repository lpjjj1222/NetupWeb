import * as React from "react";
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
import { getAccountById } from "../../../../src/controllers/userController";
import GLOBAL from "~/global";
import {
  userProfileImagePrefix,
} from "../../../../src/controllers/formatConvert";
import { downloadUserImagesFromS3 } from "../../../../src/controllers/utils";
import { useState, useEffect } from "react";
import { array } from "zod";
const AutoPlaySwipeableViews = autoPlay(SwipeableViews);

const images = [
  {
    imgPath:
      "/images/preview/wechat.png",
  },
  {
    imgPath:
      "https://images.unsplash.com/photo-1538032746644-0212e812a9e7?auto=format&fit=crop&w=400&h=250&q=60",
  },
  {
    imgPath:
      "https://images.unsplash.com/photo-1537996194471-e657df975ab4?auto=format&fit=crop&w=400&h=250",
  },
  {
    imgPath:
      "https://images.unsplash.com/photo-1512341689857-198e7e2f3ca8?auto=format&fit=crop&w=400&h=250&q=60",
  },
];
const baseURL = process.env.NEXT_PUBLIC_BASE_URL || 'http://localhost:3000';





function SwipeableTextMobileStepper({userId}) {
  const [targetUserImages, setTargetUserImages] = useState<string[]>([]);
  const getPic = async (userId, photoIndexT) => {
    const imagesList: string[] = [];
    for (var photoIndex in photoIndexT) {
      const index = photoIndexT[photoIndex];
      const userPhotoID = userProfileImagePrefix + index;
      console.log('userPhotoID', userPhotoID);
      const downloadImageResponse = await downloadUserImagesFromS3(
        userPhotoID,
        userId,
      );
      if (downloadImageResponse.status == true) {
        const blob = await downloadImageResponse.data.blob();
        const formData = new FormData();
        formData.append('blobData', blob);
        fetch(`${baseURL}/en/api/convertBlobToBase64`, {
            method: 'POST',
            body: formData,
        })
        .then(response => response.json())
        .then(data => {
            // console.log('Base64:', data.base64);
            const userImgBase64Str = data.base64 as string;
            imagesList.push(userImgBase64Str);
            console.log('pushed',userImgBase64Str[0]);
        });
        


        // const userImgBase64: unknown = await blobToBase64(blob);
        // const userImgBase64Str = userImgBase64 as string;
        // imagesList.push(userImgBase64Str);
      }
    }
    return imagesList;
  };
  
  
  const fetchAccount = async () => {
    console.log('getaccountbyiding');
    const response = await getAccountById(GLOBAL.client, userId);
    const userAccount = response?.data;
    const photoIndexList = userAccount?.userProfile?.photoIndex;
    console.log('@@@@@@@@@@', photoIndexList);
    getPic(userId, photoIndexList).then(images => {
      console.log('images', images);
      setTargetUserImages(images);
    })
};

  fetchAccount();




  const theme = useTheme();
  const [activeStep, setActiveStep] = React.useState(0);
  const maxSteps = images.length;
  const handleStepChange = (step: number) => {
    setActiveStep(step);
  };


  return (
    <Box sx={{ maxHeight: 380,flexGrow:1 }}>
      <span>{userId}</span>
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
                alt={'user photo'}
              />
            }
          </div>
        ))):
        (<p>loading...</p>)
      }
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
