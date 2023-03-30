import axios from "axios";

export const sendNotification = (message: string) => {
  const url = process.env.DISCORD_WEBHOOK_URL || "";

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
