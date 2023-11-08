import { IoLogoApple } from "react-icons/io";
import { RiGithubFill, RiWindowsFill } from "react-icons/ri";
import { SiLinux } from "react-icons/si";

export default function DownloadBtns() {
  const download = async (type: string) => {
    const res = await fetch(`/api/download?type=${type}`);
    const data = await res.json();
    console.log(data);

    if (!data.linkDownload) return;

    alert(
      "⚠ This app is not signed for MacOS or Windows. So you have to bypass security before using it"
    );

    const a = document.createElement("a");
    a.href = data.linkDownload;
    a.click();
  };
  return (
    <>
      <span className="btn space-x-2" onClick={() => download("win")}>
        <RiWindowsFill /> <span>Window</span>
      </span>
      <span className="btn space-x-2" onClick={() => (window.location.href = "https://github.com/hudy9x/kompad")}>
        <RiGithubFill /> <span>Source code</span>
      </span>
      {/* <span className="btn space-x-2" onClick={() => download("mac")}> */}
      {/*   <IoLogoApple /> <span>MacOS</span> */}
      {/* </span> */}
      {/* <span className="btn space-x-2" onClick={() => download("linux")}> */}
      {/*   <SiLinux /> <span>Linux</span> */}
      {/* </span> */}
    </>
  );
}
