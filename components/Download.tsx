import { RiWindowsFill } from "react-icons/ri";
import { IoLogoApple } from "react-icons/io";
import { SiLinux } from "react-icons/si";
import Image from "next/image";
import appIcon from "../assets/logo.png"

interface Props {
  version: string
  link: {
    win: string
    mac: string
    linux: string
  }
}

export default function Download({ version, link }: Props) {
  return <div id="download" className="bg-pattern-1 pt-[200px] pb-[250px] border-b border-gray-200">
    <div className="main-box">
      <h2 className="text-4xl text-center font-extrabold pb-12" style={{ textShadow: "5px 5px #e3e3e3"}}>want to try <span className="text-yellow-400">Kompad</span> ?</h2>
      <div className="flex justify-center">
        <div className="space-y-5">
          <div className="flex items-start gap-8 p-12 bg-white rounded-lg shadow-2xl">
            <Image src={appIcon} alt="App icon" height={120} width={106} />
            <div>
              <small className="text-xs text-yellow-600">Version {version}</small>
              <p className="w-72 text-gray-600">Stunning text editor that easy to use. And built for developer</p>
              <div className="flex gap-3 pt-3">
                <a href={link.win} className="btn space-x-2"><RiWindowsFill /> <span>Window</span></a>
                <a href={link.mac} className="btn space-x-2"> <IoLogoApple /> <span>MacOs</span></a>
                <a href={link.linux} className="btn space-x-2"> <SiLinux /> <span>Linux</span></a>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  </div >
}
