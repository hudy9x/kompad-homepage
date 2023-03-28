import axios from "axios";

export const sendNotification = (message: string) => {
  const url =
    "https://discord.com/api/webhooks/1090184851799416882/JDN0mnVqhuPdPCT4Ygn1nGP76avCDpMZQB9i1Ahe0iagVc77ZGzedFqEur96mtb9nacf";

  return axios.post(url, {
    content: message,
    avatar_url: "https://www.kompad.app/favicon.png",
    username: "Kompad",
  });
};
