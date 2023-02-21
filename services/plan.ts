import { getAuth } from "firebase/auth"
import { collection, doc, getDoc } from "firebase/firestore"
import { db } from "../libs/firebase"

const COLLECTION = collection(db, 'plan')
const DOC = (id: string) => doc(db, 'plan', id)

export const updatePlan = async () => {
  const auth = getAuth()
  const user = auth.currentUser

  if (!user) {
    return;
  }

  const userPlan = await getDoc(DOC(user.uid))

  if (userPlan) {

  }

}
