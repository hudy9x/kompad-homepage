import { GetStaticProps } from "next";
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
import AutoActiveMenu from "../components/AutoActiveMenu";
import Layout from "../components/Layout";

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

export default function Home({ release }: { release: IRelease }) {
  const { releases, tag_name: version } = release;
  const windowFile = releases.find((r) => /\.msi$/.test(r.name));
  const macFile = releases.find((r) => /\.dmg$/.test(r.name));
  const linuxFile = releases.find((r) => /\.app\.tar\.gz$/.test(r.name));
  const windowDownloadLink = windowFile ? windowFile.browser_download_url : "";
  const macDownloadLink = macFile ? macFile.browser_download_url : "";
  const linuxDownloadLink = linuxFile ? linuxFile.browser_download_url : "";
  const links = {
    win: windowDownloadLink,
    mac: macDownloadLink,
    linux: linuxDownloadLink
  };

  return (
    <>
      <Intro />
      <AutoActiveMenu name="features" ratio={0.3}>
        <Features />
        <Accessibility />
      </AutoActiveMenu>
      <Theme />
      <LoveByUsers />
      <Download version={version} link={links} />
      <FAQs />
      <Footer />
    </>
  );
}

Home.getLayout = function getLayout(page: JSX.Element) {
  return <Layout>{page}</Layout>
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
