import tpbankQR from "../../assets/TPBank-QR.png";
import Image from "next/image";
import { calculateCost, otpGenerator, toVND, usdToVND } from "../../libs/utils";
import useAuthen from "../../hooks/useAuthen";
import { createTransaction } from "../../services/transaction";
import { PaymentMethod, TransactionStatus } from "../../services/_type";
import { useRouter } from "next/router";

export default function LocalBankSection({ unit }: { unit: number }) {
  const { user } = useAuthen();
  const { total } = calculateCost(unit);
  const { push } = useRouter();

  if (!user) {
    return null;
  }

  const email = user.email;
  const randomOtp = otpGenerator(5).toUpperCase();
  const otp = `${email?.replace(/@.*$/g, "")} CK ${randomOtp} `;

  const onCreate = () => {
    createTransaction({
      unit,
      amount: usdToVND(total),
      method: PaymentMethod.BANK,
      currency: "VND",
      status: TransactionStatus.PENDING,
      code: otp,
    }).then((transactionId) => {
      localStorage.setItem("t", new Date().getTime() + "");
      push(
        `/confirm-payment?unit=${unit}&amount=${total}&method=BANK&transactionId=${transactionId}}`
      );
    });
  };

  return (
    <div className={`bank-method`}>
      <div className="bg-gray-100 inline-flex w-full justify-center p-4 rounded-md border mt-3">
        <Image
          src={tpbankQR}
          alt="Tpban"
          width="200"
          height="200"
          className=""
        />
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
          <p className="font-bold text-red-400">{otp}</p>
        </div>
        <div className="flex items-center justify-between">
          <h2 className="text-gray-500">Tổng tiền</h2>
          <p className="font-bold text-red-400">{toVND(total)}</p>
        </div>
      </div>

      <div className="bg-yellow-100 p-3 border border-yellow-200 rounded-lg mt-4 text-yellow-700 whitespace-pre-wrap leading-7 text-sm">
        📣: Lưu ý <br />
        1/ Bạn cần ghi rõ nội dung chuyển khoản và số tiền tương ứng. <br />
        2/ Nhấn nút &quot;Xác nhận&quot; bên dưới <b>sau khi đã chuyển khoản</b>
        <br />
        2/ Chỉ hỗ trợ ngân hàng Việt Nam
      </div>
      <button onClick={onCreate} className="btn btn-primary btn-block mt-4">
        Xác nhận
      </button>
    </div>
  );
}
