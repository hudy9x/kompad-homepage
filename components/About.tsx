import Image from "next/image";
import Link from "next/link";
import AutoActiveMenu from "./AutoActiveMenu";

export default function About() {
  const teams = [
    {
      name: "@hudy9x",
      avatar: "https://avatars.githubusercontent.com/u/95471659?v=4",
      role: "Senior Web Developer",
      url: "https://github.com/hudy9x",
    },
    {
      name: "@namnn9x",
      avatar: "https://avatars.githubusercontent.com/u/94043947?v=4",
      role: "Junior Web Developer",
      url: "https://github.com/namnn9x",
    },
  ];
  return (
    <AutoActiveMenu name="about">
      <div className="bg-white border-t py-[70px] sm:py-[100px]" id="about">
        <div className="mx-auto max-w-7xl py-12 px-4 sm:py-16 sm:px-6 lg:px-8">
          <div className="mx-auto max-w-3xl">
            <h2 className="title2 pb-5 capitalize">
              Me and <span className="text-cyan-500">friends</span>
            </h2>
            <p className="text-center pt-3 px-4 sm:w-[500px] m-auto">
              Here are friends who helped me to build Kompad. Thanks for your
              supports, you guys are amazing !
            </p>
            <div className="flex flex-col sm:flex-row items-center gap-10 justify-center mt-14">
              {teams.map((member, index) => {
                const size = 100;
                return (
                  <Link href={member.url} key={index} className="">
                    <a
                      target={"_blank"}
                      className="cursor-pointer group"
                      title={member.url}
                    >
                      <div
                        className="rounded-full border-4 shadow-md shadow-gray-400 overflow-hidden m-auto"
                        style={{ width: size, height: size }}
                      >
                        <Image
                          src={member.avatar}
                          alt="avatar"
                          width={size}
                          height={size}
                          className="grayscale group-hover:grayscale-0 transition-all"
                        />
                      </div>
                      <div className="text-center mt-3">
                        <h2 className="font-medium text-gray-700 group-hover:text-blue-600 transition-all">
                          {member.name}
                        </h2>
                        <h3 className="text-sm text-gray-400">{member.role}</h3>
                      </div>
                    </a>
                  </Link>
                );
              })}
            </div>
          </div>
        </div>
      </div>
    </AutoActiveMenu>
  );
}
