import { getAuth } from "firebase/auth"
import { addDoc, collection, doc, Timestamp, updateDoc, writeBatch } from "firebase/firestore"
import { db } from "../libs/firebase"

export enum TransactionStatus {
  PENDING,
  APPROVED
}

export enum PaymentMethod {
  BANK,
  PAYPAL,
}

interface ITransaction {
  uid: string
  createdAt: Timestamp
  updatedAt: Timestamp
  amount: number
  method: PaymentMethod
  currency: string
  email: string
  status: TransactionStatus
}

const COLLECTION = collection(db, 'transactions')
const DOC = (id: string) => doc(db, 'transactions', id)

export const createTransaction = async ({ method, amount, status }: Partial<ITransaction>) => {

  const auth = getAuth()
  const user = auth.currentUser;
  if (!user) return;

  await addDoc(COLLECTION, {
    uid: user.uid,
    email: user.email,
    amount,
    method,
    currency: "USD",
    status,
    createdAt: new Date()
  })

}

export const updateTransaction = async (id: string, status: TransactionStatus) => {
  const docRef = DOC(id)

  await updateDoc(docRef, {
    status
  })
}

