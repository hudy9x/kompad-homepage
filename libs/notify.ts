import axios from "axios";

export const sendNotification = (message: string) => {
  const url =
    "https://discord.com/api/webhooks/1090854877065920554/TUnDWQnmg9imLntoCjSfR6j6czzZuznhaSEaVownRIesYcUh3Tex5Z78FIBLnQrwSAr9";

  return axios.post(url, {
    content: message,
    avatar_url: "https://www.kompad.app/favicon.png",
    username: "Kompad",
  });
};
