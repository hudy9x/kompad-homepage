import Image from "next/image";
import appImg2 from "../assets/app2.png";
import AutoActiveMenu from "./AutoActiveMenu";
import DownloadBtns from "./DownloadBtns";
import GithubStar from "./GithubStar";

export default function Intro() {
  return (
    <AutoActiveMenu name="intro">
      <div
        id="intro"
        className=" pt-20 border-b border-gray-300 h-[700px] sm:h-[950px] overflow-hidden"
      >
        <div className="main-box text-center">
          <div className="flex flex-col gap-4 pt-10 pb-10">
            <h2 className="title2 px-2">
              Stunning text editor for{" "}
              <span className="title-hl2">developer</span>
            </h2>
            <p className="px-6 sm:w-[500px] m-auto">
              A beautiful app that allows you to create, edit, synchonize your
              techinal document. Even custom your own look
            </p>

            <div className="flex justify-center gap-3 pt-3">
              <DownloadBtns />
            </div>
            <GithubStar />
          </div>

          <div className="inline-flex shadow-2xl shadow-gray-900">
            <Image
              src={appImg2}
              alt="app image"
              height="686"
              width="1058"
              quality={100}
            />
          </div>
        </div>
      </div>
    </AutoActiveMenu>
  );
}
