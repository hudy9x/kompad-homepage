import Link from "next/link";

export default function Menu() {
  return <div id="menu" className="bg-white/75 backdrop-blur-sm border-b border-gray-200 py-3 fixed top-0 left-0 w-full z-30">
    <div className="main-box flex items-center justify-between">
      <div className="logo">
        <Link href="/">Kompad</Link>
      </div>
      <div className="menu-container">
        <Link href={"/#features"}><span className="menu-item" data-name="features">Features</span></Link>
        <Link href={"/#themes"}><span className="menu-item" data-name="themes">Themes</span></Link>
        <Link href={"/#download"}><span className="menu-item" data-name="download">Download</span></Link>
        <Link href={"/#faqs"}><span className="menu-item" data-name="faqs">FAQs</span></Link>
      </div>
    </div>
  </div>
}
