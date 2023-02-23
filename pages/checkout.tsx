import { PayPalScriptProvider } from "@paypal/react-paypal-js";
import { FormikProps, useFormik } from "formik"
import { useRouter } from "next/router"
import { useState } from "react"
import ProtectedLayout from "../components/ProtectedLayout"
import LocalBankSection from "../containers/Checkout/LocalBankSection";
import { PaypalSection } from "../containers/Checkout/PayPalSection";
import { calculateCost } from "../libs/utils";

const options = {
  "client-id": "AZ7QoF22xQybEpqPcU34AmVgdhfXHJkQguqoy-VdVNQ1P-ngEL6vbMoFO3W8avbXuJeqor1Bv-XhK_7V",
  currency: "USD",
  components: "buttons",
  "disable-funding": "card,paylater"
}

interface OrderFormValues {
  email: string
  password: string
  unit: number
  paymentMethod: string
}

interface IOrderSummaryProps {
  formik: FormikProps<OrderFormValues>
  yearlyCost: number
  monthlyCost: number
}

enum IPaymentMethod {
  PAYPAL = 'PAYPAL',
  BANK = 'BANK'
}

function OrderSummary({ formik, yearlyCost, monthlyCost }: IOrderSummaryProps) {

  const { subTotal, tax, total, save, savePercent } = calculateCost(formik.values.unit, monthlyCost, yearlyCost)

  return <div className="checkout-summary">
    <h2 className="text-xl font-bold mb-4">Order summary</h2>
    <div className="checkout-detail">
      <div className="flex items-center justify-between bg-gray-100 p-3 rounded-md border border-gray-200">
        <h2>Kompad app</h2>
        <div className="flex items-center gap-2">
          <select name="" id="unit" className="text-sm border rounded-md border-gray-300" value={formik.values.unit} onChange={formik.handleChange}>
            <option value="1">1 month</option>
            <option value="3">3 month</option>
            <option value="12">12 month</option>
          </select>
        </div>
        <span>${monthlyCost}</span>
      </div>

      <div className="text-sm text-gray-500 mt-4">
        {+formik.values.unit === 12 ?
          <p>Good choice. You saved <b>${savePercent}%</b> 🤗</p> :
          <p className="bg-yellow-100 p-3 border border-yellow-200 rounded-md">📢 You will be saved <b>${savePercent}%</b> if you choose a yearly subscription (12 month). It is about ${Math.floor(yearlyCost / 12)} per month.</p>}
      </div>

      <div className="border-t border-gray-200 mt-5 pt-4">
        <div className="flex items-center justify-between">
          <h2>Subtotal</h2>
          <span>${subTotal}{save ? <span className="line-through pl-1">{`$${save}`}</span> : ''}</span>
        </div>
        <div className="flex items-center justify-between">
          <h2>Tax</h2>
          <span>${tax}</span>
        </div>
        <div className="flex items-center justify-between border-t border-gray-200 mt-3 pt-2">
          <h2 className="text-xl">Total</h2>
          <span className="text-2xl font-bold">${total}</span>
        </div>
      </div>
    </div>
  </div>
}


interface IOrderPaymentProps {
  unit: number
}

function OrderPayment({ unit }: IOrderPaymentProps) {
  const [paymentMethod, selectPaymentMethod] = useState<IPaymentMethod>(IPaymentMethod.PAYPAL);
  const paymentMethods = [
    { id: IPaymentMethod.BANK, title: 'Local Bank' },
    { id: IPaymentMethod.PAYPAL, title: 'Paypal' },
  ]

  return <>
    <div>
      <div className="">
        <h2 className="text-xl font-bold mb-3">Payment method</h2>

        <div className="space-y-4 sm:flex sm:items-center sm:space-y-0 sm:space-x-5">
          {paymentMethods.map((payment) => (
            <div key={payment.id} className="flex items-center">
              <input
                id={payment.id}
                name="notification-method"
                type="radio"
                checked={paymentMethod === payment.id}
                onChange={() => selectPaymentMethod(payment.id)}
                className="h-4 w-4 border-gray-300 text-indigo-600 focus:ring-indigo-500"
              />
              <label htmlFor={payment.id} className="ml-3 block text-sm text-gray-700 cursor-pointer">
                {payment.title}
              </label>
            </div>
          ))}
        </div>
      </div>

      {paymentMethod === IPaymentMethod.PAYPAL ? <PaypalSection unit={unit} /> : null}
      {paymentMethod === IPaymentMethod.BANK ? <LocalBankSection unit={unit} /> : null}
    </div>
  </>
}

export default function Checkout() {
  const yearlyCost = 25;
  const monthlyCost = 3;
  const { query } = useRouter()
  const [step, nextStep] = useState(1)
  const formik = useFormik({
    initialValues: {
      email: '',
      password: '',
      unit: query.type === 'month' ? 12 : 1,
      paymentMethod: ''
    },
    onSubmit: (values) => {
      console.log(values)
    },
  })


  return <div id="checkout" className="bg-gray-50 h-screen">
    <PayPalScriptProvider deferLoading={false} options={options}>
      <div className="mainbox pt-24 pb-20">
        <h2 className="title2">Checkout</h2>
        <form className="checkout-form bg-white mt-8 px-8 py-8 m-auto shadow-xl rounded-md border md:w-[500px] space-y-4"
          onSubmit={formik.handleSubmit}
        >
          {step === 2 ? <OrderPayment unit={+formik.values.unit} /> : null}
          {step === 2 ? <div className="text-sm text-indigo-600 hover:underline cursor-pointer" onClick={() => nextStep(1)}>{'Go back to update order infomation'}</div> : null}
          {step === 1 ? <OrderSummary formik={formik} yearlyCost={yearlyCost} monthlyCost={monthlyCost} /> : null}

          <button
            className={`btn btn-primary btn-block mt-4 ${step === 1 ? '' : 'hidden'}`}
            onClick={() => nextStep(step + 1)}>Thanh toán</button>
        </form>
      </div>
    </PayPalScriptProvider>
  </div>
}

Checkout.getLayout = function getLayout(page: JSX.Element) {
  return <ProtectedLayout>{page}</ProtectedLayout>
}


