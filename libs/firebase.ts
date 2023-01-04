import { initializeApp } from "firebase/app"
import { getAuth } from "firebase/auth"
import { getFirestore } from "firebase/firestore"

const config = {
  apiKey: "AIzaSyB5sIk3WGEdJtNGcJ5DnBXgXYlPzAmsr0k",
  authDomain: "kompad-a9b60.firebaseapp.com",
  projectId: "kompad-a9b60",
  storageBucket: "kompad-a9b60.appspot.com",
  messagingSenderId: "431772304435",
  appId: "1:431772304435:web:185a33520f66c12bd88f46"
}

const app = initializeApp(config)

export const auth = getAuth(app)
export const db = getFirestore(app)
