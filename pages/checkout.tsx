import { useFormik } from "formik"
import Image from "next/image";
import { useRouter } from "next/router"
import { useEffect } from "react"
import tpbankQR from "../assets/TPBank-QR.png";
import ProtectedLayout from "../components/ProtectedLayout"

const notificationMethods = [
  { id: 'local-bank', title: 'Local Bank' },
  { id: 'paypal', title: 'Paypal' },
]


export default function Checkout() {
  const yearlyCost = 25;
  const monthlyCost = 3;
  const {query} = useRouter()
  const formik = useFormik({
    initialValues: {
      unit: query.type === 'month' ? 12 : 1,
      subtotal: 0
    },
    onSubmit: (values) => {
      console.log(values)
    },
  })

  useEffect(() => {
    console.log(formik.values.unit)
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

  const subTotal = formik.values.subtotal;
  const tax = +(subTotal * 0.1).toFixed(2);
  const total = subTotal + tax;


  return <div id="checkout" className="">
    <div className="mainbox pt-32 pb-20">
      <h2 className="title2">Checkout</h2>
      <form className="checkout-form mt-8 p-4 md:w-[1040px] m-auto grid grid-cols-2 divide-x shadow rounded-md border"
        onSubmit={formik.handleSubmit}
      >
        <div className="checkout-summary pr-4">
          <h2 className="text-xl font-bold mb-4">Order summary</h2>
          <div className="checkout-detail">
            <div className="flex items-center justify-between bg-gray-100 p-3 rounded-md border border-gray-200">
              <h2>Kompad app</h2>
              <div>
                <input type="text" 
                  id="unit"
                  value={formik.values.unit}
                  onChange={formik.handleChange}
                  className="w-12 h-7 rounded-md border border-gray-400 text-center"  />
                {' '}/ month
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
        <div className="checkout-info pl-4">
          <h2 className="text-xl font-bold">Enter your email (new or existing users)</h2>
          <p className="text-gray-400 text-sm mt-1 mb-4">New users will set a password after purchase</p>
          
          <div className="grid grid-cols-2 gap-3">

          <div>
            <div className="mt-1">
              <input
                type="email"
                name="email"
                id="email"
                className="block w-full rounded-md border-gray-300 shadow-sm focus:border-indigo-500 focus:ring-indigo-500 sm:text-sm"
                placeholder="Email"
              />
            </div>
          </div>
          <div>
            <div className="mt-1">
              <input
                type="password"
                name="password"
                id="password"
                className="block w-full rounded-md border-gray-300 shadow-sm focus:border-indigo-500 focus:ring-indigo-500 sm:text-sm"
                placeholder="Password"
              />
            </div>
          </div>
          </div>  
          <div className="mt-3">
            <h2 className="mb-3">Payment method</h2>

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
          <div className="hidden bank bg-gray-100 p-4 rounded-md border mt-3">
            <Image src={tpbankQR} alt="Tpban" width="200" height="200" className="" />
          </div>
          <button className="btn btn-primary btn-block mt-4">Đi tới bước thanh toán</button>
        </div>
      </form>
    </div>
  </div>
}

Checkout.getLayout = function getLayout(page: JSX.Element) {
  return <ProtectedLayout>{page}</ProtectedLayout>
}


