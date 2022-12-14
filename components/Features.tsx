import { useState } from "react"
export default function Features() {
  const [selected, setSelected] = useState(0)
  const [carousel, setCarousel] = useState([
    {
      title: "Images", src: "",
      desc: [
        { top: 10, left: 20, content: <div>content</div> },
      ]
    },
    {
      title: "Headers", src: "",
      desc: [
        { top: 10, left: 20, content: <div>content</div> },
      ]
    },
    {
      title: "Lists", src: "",
      desc: [
        { top: 10, left: 20, content: <div>content</div> },
      ]
    },
    {
      title: "Tables", src: "",
      desc: [
        { top: 10, left: 20, content: <div>content</div> },
      ]
    },
    {
      title: "Codeblock", src: "",
      desc: [
        { top: 10, left: 20, content: <div>content</div> },
      ]
    },
    {
      title: "Diagrams", src: "",
      desc: [
        { top: 10, left: 20, content: <div>content</div> },
      ]
    },
    {
      title: "Inline styles", src: "",
      desc: [
        { top: 10, left: 20, content: <div>content</div> },
      ]
    },
    {
      title: "etc...", src: "",
      desc: [
        { top: 10, left: 20, content: <div>content</div> },
      ]
    },
  ])
  return <div id="feature">
    <div className="main-box">
      <h2 className="title text-center">Simple, yet Powerful</h2>
      <div className="feature-carousel">
        <div className="flex items-center gap-2 justify-center">
          {carousel.map((item, index) => {
            return <div key={index} className="carousel-link">{item.title}</div>
          })}
        </div>
        <div className="carousel-images">
          <div className="carousel-item"></div>
        </div>
      </div>
    </div>

  </div>
}
