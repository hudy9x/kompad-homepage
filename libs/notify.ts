import axios from "axios";

export const sendNotification = (message: string) => {
  const url =
    "https://discord.com/api/webhooks/1090851878851579924/GvqG156Qgmo-jUFLvg3n_Nh-JMoGZfq2FLBIPcGyXJBiLUQzT1vPNxmNaLzSmym90l81 ";

  return axios.post(url, {
    content: message,
    avatar_url: "https://www.kompad.app/favicon.png",
    username: "Kompad",
  });
};
