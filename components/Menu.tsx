import Link from "next/link";

export default function Menu() {
  return <div id="menu" className="bg-white border-b border-gray-200 py-3">
    <div className="main-box flex items-center justify-between">
      <div className="logo">
        Kompad
      </div>
      <div className="menu-container">
        <Link href={"/#features"}><span className="menu-item">Features</span></Link>
        <Link href={"/#download"}><span className="menu-item">Download</span></Link>
        <Link href={"/#pricing"}><span className="menu-item">Pricing</span></Link>
        <Link href={"/#themes"}><span className="menu-item">Themes</span></Link>
        <Link href={"/#faq"}><span className="menu-item">FAQs</span></Link>
        <Link href={"/#about"}><span className="menu-item">About</span></Link>
      </div>
    </div>
  </div>
}
