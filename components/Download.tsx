import { RiWindowsFill } from "react-icons/ri";
import { IoLogoApple } from "react-icons/io";
import { SiLinux } from "react-icons/si";
import Image from "next/image";
import appIcon from "../assets/logo.png";
import AutoActiveMenu from "./AutoActiveMenu";
import DownloadBtns from "./DownloadBtns";

interface Props {
  version: string;
  link: {
    win: string;
    mac: string;
    linux: string;
  };
}

export default function Download({ version, link }: Props) {
  return (
    <AutoActiveMenu name="download">
      <div
        id="download"
        className="bg-pattern-1 pt-[100px] sm:pt-[200px] pb-[150px] sm:pb-[250px] border-b border-gray-200"
      >
        <div className="main-box">
          <h2 className="title2 pb-16 px-5">
            want to try <span className="title-hl4">Kompad</span> ?
          </h2>
          <div className="flex justify-center">
            <div className="space-y-5">
              <div className="flex items-start px-6 py-4 sm:gap-8 sm:p-12 bg-white/80 rounded-lg shadow-2xl">
                <div className="hidden sm:block">
                  <Image
                    src={appIcon}
                    alt="App icon"
                    height={120}
                    width={106}
                    className=""
                  />
                </div>
                <div>
                  <small className="text-xs text-yellow-600">
                    Version {version}
                  </small>
                  <p className="w-72 text-gray-500 pt-1">
                    Stunning text editor that easy to use. Built for developer
                  </p>
                  <div className="flex gap-3 pt-3">
                    <DownloadBtns />
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </AutoActiveMenu>
  );
}
