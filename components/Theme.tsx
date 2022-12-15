import Image from "next/image";
import theme1 from '../assets/theme-1.png'
import theme2 from '../assets/theme-2.png'
import theme3 from '../assets/theme-3.png'

export default function Theme() {
  return <div id="theme" className="pt-[120px] border-b border-gray-200">
    <div className="box-main">
      <h2 className="title text-center">Theme selection</h2>
      <p className="text-center pt-6">A bunches of theme for you. Or build your own</p>
      <div className="mt-10 text-center">
        <div className="theme-item">
          <Image src={theme1} alt="theme 1" width={555} height={714} />
        </div>
        <div className="theme-item -ml-72 relative z-10">
          <Image src={theme2} alt="theme 1" width={555} height={714} />
        </div>
        <div className="theme-item -ml-72 z-10 relative" >
          <Image src={theme3} alt="theme 1" width={555} height={714} />
        </div>
      </div>
    </div>
  </div>
}
