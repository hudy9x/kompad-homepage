import {
  createUserWithEmailAndPassword,
  sendEmailVerification,
  signInWithEmailAndPassword,
  signOut,
} from "firebase/auth";
import { doc, getDoc, setDoc, Timestamp } from "firebase/firestore";
import { auth, db } from "../libs/firebase";

const MAX_STORAGE_SIZE  = 1000

export const signIn = (email: string, password: string): Promise<string> => {
  return new Promise((resolve, reject) => {
    signInWithEmailAndPassword(auth, email, password)
      .then((res) => {
        const user = res.user;

        if (!user) {
          return reject("error");
        }

        isUserVerified(user.uid).then((verified) => {
          if (verified) {
            resolve("ok");
            return;
          }
          reject("error");
        });
      })
      .catch((err) => {
        reject(err.code);
      });
  });
};

export const signOutNow = () => {
  return signOut(auth);
};

export const isUserVerified = async (uid: string) => {
  // const q = query(collection(db, 'users'),
  //   where('uid', '==', uid),
  //   where('status', '==', 'ACTIVE'),
  //   limit(1))
  // const snapshot = await getDocs(q);

  const snapshot = await getDoc(doc(db, "users", uid));

  if (snapshot.exists()) {
    const data = snapshot.data();
    return data.status === "ACTIVE";
  }

  return false;
};

export const signUp = (email: string, password: string) => {
  return createUserWithEmailAndPassword(auth, email, password);
};

export const verifyEmail = async () => {
  auth.currentUser && (await sendEmailVerification(auth.currentUser));
};

export const createFreePlan = async () => {
  const uid = auth.currentUser?.uid;

  if (!uid) {
    return null;
  }

  try {
    const date = new Date();
    date.setMonth(date.getMonth() + 1)
    const expiredTime = Timestamp.fromDate(date)

    await setDoc(doc(db, `/plans`, uid), {
      uid,
      maxRecord: 20,
      currentRecord: 0,
      maxStorageSize: MAX_STORAGE_SIZE,
      currentStorageSize: 0,
      expiredTime: expiredTime
    });
    return 1;
  } catch (error) {
    console.log(error);
    return null;
  }
};




