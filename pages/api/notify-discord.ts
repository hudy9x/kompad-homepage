import { NextApiRequest, NextApiResponse } from "next";
import { sendNotification } from "../../libs/notify";

export default function handler(req: NextApiRequest, res: NextApiResponse) {
  if (req.method !== "POST") {
    return res.send("Request method must be POST");
  }
  const body = req.body;

  sendNotification(body.message)
    .then(() => {
      res.status(200).end();
    })
    .catch((err) => {
      res.status(500).end();
    });
}
