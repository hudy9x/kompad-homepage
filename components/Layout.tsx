import Head from 'next/head';
import Menu from '../components/Menu';

interface Props {
  children: JSX.Element | JSX.Element[]
}
export default function Layout({children}: Props) {
  return (<>
      <Head>
        <link rel="shortcut icon" href="/favicon.png" />
        <title>Kompad</title>
        <meta
          name="description"
          content="Một công cụ đơn giản để ghi chú và soạn thảo nội dung. Cung
                  cấp chỉ những tính năng thiết yếu cho bạn như: Tiêu đề, đánh
                  số thứ tự, hightlight nội dung hay tạo checklist đơn giản"
        ></meta>
      </Head>
      <div className="relative bg-white overflow-hidden">
        <div
          className="hidden lg:block lg:absolute lg:inset-0"
          aria-hidden="true"
        >
          <svg
            className="absolute top-0 left-1/2 transform translate-x-64 -translate-y-8"
            width={640}
            height={784}
            fill="none"
            viewBox="0 0 640 784"
          >
            <defs>
              <pattern
                id="9ebea6f4-a1f5-4d96-8c4e-4c2abf658047"
                x={118}
                y={0}
                width={20}
                height={20}
                patternUnits="userSpaceOnUse"
              >
                <rect
                  x={0}
                  y={0}
                  width={4}
                  height={4}
                  className="text-gray-200"
                  fill="currentColor"
                />
              </pattern>
            </defs>
            <rect
              y={72}
              width={640}
              height={640}
              className="text-gray-50"
              fill="currentColor"
            />
            <rect
              x={118}
              width={404}
              height={784}
              fill="url(#9ebea6f4-a1f5-4d96-8c4e-4c2abf658047)"
            />
          </svg>
        </div>

        <div className="relative">
          <Menu />
          {children}
        </div>
      </div>
    </>
  );}
