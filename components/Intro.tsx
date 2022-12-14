import Image from "next/image";
import appImg from "../assets/app-image.png"
import appImg2 from "../assets/app2.png"

export default function Intro() {
  return <div id="intro" className=" border-b border-gray-200 h-[920px] overflow-hidden">
    <div className="main-box text-center">
      <div className="flex flex-col gap-4 pt-10 pb-8">
        <h2 className="title">Easier to compose tech blog</h2>
        <p className="w-[500px] m-auto">Lorem ipsum, dolor sit amet consectetur adipisicing elit. Natus ad accusantium iusto. Incidunt totam voluptates beatae sapiente! Harum aliquid animi sint consequuntur</p>
      </div>

      <div className="pt-2">
        <Image src={appImg2} alt="app image" height="800" objectFit="contain" />
      </div>
    </div>
  </div>
}
