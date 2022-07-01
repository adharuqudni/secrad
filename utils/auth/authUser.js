import { useEffect } from 'react';
import { useRouter } from 'next/router';
import { useAuth } from './authProvider';
import Home from '../../pages/index.js'


const LoggedIn = (props) => {
  const { authUser, loading } = useAuth();
  const router = useRouter();

  // Listen for changes on loading and authUser, redirect if needed
  useEffect(() => {
    if (!loading && !authUser)
      router.push('/login')
  }, [authUser, loading])

  return (
    <>
    {props.child}
    </>
  )
}

export default LoggedIn;