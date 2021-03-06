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
          content="M???t c??ng c??? ????n gi???n ????? ghi ch?? v?? so???n th???o n???i dung. Cung
                  c???p ch??? nh???ng t??nh n??ng thi???t y???u cho b???n nh??: Ti??u ?????, ????nh
                  s??? th??? t???, hightlight n???i dung hay t???o checklist ????n gi???n"
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

        <div className="relative pt-6 pb-16 sm:pb-14 lg:pb-32">
          <main className="mt-16 mx-auto max-w-7xl px-4 sm:mt-24 sm:px-6 lg:mt-48">
            <div className="lg:grid lg:grid-cols-12 lg:gap-8 items-center">
              <div className="sm:text-center md:max-w-2xl md:mx-auto lg:col-span-6 lg:text-left">
                <h1>
                  <span className="mt-1 block text-3xl tracking-tight font-extrabold sm:text-4xl sm:leading-normal xl:text-5xl xl:leading-normal">
                    <span className="block text-gray-900">
                      Kompad c??ng c??? ghi ch??
                    </span>
                    <span className="block text-yellow-400">d??nh cho dev</span>
                  </span>
                </h1>
                <p className="mt-3 text-base leading-normal text-gray-500 sm:mt-5 sm:text-xl lg:text-lg xl:text-xl sm:leading-9 xl:leading-9">
                  M???t c??ng c??? ????n gi???n ????? ghi ch?? v?? so???n th???o n???i dung. Cung
                  c???p ch??? nh???ng t??nh n??ng thi???t y???u cho b???n nh??:{" "}
                  <span className="underline decoration-green-500">
                    Ti??u ?????
                  </span>
                  ,{" "}
                  <span className="underline decoration-orange-500">
                    ????nh s??? th??? t???
                  </span>
                  ,{" "}
                  <span className="underline decoration-pink-500">
                    hightlight n???i dung
                  </span>{" "}
                  hay{" "}
                  <span className="underline decoration-blue-500">
                    t???o checklist ????n gi???n
                  </span>
                </p>
                <div className="mt-8 sm:12 sm:max-w-lg sm:mx-auto sm:text-center lg:text-left lg:mx-0">
                  <p className="text-base font-medium text-gray-900">
                    <span className="rounded border border-violet-100 bg-violet-50 px-2.5 py-1 text-xs font-semibold text-violet-500 tracking-wide mr-2">
                      {version}
                    </span>
                    <span>T???i xu???ng b??? c??i t???i ????y</span>
                  </p>

                  <div className="mt-5 flex gap-4 sm:justify-center md:justify-start">
                    <Link href={windowDownloadLink}>
                      <button
                        type="button"
                        disabled={!windowDownloadLink}
                        className={`inline-flex items-center gap-2 px-5 py-2 w-52 justify-center border border-gray-300 shadow-sm text-base font-medium rounded-md text-gray-700 bg-white hover:bg-gray-50 focus:outline-none`}
                      >
                        <RiWindowsFill className="-ml-2" />
                        <span>Windows</span>
                      </button>
                    </Link>
                    <Link href={macDownloadLink}>
                      <button
                        type="button"
                        disabled={!macDownloadLink}
                        className="disabled:opacity-70 inline-flex items-center gap-2 px-5 py-2 w-52 justify-center border border-gray-300 shadow-sm text-base font-medium rounded-md text-gray-700 bg-white hover:bg-gray-50 focus:outline-none"
                      >
                        <IoLogoApple className="-ml-3" />
                        <span>MacOS</span>
                      </button>
                    </Link>
                    <Link href={linuxDownloadLink}>
                      <button
                        type="button"
                        disabled={!linuxDownloadLink}
                        className="disabled:opacity-70 inline-flex items-center gap-2 px-5 py-2 w-52 justify-center border border-gray-300 shadow-sm text-base font-medium rounded-md text-gray-700 bg-white hover:bg-gray-50 focus:outline-none"
                      >
                        <SiLinux className="-ml-3 " />
                        <span>Linux</span>
                      </button>
                    </Link>
                  </div>

                  <p className="mt-8 text-sm text-gray-500 ">
                    ???? ????y l??{" "}
                    <span className="underline decoration-pink-500">
                      phi??n b???n beta
                    </span>
                    , m???i issue ph??t sinh c??c b???n c?? th??? ph???n h???i{" "}
                    <a
                      rel="noreferrer"
                      className="underline hover:font-semibold decoration-indigo-500"
                      href="https://github.com/hudy9x/kompad-homepage/issues"
                      target={"_blank"}
                    >
                      t???i ????y
                    </a>
                  </p>

                  <Profile />
                </div>
              </div>
              <div className="mt-12 shadow-2xl relative sm:max-w-lg sm:mx-auto lg:mt-0 lg:max-w-none lg:mx-0 lg:col-span-6 lg:flex lg:items-center">
                <Image className="w-full -mt-6" src={AppImage} alt="" />
              </div>
            </div>
          </main>
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
