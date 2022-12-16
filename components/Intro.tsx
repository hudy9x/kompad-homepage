import Image from "next/image";
import appImg from "../assets/app-image.png"
import appImg2 from "../assets/app2.png"

export default function Intro() {
  return <div id="intro" className=" pt-20 border-b border-gray-200 h-[920px] overflow-hidden">
    <div className="main-box text-center">
      <div className="flex flex-col gap-4 pt-10 pb-8">
        <h2 className="title2">Stunning text editor for <span className="title-hl2">developer</span></h2>
        <p className="w-[500px] m-auto">Lorem ipsum, dolor sit amet onsectetur s ad accusantium iusto. Incidunt totam voluptates beatae sapiente! Harum ai siur</p>
      </div>

      <div className="pt-2">
        <Image src={appImg2} alt="app image" height="800" objectFit="contain" />
      </div>
    </div>
  </div>
}
