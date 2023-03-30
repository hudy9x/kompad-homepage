import { useRouter } from "next/router";
import fireworkPng from "../assets/firework.png";
import Image from "next/image";
import useAuthen from "../hooks/useAuthen";
import Link from "next/link";
import { toVND } from "../libs/utils";
import { useEffect } from "react";
import { sendNotify } from "../services/notification";

export default function ConfirmPayment() {
  const { user } = useAuthen();
  const router = useRouter();
  const query = router.query;
  const unit = query.unit as string;
  const method = query.method as string;
  const amount = parseInt(query.amount as string, 10) || 0;

  useEffect(() => {
    if (user?.email && amount && method && unit) {
      sendNotify({
        method: method,
        amount: amount,
        unit: parseInt(unit, 10),
        email: user?.email || "",
      });
    }
  }, [user, amount, method, unit]);

  return (
    <div className="h-screen w-screen overflow-hidden flex items-center justify-center bg-indigo-50">
      <div className="py-10 px-8 bg-white w-[400px] border rounded-lg border-indigo-100 shadow-lg shadow-indigo-200 flex justify-center flex-col gap-4">
        <div className="text-center -mt-32">
          <Image
            src={fireworkPng}
            alt="congratulations"
            width={200}
            height={200}
            objectFit="contain"
          />
        </div>
        <h1 className="text-3xl font-bold text-center">Congratulations</h1>
        <p className="text-center text-gray-500">
          Thank you for your payment!{" "}
          {method === "BANK"
            ? "Your transaction has been reviewing."
            : "Your transaction has been completed successfully."}
        </p>
        <div className="confirm-table">
          <div className="tbr">
            <div className="tbc">Email</div>
            <div className="tbc">{user?.email}</div>
          </div>
          <div className="tbr">
            <div className="tbc">Payment method</div>
            <div className="tbc">{router.query.method}</div>
          </div>
          <div className="tbr">
            <div className="tbc">Unit</div>
            <div className="tbc">{router.query.unit} (month)</div>
          </div>
          <div className="tbr">
            <div className="tbc">Amount</div>
            <div className="tbc">
              {method === "BANK" ? `${toVND(amount)}` : `$${amount}`}
            </div>
          </div>
          <div className="tbr">
            <div className="tbc">Transaction Id</div>
            <div className="tbc">{router.query.transactionId}</div>
          </div>
        </div>
        <Link href="/">
          <span className="text-center text-indigo-400 mt-2 text-sm hover:underline hover:text-indigo-500 cursor-pointer">
            Back to home page
          </span>
        </Link>
      </div>
    </div>
  );
}
