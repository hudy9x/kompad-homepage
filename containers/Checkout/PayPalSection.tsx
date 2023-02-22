import { PayPalButtons } from "@paypal/react-paypal-js";
import { OnApproveData, OnApproveActions } from "@paypal/paypal-js/types/components/buttons"
import { calculateCost } from "../../libs/utils";
import { createTransactionNUpdateUserPlan } from "../../services/transaction";
import { PaymentMethod, TransactionStatus } from "../../services/_type";
import { useRouter } from "next/router";

export function PaypalSection({ unit }: { unit: number }) {
  const { push } = useRouter()
  const { total } = calculateCost(unit, 3, 25);

  const onApprove = function(data: OnApproveData, actions: OnApproveActions): Promise<void> {
    return new Promise((resolve, reject) => {
      actions.order?.capture().then(async function() {
        console.log('paied already, start updating transaction and user plan ....', data, actions)
        const returnedOrder = actions.order;

        if (!returnedOrder) return;

        // make sure that user has paid correctly
        returnedOrder.get().then(res => {
          console.log('returned order', res)
          const purchaseUnits = res.purchase_units;
          const item = purchaseUnits[0]
          const amount = item.amount.value;
          const isProd = process.env.NODE_ENV === 'production'
          const isValid = isProd ? +amount >= +total : true
          const captures = item.payments?.captures

          console.log(amount, total, JSON.stringify(captures))

          if (isValid) {
            console.log(`update amount: $${total} and unit ${unit} (month)`)
            createTransactionNUpdateUserPlan({
              unit, // month
              amount: total, // money
              status: TransactionStatus.APPROVED,
              method: PaymentMethod.PAYPAL,
              history: JSON.stringify(captures)
            }).then((transactionId) => {
                push(`/confirm-payment?unit=${unit}&amount=${total}&method=PAYPAL&transactionId=${transactionId}`)
            })

            resolve()
          }
        }).catch(err => {
          console.log('return order failure')
          reject()
        })

      }).catch(() => {
        console.log('failure')
        reject()
      })
    })
  }

  const onCreateOrder = (data, action) => {
    const isProd = process.env.NODE_ENV === 'production'
    const value = isProd ? (total + '') : '1'

    console.log('create order:', value)

    return action.order.create({
      purchase_units: [
        {
          amount: {
            currency_code: "USD",
            value
          }
        }
      ]
    }).then((orderId: string) => {
      console.log('created paypal order', orderId)
      return orderId;
    }).catch((err: Record<string, unknown>) => { 
      console.log('create order error', err)
    })
  }

  const onError = (error: Record<string, unknown>) => {
    console.log('paypal button error', error)
  }

  console.log('process NODE_ENV', process.env.NODE_ENV)

  return <div className="mt-3 border border-gray-200 bg-gray-50 p-3 rounded-md">
    <PayPalButtons
      style={{layout: 'vertical', color: 'gold'}}
      createOrder={onCreateOrder}
      onApprove={onApprove}
      onError={onError}
    />
  </div>
}
