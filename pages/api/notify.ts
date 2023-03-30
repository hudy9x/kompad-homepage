import { NextApiRequest, NextApiResponse } from "next";
import { sendNotification } from "../../libs/notify";

const url = process.env.ADMIN_URL || "";
const appId = process.env.ADMIN_APP_ID || "";

export default async function handler(
  req: NextApiRequest,
  res: NextApiResponse
) {
  const body = req.body;
  const title = `Kompad Payment - ${body.method}`;
  const message = `${body.email} sent ${body.amount}☘️ for ${body.unit} month`;
  const adminUrl = (link: string) =>
    `${url.replace(/\/*$/g, "")}/${link.replace(/^\/*/g, "")}`;

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
  });

  // send notification via Discord
  sendNotification(`${body.method === "PAYPAL" ? "🎁" : "💳"} ${message}`);

  return res.status(200).end();
}
