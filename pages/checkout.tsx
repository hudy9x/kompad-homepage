import { FormikProps, useFormik } from "formik"
import Image from "next/image";
import { useRouter } from "next/router"
import { useEffect, useState } from "react"
import tpbankQR from "../assets/TPBank-QR.png";
import ProtectedLayout from "../components/ProtectedLayout"

const notificationMethods = [
  { id: 'local-bank', title: 'Local Bank' },
  { id: 'paypal', title: 'Paypal' },
]

interface OrderFormValues {
  email: string
  password: string
  unit: number
  subtotal: number
  paymentMethod: string
}

interface IOrderSummaryProps {
  formik: FormikProps<OrderFormValues>
  yearlyCost: number
  monthlyCost: number
}

function calculateCost (subtotal: number) {
  const tax = +(subtotal * 0.1).toFixed(2);
  return {
    subTotal: subtotal,
    tax,
    total: subtotal + tax
  }
}

function OrderSummary({formik, yearlyCost, monthlyCost}: IOrderSummaryProps) {
  
  const {subTotal, tax, total} = calculateCost(formik.values.unit)

  return <div className="checkout-summary">
          <h2 className="text-xl font-bold mb-4">Order summary</h2>
          <div className="checkout-detail">
            <div className="flex items-center justify-between bg-gray-100 p-3 rounded-md border border-gray-200">
              <h2>Kompad app</h2>
              <div className="flex items-center gap-2">
                <input type="text" 
                  id="unit"
                  value={formik.values.unit}
                  onChange={formik.handleChange}
                  className="w-12 h-7 rounded-md border border-gray-400 text-center"  />
                  <span>/ month</span>
              </div>
              <span>${monthlyCost}</span>
            </div>

            <div className="text-sm text-gray-500 mt-4">
              <div>In case you pay over 12 month, we will use <b>yearly billing</b> automatically.</div>
              <p>For example: 27 month will be calculate as follows</p>
              <ul className="list-disc pl-5 mt-2">
                <li>12 month = ${yearlyCost}</li>
                <li>12 month = ${yearlyCost}</li>
                <li>3 month = ${monthlyCost}</li>
              </ul>

            </div>

            <div className="border-t border-gray-200 mt-5 pt-4">
                <div className="flex items-center justify-between">
                  <h2>Subtotal</h2>
                  <span>${subTotal}</span>
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

function OrderPayment() {
  return <>
        <div>
          <div className="">
            <h2 className="text-xl font-bold mb-3">Payment method</h2>

            <div className="space-y-4 sm:flex sm:items-center sm:space-y-0 sm:space-x-5">
              {notificationMethods.map((notificationMethod) => (
                <div key={notificationMethod.id} className="flex items-center">
                  <input
                    id={notificationMethod.id}
                    name="notification-method"
                    type="radio"
                    defaultChecked={notificationMethod.id === 'email'}
                    className="h-4 w-4 border-gray-300 text-indigo-600 focus:ring-indigo-500"
                  />
                  <label htmlFor={notificationMethod.id} className="ml-3 block text-sm text-gray-700 cursor-pointer">
                    {notificationMethod.title}
                  </label>
                </div>
              ))}
            </div>
          </div>
          <div className="bank bg-gray-100 inline-flex w-full justify-center p-4 rounded-md border mt-3">
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
    </>
}

export default function Checkout() {
  const yearlyCost = 25;
  const monthlyCost = 3;
  const {query} = useRouter()
  const [step, nextStep] = useState(1)
  const formik = useFormik({
    initialValues: {
      email: '',
      password: '',
      unit: query.type === 'month' ? 12 : 1,
      subtotal: 0,
      paymentMethod: ''
    },
    onSubmit: (values) => {
      console.log(values)
    },
  })

  useEffect(() => {
    const unit = formik.values.unit;

    if (unit < 12) {
      formik.setValues({
        ...formik.values,
        subtotal: unit * monthlyCost
      })
    }

    if (unit >=12) {
      const years = unit/12;
      const roundedYears = Math.round(years)
      let subtotal = roundedYears * yearlyCost;

      if (years - roundedYears > 0) {
        const month = unit - roundedYears * 12;
        subtotal += month * monthlyCost;
      }

      formik.setValues({
        ...formik.values,
        subtotal: subtotal
      })
    }
  }, [formik.values.unit])

  const {subTotal, tax, total} = calculateCost(formik.values.unit)

  return <div id="checkout" className="bg-gray-50 h-screen">
    <div className="mainbox pt-24 pb-20">
      <h2 className="title2">Checkout</h2>
      <form className="checkout-form bg-white mt-8 px-8 py-8 m-auto shadow-xl rounded-md border md:w-[500px] space-y-4"
        onSubmit={formik.handleSubmit}
      >
        { step === 2 ? <OrderPayment /> : null }
        { step === 2 ? <div className="text-sm text-indigo-600 hover:underline cursor-pointer" onClick={() => nextStep(1)}>{'Go back to update order infomation'}</div> : null }

        { step === 1 ? <OrderSummary formik={formik} yearlyCost={yearlyCost} monthlyCost={monthlyCost} /> : null }

        <button 
          className={`btn btn-primary btn-block mt-4 ${step === 1 ? '' : 'hidden'}`} 
          onClick={() => nextStep(step + 1)}>1/2 Đi tới bước thanh toán</button>
        <button 
          className={`btn btn-primary btn-block mt-4 ${step === 2 ? '' : 'hidden'}`} 
          onClick={() => nextStep(step + 1)}>2/2 Thanh toán</button>
      </form>
    </div>
  </div>
}

Checkout.getLayout = function getLayout(page: JSX.Element) {
  return <ProtectedLayout>{page}</ProtectedLayout>
}


