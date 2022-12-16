import { MenuIcon, XIcon } from "@heroicons/react/outline";
import { GetStaticProps } from "next";
import Image from "next/image";
import AppImage from "../assets/app-image.png";
import LogoImage from "../assets/logo.png";
import Link from "next/link";
import { RiWindowsFill } from "react-icons/ri";
import { IoLogoApple } from "react-icons/io";
import { SiLinux } from "react-icons/si";
import { FaFacebookSquare } from "react-icons/fa";
import {
  AiFillYoutube,
  AiOutlineGithub,
  AiOutlineGlobal,
} from "react-icons/ai";
import Head from "next/head";
import Menu from "../components/Menu";
import Intro from "../components/Intro";
import Features from "../components/Features";
import Accessibility from "../components/Accessibility";
import Theme from "../components/Theme";
import LoveByUsers from "../components/LovedByUsers";
import Download from "../components/Download";
import FAQs from "../components/FAQs";
import Footer from "../components/Footer";

interface IReleaseAsset {
  browser_download_url: string;
  size: number;
  download_count: number;
  name: string;
}

interface IRelease {
  all_releases: string;
  author: string;
  published_at: string;
  release_notes: string;
  releases: IReleaseAsset[];
  tag_name: string;
}

function Profile() {
  return (
    <div className="mt-8 text-gray-500 flex gap-4 items-center">
      <div className="flex justify-center gap-4">
        <a
          href="https://www.youtube.com/c/Komaster09/"
          target={"_blank"}
          rel="noreferrer"
        >
          <AiFillYoutube className="hover:text-red-500" />
        </a>
        <a
          href="https://www.facebook.com/hudy9x"
          target={"_blank"}
          rel="noreferrer"
        >
          <FaFacebookSquare className="hover:text-blue-500" />
        </a>
        <a href="https://www.komaster.dev/" target={"_blank"} rel="noreferrer">
          <AiOutlineGlobal className="hover:text-sky-400" />
        </a>
        <a href="https://github.com/hudy9x" target={"_blank"} rel="noreferrer">
          <AiOutlineGithub className="hover:text-gray-800" />
        </a>
      </div>
    </div>
  );
}

export default function Home({ release }: { release: IRelease }) {
  const { releases, tag_name: version } = release;
  console.log("version", version);
  const windowFile = releases.find((r) => /\.msi$/.test(r.name));
  const macFile = releases.find((r) => /\.dmg$/.test(r.name));
  const linuxFile = releases.find((r) => /\.app\.tar\.gz$/.test(r.name));
  const windowDownloadLink = windowFile ? windowFile.browser_download_url : "";
  const macDownloadLink = macFile ? macFile.browser_download_url : "";
  const linuxDownloadLink = linuxFile ? linuxFile.browser_download_url : "";

  return (
    <>
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
          <Menu/>
          <Intro />
          <Features />
          <Accessibility />
          <Theme/>
          <LoveByUsers />
          <Download version={version} link={{
            win: windowDownloadLink,
            mac: macDownloadLink,
            linux: linuxDownloadLink
          }} />
          <FAQs/>
          <Footer />
        </div>
      </div>
    </>
  );
}

export const getStaticProps: GetStaticProps = async () => {
  const res = await fetch("https://komersions.vercel.app/api/release/latest");
  const release = await res.json();

  return {
    props: {
      release,
    },
    revalidate: 120,
  };
};
