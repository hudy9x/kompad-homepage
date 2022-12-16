import { useEffect, useState } from 'react'
interface Props {
  container: { x: number, y: number },
  dash: { x: number, y: number, width: number },
  popup: { x: number, y: number }
  title: string,
  desc: string | JSX.Element
  delay?: number
}
export default function FeatureBox({ container, dash, popup, title, desc, delay = 500 }: Props) {
  const [visible, setvisible] = useState(false)
  const { x: cx, y: cy } = container;
  const { x: dx, y: dy, width: dw } = dash
  const { x: px, y: py } = popup

  useEffect(() => {
    setTimeout(() => {
      setvisible(true)
    }, delay)
  })

  return <>
    <div className="carousel-desc-popup" style={{ top: cy, left: cx }}>
      <div className="carousel-point"></div>
      <div className={`desc-container ${visible ? "active" : ""}`}>
        <div className="desc-dash" style={{ top: dy, left: dx, width: dw }}></div>
        <div className="carousel-desc-container" style={{ top: py, left: px }}>
          <div className="carousel-desc-title">{title}</div>
          <div className="carousel-desc-detail">{desc}</div>
        </div>
      </div>
    </div>
  </>
}
