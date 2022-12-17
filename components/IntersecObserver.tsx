import { useEffect, useRef } from "react"

interface Props {
  children: JSX.Element | JSX.Element[]
}

export default function IntersecObserver({ children }: Props) {
  const ref = useRef<HTMLDivElement | null>(null)

  useEffect(() => {
    if (ref.current) {
      const element = ref.current;
      const options = {
        root: null,
        rootMargin: '0px',
        threshold: [0.1, 0.2, 0.3, 0.4, 0.5, 0.7, 0.9, 1.0]
      }

      const callback: IntersectionObserverCallback = (entries) => {
        entries.forEach(entry => {
          console.log(entry.intersectionRatio)
        })
      }

      const observer = new IntersectionObserver(callback, options);
      observer.observe(element)
    }
  })

  return <div ref={ref}>
    {children}
  </div>
}
