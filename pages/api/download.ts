// Next.js API route support: https://nextjs.org/docs/api-routes/introduction
import axios from "axios";
import type { NextApiRequest, NextApiResponse } from "next";
import { sendNotification } from "../../libs/notify";
import { IRelease } from "../../types";

export default async function handler(
  req: NextApiRequest,
  res: NextApiResponse
) {
  const query = req.query;
  const { data } = await axios(
    "https://komersions.vercel.app/api/release/latest"
  );
  const { releases } = data as IRelease;
  const windowFile = releases.find((r) => /\.msi$/.test(r.name));
  const macFile = releases.find((r) => /\.dmg$/.test(r.name));
  const linuxFile = releases.find((r) => /\.app\.tar\.gz$/.test(r.name));
  const windowDownloadLink = windowFile ? windowFile.browser_download_url : "";
  const macDownloadLink = macFile ? macFile.browser_download_url : "";
  const linuxDownloadLink = linuxFile ? linuxFile.browser_download_url : "";
  const links = {
    win: windowDownloadLink,
    mac: macDownloadLink,
    linux: linuxDownloadLink,
  };

  let linkDownload = "";

  switch (query.type) {
    case "linux":
      linkDownload = links.linux;
      break;

    case "mac":
      linkDownload = links.mac;
      break;

    default:
      linkDownload = links.win;
      break;
  }

  sendNotification(`📢 User downloaded kompad for ${query.type || "win"}`);

  res.status(200).json({
    linkDownload,
  });
}
