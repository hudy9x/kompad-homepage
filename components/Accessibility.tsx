import Image from 'next/image';
import appImg from "../assets/app2.png";
export default function Accessibility() {
  const accessList = [
    {
      src: '/category.png',
      title: "Organize Files",
      desc: 'Kompad allows you to manage your documents easily. It provides a side panel to show your documents and helps you to search them.'
    },
    {
      src: '/listing.png',
      title: "Listing",
      desc: 'Show all your document next to the sidebar. You can easily to find them by scrolling or searching.'
    },
    {
      src: '/folder.png',
      title: "Folder",
      desc: 'Group all documents that have same category in one place. Everytime you need to access them, just click on the folder.'
    },
    {
      src: '/tagging.png',
      title: "Tagging",
      desc: 'Easier to classify your content by tagging it in whatever color you loves.'
    },
    {
      src: '/autoupdate.png',
      title: "Auto Update",
      desc: 'Keep you always stay update to date to the latest version. When new vesion released a tiny circle will glows to notify you that whether update or not.'
    },
    {
      src: '/wordcounting.png',
      title: "Word Counting",
      desc: 'See how many words, characters, lines you just wrote. Event how long it takes to read the content.'
    },
  ]

  return <div id="accessibility" className="pt-[120px] py-[115px] border-b border-gray-200 bg-white relative">
    <div className="absolute top-0 left-0 w-full h-full opacity-10 pointer-events-none" style={{
      backgroundImage: "url('vecteezy_office-and-school-stationery-seamless-background-pattern_.jpg')",
      backgroundSize: "350px"
    }}></div>
    <div className="main-box">
      <h2 className="title2 text-gray-700">Accessibility</h2>
      <p className="text-center pt-6 text-gray-500 uppercase italic font-sans tracking-widest">{`/* You focus on the content, Kompad helps with the rest */`}</p>
      <div className="grid grid-cols-3 pt-[50px] w-[1020px] m-auto">
        {accessList.map((item, index) => {
          const colors = ['text-red-400', 'text-green-500', 'text-blue-400', 'text-pink-400', 'text-cyan-400', 'text-indigo-400'];
          return <div className="access-item w-[300px] mb-8" key={index}>
            <Image src={item.src} alt="Image" height={100} quality={100} width={300} className="rounded-md" />
            <div className={`access-title text-xl py-2 pt-4 font-extrabold text-gray-800`}>
              <span className={colors[index]}>#{index + 1} </span>
              {item.title}</div>
            <p className="text-gray-500 text-sm">{item.desc}</p>
          </div>
        })}
      </div>
    </div>
  </div>
}
