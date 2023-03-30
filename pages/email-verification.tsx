import Image from "next/image";
import Link from "next/link";
import { useRouter } from "next/router";
import Email from "../assets/email.png";
import { sendNotifyDiscord } from "../services/notification";

export default function EmailVerification() {
  const router = useRouter();
  const param = router.query;
  sendNotifyDiscord(`🧔 ${param.email} just registered as an user`);

  return (
    <div className="bg-gray-100 h-screen w-screen flex items-center justify-center">
      <div className="bg-white rounded-md shadow-lg py-10 px-8 text-center font-sans text-gray-500">
        <div className="w-20 h-20 m-auto">
          <Image
            src={Email}
            alt="email"
            className="w-14 h-14 m-auto text-yellow-400"
          />
        </div>
        <h2 className="text-3xl font-bold my-4 text-gray-700">
          Check your inbox
        </h2>
        <p className="mt-6 ">
          {"We've sent you a magic link to "}
          <b className="text-gray-600">{param.email}</b>.
        </p>
        <p className="mt-1">Please click the link to confirm your account</p>
        <div className="mt-4 text-xs text-gray-400">
          {`Can't see the email? Please check the spam folder.`}
        </div>
        <div className="mt-2 text-xs text-gray-400">
          If your email verified,{" "}
          <Link href={"/"} className="">
            <span className="text-yellow-500 hover:underline">
              back to home
            </span>
          </Link>
        </div>
      </div>
    </div>
  );
}
