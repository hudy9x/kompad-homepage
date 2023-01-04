import ProtectedLayout from "../components/ProtectedLayout"

export default function Checkout() {

  return <div id="checkout">
    <div className="mainbox">

    </div>
  </div>
}

Checkout.getLayout = function getLayout(page: JSX.Element) {
  return <ProtectedLayout>{page}</ProtectedLayout>
}


