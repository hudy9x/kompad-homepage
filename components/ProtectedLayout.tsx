import Menu from "../components/Menu";
import { useEffect, useState } from "react";
import { auth } from "../libs/firebase";
import { onAuthStateChanged } from "firebase/auth";
import { useRouter } from "next/router";
import { NextSeo } from "next-seo";

interface Props {
  children: JSX.Element | JSX.Element[];
}
export default function ProtectedLayout({ children }: Props) {
  const [status, setStatus] = useState("CHECKING");
  const router = useRouter();

  useEffect(() => {
    onAuthStateChanged(auth, (user) => {
      console.log(user);
      if (!user) {
        setStatus("NOT_AUTHENTICATED");
      } else {
        setStatus("AUTHENTICATED");
      }
    });
  });

  useEffect(() => {
    if (status === "NOT_AUTHENTICATED") {
      setTimeout(() => {
        router.push("/signin");
      }, 1500);
    }
  }, [status, router]);

  if (status === "CHECKING") {
    return (
      <div>
        <span>LOADING</span>
      </div>
    );
  }

  if (status === "NOT_AUTHENTICATED") {
    return (
      <div>
        <h2>NOT AUTHENTICATED</h2>
        <span>REDIRECTING TO SIGN IN PAGE ...</span>
      </div>
    );
  }

  return (
    <>
      <NextSeo
        title="Kompad - a simple editor application that built for developers"
        description="Kompad is a text note application that helps users stay organized and productive. It supports MacOS, Windows, and Linux and syncs data in real-time, so you can access your notes from anywhere. You can organize notes by folders and tags, making it easy to find what you need. Kompad also supports Markdown syntax, allowing you to format notes and add emphasis. Whether you're a writer, student, or someone who needs to keep track of information, Kompad is a simple and powerful tool for all your note-taking needs."
        canonical="https://www.canonical.ie/"
        additionalLinkTags={[
          {
            rel: "icon",
            href: "/favicon.png",
          },
        ]}
      />
      <div className="relative bg-white overflow-auto">
        <div className="relative">
          <Menu version="" />
          {children}
        </div>
      </div>
    </>
  );
}
