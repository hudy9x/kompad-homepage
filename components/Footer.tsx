import Image from "next/image";
import appIcon from "../assets/logo.png";

export default function Footer() {
  return (
    <div id="footer" className="py-[20px] border-t bg-gray-150 text-center">
      <div className="main-box  sm:w-[750px]">
        <p className="text-gray-500 text-sm">Made with ❤ by</p>
        <p className="text-gray-900">@hudy9x</p>
      </div>
    </div>
  );
}
