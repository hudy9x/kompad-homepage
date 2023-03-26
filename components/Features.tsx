import { useState } from "react";
import Image from "next/image";
import headerImg from "../assets/Headers.png";
import codeImg from "../assets/Code.png";
import coverImg from "../assets/Cover.png";
import diagramImg from "../assets/Diagram.png";
import etcImg from "../assets/Etc.png";
import imageImg from "../assets/Image.png";
import inlineStyleImg from "../assets/Inline-style.png";
import listImg from "../assets/List.png";
import FeatureImage from "./features/FeatureImage";
import FeatureHeader from "./features/FeatureHeader";
import FeatureList from "./features/FeatureList";
import FeatureCover from "./features/FeatureCover";
import FeatureCode from "./features/FeatureCode";
import FeatureDiagram from "./features/FeatureDiagram";
import FeatureInlineStyle from "./features/FeatureInlineStyle";
import FeatureEtc from "./features/FeatureEtc";
import Link from "next/link";

const carousel = [
  {
    title: "Images",
    src: imageImg,
    desc: <FeatureImage />,
  },
  {
    title: "Headers",
    src: headerImg,
    desc: <FeatureHeader />,
  },
  {
    title: "Lists",
    src: listImg,
    desc: <FeatureList />,
  },
  {
    title: "Cover",
    src: coverImg,
    desc: <FeatureCover />,
  },
  {
    title: "Codeblock",
    src: codeImg,
    desc: <FeatureCode />,
  },
  {
    title: "Diagrams",
    src: diagramImg,
    desc: <FeatureDiagram />,
  },
  {
    title: "Inline styles",
    src: inlineStyleImg,
    desc: <FeatureInlineStyle />,
  },
  {
    title: "etc...",
    src: etcImg,
    desc: <FeatureEtc />,
  },
];

function FeaturesDesktop() {
  const [selected, setSelected] = useState(0);

  const selectedItem = carousel[selected];
  return (
    <div className="feature-carousel hidden sm:block">
      <div className="flex items-center gap-2 justify-center pb-10">
        {carousel.map((item, index) => {
          const active = index === selected ? "active" : "";
          return (
            <div
              key={index}
              onClick={() => setSelected(index)}
              className={`carousel-link ${active}`}
            >
              {item.title}
            </div>
          );
        })}
      </div>
      <div className="carousel-showcase text-center">
        <div className="shadow-2xl shadow-gray-600 inline-flex relative">
          <Image
            src={selectedItem.src}
            width={540}
            height={591}
            title={selectedItem.title}
            alt={selectedItem.title}
          />
          {selectedItem.desc}
        </div>
      </div>
    </div>
  );
}

function FeaturesMobile() {
  const [selected, setSelected] = useState(0);

  const selectedItem = carousel[selected];
  return (
    <div className="feature-carousel-mobile block sm:hidden">
      <div className="grid grid-cols-4 px-2 gap-2 mb-6">
        {carousel.map((item, index) => {
          return (
            <div
              key={index}
              onClick={() => {
                setSelected(index);
              }}
              className={`carousel-link whitespace-nowrap`}
            >
              {item.title}
            </div>
          );
        })}
      </div>
      <div className="carousel-showcase text-center">
        <div className="shadow-2xl shadow-gray-600 w-[340px] h-[391px] m-auto">
          <Image
            src={selectedItem.src}
            width={340}
            height={391}
            title={selectedItem.title}
            alt={selectedItem.title}
          />
        </div>
      </div>
    </div>
  );
}

export default function Features() {
  return (
    <div id="features" className="bg-pattern-1 border-b border-gray-300">
      <div className="main-box pt-[70px] sm:pt-[130px] pb-[100px] sm:pb-[160px]">
        <h2 className="title2 pb-12 px-6">
          Simple, <span className="title-hl">yet</span> Powerful
        </h2>
        <FeaturesDesktop />
        <FeaturesMobile />
      </div>
    </div>
  );
}
