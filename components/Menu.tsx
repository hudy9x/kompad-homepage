import { User } from "firebase/auth";
import Link from "next/link";
import { useState } from "react";
import {
  HiOutlineChevronDown,
  HiOutlineMenuAlt3,
  HiOutlineX,
} from "react-icons/hi";
import useAuthen from "../hooks/useAuthen";
import { signOutNow } from "../services/sign";

function UserDropdown({ user }: { user: User }) {
  const [visible, setVisible] = useState(false);
  const logout = () => {
    signOutNow();
  };
  return (
    <div
      className="px-2 py-1 rounded-md cursor-pointer inline-flex relative"
      onClick={() => {
        setVisible(!visible);
      }}
    >
      Hi! {user.email}{" "}
      <HiOutlineChevronDown className="w-5 h-5 text-gray-400" />
      <div
        className={`absolute top-10 right-0 rounded-md bg-white border border-gray-200 shadow-lg text-sm w-[175px] ${
          visible ? "" : "hidden"
        }`}
      >
        {/*<div className="px-3 py-1.5 hover:bg-gray-100">Profile</div>*/}
        {/*<div className="px-3 py-1.5 hover:bg-gray-100">Billings</div>*/}
        <div onClick={logout} className="px-3 py-1.5 hover:bg-gray-100">
          Logout
        </div>
      </div>
    </div>
  );
}

function MainMenu({
  type = "desktop",
  visible,
  onHide = () => {},
}: {
  type?: string;
  onHide?: () => void;
  visible: boolean;
}) {
  const { user, checking } = useAuthen();
  const classes =
    type === "desktop"
      ? "hidden sm:block"
      : `sm:hidden ${
          visible ? "" : "hidden"
        } flex flex-col border-t mt-3 px-2 gap-3`;

  return (
    <div className={classes}>
      <Link href={"/#features"}>
        <span className="menu-item" data-name="features" onClick={onHide}>
          Features
        </span>
      </Link>
      <Link href={"/#themes"}>
        <span className="menu-item" data-name="themes" onClick={onHide}>
          Themes
        </span>
      </Link>
      <Link href={"/#download"}>
        <span className="menu-item" data-name="download" onClick={onHide}>
          Download
        </span>
      </Link>
      <Link href={"/pricing-plan"}>
        <span className="menu-item" data-name="download" onClick={onHide}>
          Pricing
        </span>
      </Link>
      <Link href={"/#faqs"}>
        <span className="menu-item" data-name="faqs" onClick={onHide}>
          FAQs
        </span>
      </Link>
      <Link href={"/#about"}>
        <span className="menu-item" data-name="faqs" onClick={onHide}>
          About
        </span>
      </Link>
      {checking ? (
        <span className="menu-item">...</span>
      ) : !checking && user ? (
        <UserDropdown user={user} />
      ) : (
        <Link href={"/signin"}>
          <span className="menu-item bg-gray-50 rounded-md border border-gray-300 hover:bg-gray-100">
            Sign in
          </span>
        </Link>
      )}
    </div>
  );
}

export default function Menu() {
  const [visible, setVisible] = useState(false);
  const toggleMenu = () => {
    setVisible(!visible);
  };
  return (
    <div
      id="menu"
      className="bg-white/75 backdrop-blur-sm border-b border-gray-200 py-3 fixed top-0 left-0 w-full z-30"
    >
      <div className="main-box flex items-center justify-between px-4 sm:px-0">
        <div className="logo flex items-center justify-between w-full sm:inline sm:w-auto">
          <Link href="/">Kompad</Link>
          {visible ? (
            <HiOutlineX
              className="active:text-gray-400 text-gray-600 sm:hidden"
              onClick={toggleMenu}
            />
          ) : (
            <HiOutlineMenuAlt3
              onClick={toggleMenu}
              className="active:text-gray-400 text-gray-600 sm:hidden"
            />
          )}
        </div>
        <MainMenu visible={true} />
      </div>
      <MainMenu
        type="mobile"
        visible={visible}
        onHide={() => setVisible(false)}
      />
    </div>
  );
}
