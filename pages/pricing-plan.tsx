
import { GetStaticProps } from "next";
import Head from "next/head"
import Intro from "../components/Intro";
import FAQs from "../components/FAQs";
import Footer from "../components/Footer";
import Layout from "../components/Layout";
import { useState } from "react";
import { useRouter } from "next/router";

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

interface IPricingItem {
  title: string
  isFree?: boolean
  btnTitle?: string
  desc: string
  cost: number[]
  included: string[]
}

export default function PricingPlan({ release }: { release: IRelease }) {
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

  const router = useRouter();
  const [plan, setPlan] = useState('month');

  const pricingItems: IPricingItem[] = [
    {
      title: 'Free Trial',
      isFree: true,
      desc: 'You can try it in 15-days for free. No credits card required.',
      cost: [0, 0],
      included: [
        '15 days usage without any fees',
        'No setup fees',
        'Cloud synchronization',
        '50 MB Storage'
      ],
      btnTitle: 'Try it'
    },
    {
      title: 'Pro Plan',
      desc: 'Or you can unlock the limited of free plan right now.',
      cost: [3, 25],
      included: [
        'Unlock all features',
        'No setup fees',
        'Cloud synchronization',
        '2 GB Storage'
      ]
    },
  ]

  const selectPlan = (item: IPricingItem) => {
    console.log(item)
    const isFree = item.isFree

    if (isFree === true) {
      router.push("/#download")
      return;
    }

    router.push(`/checkout?type=${plan}`);
  }


  return (
    <>
      <Head> <title>Pricing plan</title> </Head>
      <div id="pricing-plan" className="pt-32 pb-20 border-b border-gray-300">
        <div className="main-box">
          <h2 className="title2"><span className="text-indigo-500">Pricing</span> plans</h2>
          <p className="px-8 text-center md:px-0 md:w-[600px] m-auto mt-6">Start taking note for free in 15 days, then add a plan to unlock additional features</p>
          <div className="pricing-table mt-10 text-center">
            <div className="pricing-options bg-gray-100 p-0.5 inline-flex rounded-md">
              <button className={`pricing-option btn ${plan === 'year' ? 'selected' : ''}`} onClick={() => setPlan("month")}>Monthly billing</button>
              <button className={`pricing-option btn ${plan === 'month' ? 'selected' : ''}`} onClick={() => setPlan("year")}>
                Yearly billing
                <span className="saving">Save 30%</span>
              </button>
            </div>
            <div className="pricing-items">
              {pricingItems.map(item => {
                const cost = plan === "year" ? item.cost[1] : item.cost[0];
                const isFree = cost === 0;
                const unit = plan === "year" ? "/ year" : "/ mon";

                return <div className="pricing-item" key={item.title}>
                  <div className="space-y-5">
                    <h2 className="text-2xl font-bold">{item.title}</h2>
                    <p className="text-gray-500">{item.desc}</p>
                    <div className="flex gap-2 items-end">
                      <span className="text-5xl font-semibold">${cost}</span>
                      <span className="text-lg">{isFree ? "for 30 days" : unit}</span>
                    </div>
                    <button onClick={() => selectPlan(item)} className="btn btn-block btn-secondary">{item.btnTitle ? item.btnTitle : `Buy ${item.title}`}</button>
                  </div>
                  <div className="included-features border-t border-gray-200 mt-8 pt-4">
                    <h3 className="mb-1">{"What's included:"}</h3>
                    {item.included.map((feature, index) => {
                      return <p className="text-gray-500 text-sm pt-1.5 flex gap-1.5" key={index}>
                        <svg className="h-5 w-5 text-green-500" x-description="Heroicon name: outline/check" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth="1.5" stroke="currentColor" aria-hidden="true">
                          <path strokeLinecap="round" strokeLinejoin="round" d="M4.5 12.75l6 6 9-13.5"></path>
                        </svg>
                        <span>{feature}</span>
                      </p>
                    })}
                  </div>
                </div>
              })}
            </div>
            <p className="px-8 text-center md:px-0 md:w-[600px] m-auto">Payment method support: Paypal, Bank</p>
          </div>
        </div>
      </div>
      <FAQs />
      <Footer />
    </>
  );
}

PricingPlan.getLayout = function getLayout(page: JSX.Element) {
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
