import { getAuth } from "firebase/auth"
import { addDoc, collection, doc, Timestamp, updateDoc } from "firebase/firestore"
import { db } from "../libs/firebase"

type TransactionStatus = 'PENDING' | 'APPROVED'

interface ITransaction {
  uid: string
  createdAt: Timestamp
  updatedAt: Timestamp
  amount: number
  currency: string
  email: string
  status: TransactionStatus
}

export const createTransaction = async ({ amount, status }: Partial<ITransaction>) => {

  const auth = getAuth()
  const user = auth.currentUser;
  if (!user) return;

  await addDoc(collection(db, 'transactions'), {
    uid: user.uid,
    email: user.email,
    amount,
    currency: "USD",
    status,
    createdAt: new Date()
  })

}

export const updateTransaction = async (id: string, status: TransactionStatus) => {
  const docRef = doc(db, 'transactions', id)

  await updateDoc(docRef, {
    status
  })
}

