import Image from "next/image";
import appIcon from "../assets/logo.png"

export default function Footer() {
  return <div id="footer" className="background py-[70px] border-t border-yellow-900">
    <div className="main-box w-[750px]">
      <div className="flex justify-between gap-6">
        <div className="">
          <Image src={appIcon} alt="App icon" width={50} height={58} />
        </div>
        <div className="footer-list">
          <h2>Product</h2>
          <nav className="flex flex-col">
            <a href="">Documents</a>
            <a href="">Themes</a>
            <a href="">Whats New</a>
          </nav>
        </div>
        <div className="footer-list">
          <h2>Downloads</h2>
          <nav className="flex flex-col">
            <a href="">Windows</a>
            <a href="">MacOS</a>
            <a href="">Linux</a>
            <a href="">History</a>
          </nav>
        </div>
        <div className="footer-list">
          <h2>Contacts</h2>
          <nav className="flex flex-col">
            <a href="">Facebook</a>
            <a href="">Twitter</a>
            <a href="mailto:hudy9x@gmail.com">Email</a>
            <a href="">Issues</a>
          </nav>
        </div>
        <div className="footer-list">
          <h2>About</h2>
          <nav className="flex flex-col">
            <a href="">License Agreement</a>
            <a href="">Privacy Policy</a>
          </nav>
        </div>
      </div>
    </div>
  </div>
}
