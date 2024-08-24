export const blobToBase64 = async (blob) => {
  return new Promise((resolve, reject) => {
      const reader = new FileReader();
      reader.onerror = reject;
      reader.onload = () => {
      resolve(reader.result);
      };
      reader.readAsDataURL(blob);
  });
}

export const userProfileImagePrefix = "personalPhoto_"

export const eventImagePrefix = "event_"

export const messageImagePrefix = "message_"