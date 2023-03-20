import { onAuthStateChanged, User } from "firebase/auth";
import { useEffect, useState } from "react";
import { auth } from "../libs/firebase";

interface IUserState {
  checking: boolean
  user: User | null
}

export default function useAuthen() {
  const [userState, setUserState] = useState<IUserState>({
    checking: true,
    user: null
  })

  useEffect(() => {
    onAuthStateChanged(auth, (user) => {
      setUserState((prev) => ({ ...prev, ...{ checking: false, user } }))
    })

  }, [])

  return userState

}
