import { PayPalButtons, PayPalScriptProvider } from "@paypal/react-paypal-js";
import { FormikProps, useFormik } from "formik"
import Image from "next/image";
import { useRouter } from "next/router"
import { useState } from "react"
import tpbankQR from "../assets/TPBank-QR.png";
import ProtectedLayout from "../components/ProtectedLayout"
import { createTransaction, PaymentMethod, TransactionStatus } from "../services/transaction";

const options = {
  "client-id": "AZ7QoF22xQybEpqPcU34AmVgdhfXHJkQguqoy-VdVNQ1P-ngEL6vbMoFO3W8avbXuJeqor1Bv-XhK_7V",
  currency: "USD",
  // intent: "subscription",
  // vault: true,
  components: "buttons"
}

const notificationMethods = [
  { id: 'local-bank', title: 'Local Bank' },
  { id: 'paypal', title: 'Paypal' },
]

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

function calculateCost(unit: number, monthlyCost: number, yearlyCost: number) {
  const subtotal = unit < 12 ? unit * monthlyCost : yearlyCost;
  const tax = +(subtotal * 0.1).toFixed(2);
  const save = subtotal === yearlyCost ? unit * monthlyCost : 0
  return {
    subTotal: subtotal,
    tax,
    total: subtotal + tax,
    save,
    savePercent: Math.floor((monthlyCost * 12 - yearlyCost) * 100 / (monthlyCost * 12))
  }
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

function PaypalButtonWrapper({ unit }: { unit: number }) {
  console.log('Paypal button ', unit)
  const { subTotal, total } = calculateCost(unit, 3, 25);

  return <div className="mt-3 border border-gray-200 bg-gray-50 p-3 rounded-md">
    {/*<PayPalButtons 
      createSubscription={(data, actions) => {
        const plan_id = unit < 12 ? "P-7W548647FS124853JMO35ARI" : "P-2RT52710XY7463523MO35CNA";
        return actions.subscription.create({
          plan_id
          // plan_id: "P-2Y2182645K959235VMO345ZY" // Test Plan
          // plan_id: "P-7W548647FS124853JMO35ARI" // Monthly 
          // plan_id: "P-2RT52710XY7463523MO35CNA" // Yearly
        }).then(orderId => {
          console.log(orderId)
          return orderId;
        })
      }}

      onApprove={(data, actions) => {
        console.log('data', data)
        console.log('actions', actions)
      }}

      /> */}
    <PayPalButtons
      createOrder={(data, action) => {
        return action.order.create({
          purchase_units: [
            {
              amount: {
                currency_code: "USD",
                // value: total + ''
                value: '1'
              }
            }
          ]
        }).then(orderId => {
          console.log('created Order', orderId)
          return orderId;
        })
      }}
      onApprove={function(data, actions) {
        return new Promise((resolve, reject) => {
          actions.order?.capture().then(function() {
            console.log('success', data, actions)
            createTransaction({
              amount: total,
              status: TransactionStatus.APPROVED,
              method: PaymentMethod.PAYPAL
            })
            resolve()
          }).catch(() => {
            console.log('failure')
            reject()
          })
        })
      }}
    />
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

      {paymentMethod === IPaymentMethod.PAYPAL ? <PaypalButtonWrapper unit={unit} /> : null}
      {paymentMethod === IPaymentMethod.BANK ?
        <div className={`bank-method`}>
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
        </div> : null}
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
            onClick={() => nextStep(step + 1)}>1/2 Đi tới bước thanh toán</button>
          <button
            className={`btn btn-primary btn-block mt-4 ${step === 2 ? '' : 'hidden'}`}
            onClick={() => nextStep(step + 1)}>2/2 Thanh toán</button>
        </form>
      </div>
    </PayPalScriptProvider>
  </div>
}

Checkout.getLayout = function getLayout(page: JSX.Element) {
  return <ProtectedLayout>{page}</ProtectedLayout>
}


