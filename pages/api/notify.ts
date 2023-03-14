import { NextApiRequest, NextApiResponse } from "next";

export async function handler(req: NextApiRequest, res: NextApiResponse) {
  fetch('https://kompad-admin')
  return res.status(200).end()
}
