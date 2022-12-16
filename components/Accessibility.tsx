import Image from 'next/image';
import appImg from "../assets/app2.png";
export default function Accessibility() {
  const accessList = [
    {
      src: appImg,
      title: "Organize Files",
      desc: 'Kompad allows you to manage your documents easily. It provides a side panel to show your documents and helps you to search them'
    },
    {
      src: appImg,
      title: "Outline Document",
      desc: 'Automatically see the Outline structure of your documents in outline panel, which allows you to quickly go through the document and jump to any section with one click.'
    },
    {
      src: appImg,
      title: "Folder",
      desc: 'Group all documents that have same category in one place. Everytime you need to access them, just click on the folder'
    },
    {
      src: appImg,
      title: "Tagging",
      desc: 'Easier to classify your content by tagging it in whatever color you loves'
    },
    {
      src: appImg,
      title: "Autosave",
      desc: 'Not to care about saving your document, you only have to focus on composing your content. And the editor will save your content automatically'
    },
    {
      src: appImg,
      title: "Word Counting",
      desc: 'See how many words, characters, lines you just wrote. Event how long it takes to read the content'
    },
  ]

  return <div id="accessibility" className="pt-[120px] py-[115px] border-b border-orange-100 bg-orange-50">
    <div className="main-box">
      <h2 className="title2 text-gray-700">Accessibility</h2>
      <p className="text-center pt-6 text-gray-500">You focus on the content, Kompad helps with the rest</p>
      <div className="grid grid-cols-3 pt-[50px] w-[1020px] m-auto">
        {accessList.map((item, index) => {
          return <div className="access-item w-[300px] mb-8" key={index}>
            <Image src={appImg} alt="Image" height={100} width={300} className="rounded-md" />
            <div className="access-title text-xl py-2 pt-4 font-extrabold text-gray-700">{item.title}</div>
            <p className="text-gray-500 text-sm">{item.desc}</p>
          </div>
        })}
      </div>
    </div>
  </div>
}
