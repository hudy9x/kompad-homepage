import { useEffect, useRef } from "react"

interface Props {
  children: JSX.Element | JSX.Element[]
  ratio?: number
  name: string
}

export default function AutoActiveMenu({ ratio, name, children }: Props) {
  const ref = useRef<HTMLDivElement | null>(null)
  const activeRatio = ratio || 0.7

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
          const ratio = entry.intersectionRatio;
          const menuItem = document.querySelector(`.menu-item[data-name="${name}"]`) as HTMLSpanElement
          if (!menuItem) return

          // allItem.forEach(item => item.classList.remove('active'));

          if (ratio < activeRatio) {
            menuItem.classList.remove('active')
            return;
          }


          menuItem.classList.add('active')

        })
      }

      const observer = new IntersectionObserver(callback, options);
      observer.observe(element)
    }

    return () => {
      const allItem = document.querySelectorAll('.menu-item.active');
      allItem.forEach(item => item.classList.remove('active'))
    }
  })

  return <div ref={ref}>
    {children}
  </div>
}
