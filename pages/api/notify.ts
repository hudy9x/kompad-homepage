import { NextApiRequest, NextApiResponse } from "next";
import { sendNotification } from "../../libs/notify";

const url = process.env.ADMIN_URL || "";
const appId = process.env.ADMIN_APP_ID || "";

export default async function handler(
  req: NextApiRequest,
  res: NextApiResponse
) {
  if (req.method !== "POST") return res.status(400).end()

  const promises = [];
  const body = req.body;
  const title = `Kompad Payment - ${body.method}`;
  const message = `${body.email} paied $${body.amount} for ${body.unit} month`;
  const adminUrl = (link: string) =>
    `${url.replace(/\/*$/g, "")}/${link.replace(/^\/*/g, "")}`;

  promises.push(
    fetch(adminUrl("api/notification/send"), {
      method: "POST",
      headers: {
        "content-type": "application/json",
        "app-id": appId,
      },
      body: JSON.stringify({
        title: title,
        body: message,
        link: adminUrl(`/transactions`),
      }),
    })
  );

  // send notification via Discord
  promises.push(
    sendNotification(`${body.method === "PAYPAL" ? "🎁" : "💳"} ${message}`)
  );

  Promise.allSettled(promises)
    .then(() => {
      console.log("sending notification success");
    })
    .catch((err) => {
      console.log("sending notification failure");
      console.log(err);
    })
    .finally(() => {
      console.log("End");
      res.status(500).end();
    });
}
