import axios from "axios";

export const sendNotification = (message: string) => {
  const url =
    "https://discord.com/api/webhooks/1090894421702234132/4bMHtW0jPY7Z-nsSuJfoNEGo1gjNfOdbXExqJZOI5gqJCYvxRSAmCArsQJmd8e0B7Gk-";

  console.log("start sending webhook discord");
  return axios.post(url, {
    content: message,
    avatar_url: "https://www.kompad.app/favicon.png",
    username: "Kompad",
  });
};
