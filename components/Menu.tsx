import Link from "next/link";

export default function Menu() {
  return <div id="menu" className="bg-white/75 backdrop-blur-sm border-b border-gray-200 py-3 fixed top-0 left-0 w-full z-30">
    <div className="main-box flex items-center justify-between">
      <div className="logo">
        Kompad
      </div>
      <div className="menu-container">
        <Link href={"/#features"}><span className="menu-item">Features</span></Link>
        <Link href={"/#themes"}><span className="menu-item">Themes</span></Link>
        <Link href={"/#download"}><span className="menu-item">Download</span></Link>
        <Link href={"/#faqs"}><span className="menu-item">FAQs</span></Link>
        <Link href={"/#pricing"}><span className="menu-item">Pricing</span></Link>
      </div>
    </div>
  </div>
}
