import tpbankQR from "../../assets/TPBank-QR.png";
import Image from "next/image";

export default function LocalBankSection({ unit }: { unit: number }) {
  return <div className={`bank-method`}>
    <div className="bg-gray-100 inline-flex w-full justify-center p-4 rounded-md border mt-3">
      <Image src={tpbankQR} alt="Tpban" width="200" height="200" className="" />
    </div>

    <div className="bank-content mt-3 space-y-1">
      <div className="flex items-center justify-between">
        <h2 className="text-gray-500">Chủ tài khoản</h2>
        <p className="font-bold">NGUYEN HUU DAI</p>
      </div>
      <div className="flex items-center justify-between">
        <h2 className="text-gray-500">Số tài khoản</h2>
        <p className="font-bold">01005134001</p>
      </div>
      <div className="flex items-center justify-between">
        <h2 className="text-gray-500">Ngân hàng</h2>
        <p className="font-bold">Tiên Phong Bank (TPBank)</p>
      </div>
      <div className="flex items-center justify-between">
        <h2 className="text-gray-500">Nội dung chuyển khoản</h2>
        <p className="font-bold">wedse12</p>
      </div>
      <div className="flex items-center justify-between">
        <h2 className="text-gray-500">Tổng tiền</h2>
        <p className="font-bold text-red-400">{5 * 23450}</p>
      </div>
    </div>
  </div>
}
