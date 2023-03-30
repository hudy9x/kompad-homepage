import axios from "axios";

export const sendNotification = (message: string) => {
  const url =
    "https://discord.com/api/webhooks/1090890483108163584/fiXZlxaVic-2ear6beNAtYQVi8JCdylNVmzdRL9Wj7Moce1oOHq1EaCfC-1mm8OMgCDo";

  console.log("start sending webhook discord");
  return axios.post(
    url,
    {
      content: message,
      avatar_url: "https://www.kompad.app/favicon.png",
      username: "Kompad",
    },
    {
      headers: {
        "Content-Type": "application/json",
      },
    }
  );
};
