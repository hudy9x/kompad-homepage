import Image from 'next/image';
import appImg from "../assets/app2.png";

export default function Accessibility() {
  const accessList = [
    {
      src: appImg,
      title: "Organize",
      desc: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Suspendisse ac lectus tellus. Quisque augue ex, euismod et urna ut, varius imperdiet erat.'
    },
    {
      src: appImg,
      title: "Organize",
      desc: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Suspendisse ac lectus tellus. Quisque augue ex, euismod et urna ut, varius imperdiet erat.'
    },
    {
      src: appImg,
      title: "Organize",
      desc: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Suspendisse ac lectus tellus. Quisque augue ex, euismod et urna ut, varius imperdiet erat.'
    },
    {
      src: appImg,
      title: "Organize",
      desc: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Suspendisse ac lectus tellus. Quisque augue ex, euismod et urna ut, varius imperdiet erat.'
    },
    {
      src: appImg,
      title: "Organize",
      desc: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Suspendisse ac lectus tellus. Quisque augue ex, euismod et urna ut, varius imperdiet erat.'
    },
    {
      src: appImg,
      title: "Organize",
      desc: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Suspendisse ac lectus tellus. Quisque augue ex, euismod et urna ut, varius imperdiet erat.'
    },
  ]
  return <div id="accessibility" className="pt-[120px] py-[215px] border-b border-gray-200">
    <div className="main-box">
      <h2 className="title2">Accessibility</h2>
      <p className="text-center pt-6">You focus on the content, Kompad helps with the rest</p>
      <div className="grid grid-cols-3 pt-[50px] w-[1020px] m-auto">
        {accessList.map((item, index) => {
          return <div className="access-item w-[300px] mb-8" key={index}>
            <Image src={appImg} alt="Image" height={100} width={300} />
            <div className="access-title text-xl py-1">Organize Files</div>
            <p className="text-gray-500 text-sm">Lorem ipsum dolor sit amet, consectetur adipiscing elit. Suspendisse ac lectus tellus. Quisque augue ex, euismod et urna ut, varius imperdiet erat.</p>
          </div>
        })}
      </div>
    </div>
  </div>
}
