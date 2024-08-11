import { ApiResponse } from '../domainModels/ApiResponse'; // 确保路径正确
import { downloadData } from 'aws-amplify/storage';
export const downloadUserImagesFromS3 = async (key, userId) => {
    try {
      // @ts-ignore
      const {body, eTag} = await downloadData({
        key: key,
        data: File,
        options: {
          accessLevel: 'protected',
          targetIdentityId: userId,
        },
      }).result;
      return new ApiResponse(
        true,
        'Util: downloadUserImagesFromS3 - Success download image from S3',
        body,
      );
    } catch (error) {
      return new ApiResponse(
        false,
        'Util: downloadUserImagesFromS3 - Failed to download image from S3 with error: ' +
          error +
          JSON.stringify(error),
        null,
      );
    }
  };
  
  export const downloadEventImagesFromS3 = async key => {
    try {
      // @ts-ignore
      const {body, eTag} = await downloadData({
        key: key,
        data: File,
        options: {
          accessLevel: 'guest',
        },
      }).result;
      // console.log(
      //   'Util: downloadEventImagesFromS3 - Success download image from S3',
      //   body,
      //   eTag,
      // );
      return new ApiResponse(
        true,
        'Util: downloadEventImagesFromS3 - Success download image from S3',
        body,
      );
    } catch (error) {
      return new ApiResponse(
        false,
        'Util: downloadEventImagesFromS3 - Failed to download image from S3 with error: ' +
          error +
          JSON.stringify(error),
        null,
      );
    }
  };