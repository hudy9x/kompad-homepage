
import Menu from '../components/Menu';
import { useEffect, useState } from "react"
import { auth } from "../libs/firebase"
import { onAuthStateChanged } from 'firebase/auth';
import { useRouter } from 'next/router';

interface Props {
  children: JSX.Element | JSX.Element[]
}
export default function ProtectedLayout({ children }: Props) {
  const [status, setStatus] = useState('CHECKING');
  const router = useRouter()

  useEffect(() => {
    onAuthStateChanged(auth, user => {
      console.log(user)
      if (!user) {
        setStatus('NOT_AUTHENTICATED');
      } else {
        setStatus('AUTHENTICATED');
      }
    })
  })

  useEffect(() => {
    if (status === 'NOT_AUTHENTICATED') {
      setTimeout(() => {
        router.push('/signin');
      }, 1500);
    }
  }, [status, router])

  if (status === 'CHECKING') {
    return <div>
      <span>LOADING</span>
    </div>
  }

  if (status === 'NOT_AUTHENTICATED') {
    return <div>
      <h2>NOT AUTHENTICATED</h2>
      <span>REDIRECTING TO SIGN IN PAGE ...</span>
    </div>
  }

  return (<>
    <div className="relative bg-white overflow-auto">
      <div className="relative">
        <Menu />
        {children}
      </div>
    </div>
  </>
  );
}
