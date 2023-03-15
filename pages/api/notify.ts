import { NextApiRequest, NextApiResponse } from "next";

export default async function handler(req: NextApiRequest, res: NextApiResponse) {
  const body = req.body;
  const title = `Kompad Payment - ${body.method}`
  const message = `${body.email} sent ${body.amount}☘️ for ${body.unit} month`

  fetch('https://admin.kompad.app/api/notification/send', {
    method: "POST",
    headers: {
      "content-type": "application/json"
    },
    body: JSON.stringify({
      title: title,
      body: message
    })
  })
  return res.status(200).end()
}
