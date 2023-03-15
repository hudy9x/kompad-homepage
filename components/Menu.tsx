import Link from "next/link";
import useAuthen from "../hooks/useAuthen";

export default function Menu() {
  const { user, checking } = useAuthen()
  console.log(user)

  return <div id="menu" className="bg-white/75 backdrop-blur-sm border-b border-gray-200 py-3 fixed top-0 left-0 w-full z-30">
    <div className="main-box flex items-center justify-between">
      <div className="logo">
        <Link href="/">Kompad</Link>
      </div>
      <div className="menu-container">
        <Link href={"/#features"}><span className="menu-item" data-name="features">Features</span></Link>
        <Link href={"/#themes"}><span className="menu-item" data-name="themes">Themes</span></Link>
        <Link href={"/#download"}><span className="menu-item" data-name="download">Download</span></Link>
        <Link href={"/pricing-plan"}><span className="menu-item" data-name="download">Pricing</span></Link>
        <Link href={"/#faqs"}><span className="menu-item" data-name="faqs">FAQs</span></Link>
        {!checking && user ? <span className="px-2 py-1 bg-gray-100/50 rounded-md hover:bg-gray-200 cursor-pointer">Hi! {user.email}</span> :
          <Link href={"/signin"}><span className="menu-item bg-gray-50 rounded-md border border-gray-300 hover:bg-gray-100">Sign in</span></Link>}
      </div>
    </div>
  </div>
}
