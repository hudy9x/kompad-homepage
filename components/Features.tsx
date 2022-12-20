import { useState } from "react"
import Image from "next/image"
import headerImg from "../assets/Headers.png"
import codeImg from "../assets/Code.png"
import coverImg from "../assets/Cover.png"
import diagramImg from "../assets/Diagram.png"
import etcImg from "../assets/Etc.png"
import imageImg from "../assets/Image.png"
import inlineStyleImg from "../assets/Inline-style.png"
import listImg from "../assets/List.png"
import FeatureImage from "./features/FeatureImage"
import FeatureHeader from "./features/FeatureHeader"
import FeatureList from "./features/FeatureList"
import FeatureCover from "./features/FeatureCover"
import FeatureCode from "./features/FeatureCode"
import FeatureDiagram from "./features/FeatureDiagram"
import FeatureInlineStyle from "./features/FeatureInlineStyle"
import FeatureEtc from "./features/FeatureEtc"

export default function Features() {
  const [selected, setSelected] = useState(0)
  const [carousel] = useState([
    {
      title: "Images", src: imageImg,
      desc: <FeatureImage />
    },
    {
      title: "Headers", src: headerImg,
      desc: <FeatureHeader />
    },
    {
      title: "Lists", src: listImg,
      desc: <FeatureList />
    },
    {
      title: "Cover", src: coverImg,
      desc: <FeatureCover />
    },
    {
      title: "Codeblock", src: codeImg,
      desc: <FeatureCode />
    },
    {
      title: "Diagrams", src: diagramImg,
      desc: <FeatureDiagram />
    },
    {
      title: "Inline styles", src: inlineStyleImg,
      desc: <FeatureInlineStyle />
    },
    {
      title: "etc...", src: etcImg,
      desc: <FeatureEtc />
    },
  ])

  const selectedItem = carousel[selected]

  return <div id="features" className="bg-pattern-1 border-b border-gray-300">
    <div className="main-box pt-[130px] pb-[160px]">
      <h2 className="title2 pb-12">Simple, <span className="title-hl">yet</span> Powerful</h2>
      <div className="feature-carousel">
        <div className="flex items-center gap-2 justify-center pb-10">
          {carousel.map((item, index) => {
            const active = index === selected ? 'active' : ''
            return <div key={index}
              onClick={() => setSelected(index)}
              className={`carousel-link ${active}`}>{item.title}</div>
          })}
        </div>
        <div className="carousel-showcase text-center">
          <div className="shadow-2xl shadow-gray-600 inline-flex relative">
            <Image src={selectedItem.src} width={540} height={591} title={selectedItem.title} alt={selectedItem.title} />
            {selectedItem.desc}
          </div>
        </div>
      </div>
    </div>

  </div>
}
