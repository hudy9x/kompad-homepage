import axios from "axios";

export const sendNotification = (message: string) => {
  const url =
    "https://discord.com/api/webhooks/1090874314041081886/1W7vyXkCxykobIDbBJX8e5gI_VYGdNOUeNH8id9ebsVxAxLth9-m2nAvWEkLPqVdnR7Y";

  return axios.post(url, {
    content: message,
    avatar_url: "https://www.kompad.app/favicon.png",
    username: "Kompad",
  });
};
