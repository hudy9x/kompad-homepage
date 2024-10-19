import { RiGithubFill, RiGlobalFill, RiGlobeLine, RiWindowsFill } from "react-icons/ri";

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
      <span className="btn space-x-2 relative group" onClick={() => {
        const a = document.createElement("a");
        a.href = 'https://vercel.com/new/clone?repository-url=https%3A%2F%2Fgithub.com%2Fhudy9x%2Fkompad%2Ftree%2Fmain&env=REACT_APP_FIREBASE_APP_ID,REACT_APP_FIREBASE_MESSAGE_SENDER_ID,REACT_APP_FIREBASE_STORAGE_BUCKET,REACT_APP_FIREBASE_PROJECT_ID,REACT_APP_FIREBASE_AUTH_DOMAIN,REACT_APP_FIREBASE_API_KEY';
        a.click();
      }}>
        <RiGlobalFill /> <span>Vercel deploy</span>
        <span className="absolute opacity-0 group-hover:opacity-100 transition-all -top-[100px] -left-[97px] bg-black rounded-md p-2 border text-gray-200 z-10 w-[300px] leading-6">
          Please go to Github repo and read the setup document first. The build process requires some variables</span>
      </span>
      <span className="btn space-x-2 relative" onClick={() => (window.location.href = "https://github.com/hudy9x/kompad")}>

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
