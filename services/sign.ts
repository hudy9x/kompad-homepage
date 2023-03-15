import { signInWithEmailAndPassword } from "firebase/auth"
import { doc, collection, getDoc, getDocs, limit, query, where } from "firebase/firestore"
import { auth, db } from "../libs/firebase"

export const signIn = (email: string, password: string): Promise<string> => {
  return new Promise((resolve, reject) => {
    signInWithEmailAndPassword(auth, email, password).then(res => {
      const user = res.user;

      if (!user) {
        return reject('error')
      }

      isUserVerified(user.uid).then(verified => {
        if (verified) {
          resolve('ok');
          return;
        }
        reject('error');
      })

    }).catch(err => {
      reject(err.code)
    })
  })
}

export const isUserVerified = async (uid: string) => {
  // const q = query(collection(db, 'users'),
  //   where('uid', '==', uid),
  //   where('status', '==', 'ACTIVE'),
  //   limit(1))
  // const snapshot = await getDocs(q);

  const snapshot = await getDoc(doc(db, 'users', uid))

  if (snapshot.exists()) {
    const data = snapshot.data();
    return data.status === 'ACTIVE'
  }

  return false;

}


