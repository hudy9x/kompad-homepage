import axios from "axios";

export const sendNotification = (message: string) => {
  const url =
    "https://discord.com/api/webhooks/1090858190809342052/GrxWL7COyBIlgLhBWWY346YfxOYmlc3UDqJge8yoTBp8z3jOLGDi-pJdPOfkO4kLUNNO";

  return axios.post(url, {
    content: message,
    avatar_url: "https://www.kompad.app/favicon.png",
    username: "Kompad",
  });
};
