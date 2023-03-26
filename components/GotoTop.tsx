import Link from "next/link";
import { HiOutlineArrowSmUp } from "react-icons/hi";

export default function GotoTop() {
  return (
    <HiOutlineArrowSmUp
      onClick={() => {
        document.body.scrollIntoView();
      }}
      className="fixed bottom-10 right-4 sm:right-10 cursor-pointer hover:bg-yellow-300 w-12 h-12 rounded-lg shadow-lg z-40 p-3 bg-yellow-400 text-yellow-800 active:bg-yellow-600"
    />
  );
}
