import { useRouter } from "next/router"
import { useEffect } from "react"
import { AiOutlineCheck } from "react-icons/ai"
import ProtectedLayout from "../components/ProtectedLayout"
import fireworkPng from "../assets/firework.png"
import Image from "next/image"
import useAuthen from "../hooks/useAuthen"
import Link from "next/link"

export default function ConfirmPayment(){
  const { user, checking } = useAuthen()
  const router = useRouter()

  console.log(router)

  return <div className="h-screen w-screen overflow-hidden flex items-center justify-center bg-indigo-50">
    <div className="py-10 px-8 bg-white w-[400px] border rounded-lg border-indigo-100 shadow-lg shadow-indigo-200 flex justify-center flex-col gap-4">
      <div className="text-center -mt-32">
        <Image src={fireworkPng} alt="congratulations" width={200} height={200} objectFit="contain" />
      </div>
      <h1 className="text-3xl font-bold text-center" >Congratulations</h1>
      <p className="text-center text-gray-500" >Thank you for your payment! Your transaction has been completed successfully. </p>
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
          <div className="tbc">${router.query.amount}</div>
        </div>
        <div className="tbr">
          <div className="tbc">Transaction Id</div>
          <div className="tbc">{router.query.transactionId}</div>
        </div>
      </div>
      <Link href="/"><span className="text-center text-indigo-400 mt-2 text-sm hover:underline hover:text-indigo-500 cursor-pointer">Back to home page</span></Link>
    </div>
  </div>
}

