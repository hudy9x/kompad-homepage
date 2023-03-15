import dayjs from "dayjs"
import { getAuth } from "firebase/auth"
import { addDoc, collection, doc, runTransaction, setDoc, Timestamp, updateDoc } from "firebase/firestore"
import { v1 as uuidv4 } from "uuid"
import { db } from "../libs/firebase"
import { _doc } from "../libs/utils"
import { IPlan, ITransaction, TransactionStatus } from "./_type"

const COLLECTION = collection(db, 'transactions')
const DOC = (id: string) => doc(db, 'transactions', id)
const DOC2 = (id: string) => doc(db, 'plans', id)

const d = _doc('transactions')
const d2 = _doc('plans')

export const createTransactionNUpdateUserPlan = async ({
  unit, method, amount, status, history
}: Partial<ITransaction>) => {

  const auth = getAuth()
  const user = auth.currentUser;
  if (!user || !unit || !amount) return;

  const transactionId = uuidv4();

  try {
    await runTransaction(db, async (tr) => {

      const planRef = DOC2(user.uid)
      const planSnapshot = await tr.get(planRef)

      if (!planSnapshot.exists()) {
        throw "plan data not exist"
      }

      const transactionRef = DOC(transactionId)

      tr.set(transactionRef, {
        uid: user.uid,
        email: user.email,
        unit,
        amount,
        method,
        currency: "USD",
        status,
        history,
        createdAt: new Date()
      })

      console.log('transaction created !')

      const planData = planSnapshot.data() as IPlan
      const expiredDate = dayjs(planData.expiredTime.toDate())
      const newExpiredDate = expiredDate.add(unit, 'month')

      tr.update(planRef, {
        expiredTime: Timestamp.fromDate(newExpiredDate.toDate()),
        prevExpiredTime: planData.expiredTime
      })

      console.log('updated user plan', transactionId)

    })

    return transactionId
  } catch (error) {
    console.log(error)
    // throw "create transaction and update plan has been failed"
  }
}

export const updateTransaction = async (id: string, status: TransactionStatus) => {
  const docRef = DOC(id)

  await updateDoc(docRef, {
    status
  })
}

export const createTransaction = async ({ unit, amount, method, status, currency, code }: Partial<ITransaction>) => {
  const auth = getAuth()
  const user = auth.currentUser

  if (!user) return Promise.reject(0)

  try {
      const transactionRef = await addDoc(COLLECTION, {
      uid: user.uid,
      email: user.email,
      unit,
      amount,
      method,
      currency,
      status,
      code,
      createdAt: new Date()
    })

    return Promise.resolve(transactionRef.id)
  } catch (error) {
    console.log(error)
    return Promise.reject(0);
  }

}

