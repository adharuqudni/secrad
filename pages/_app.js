import '../styles/globals.css';
import { AuthUserProvider } from '../utils/auth/authProvider';


function MyApp({ Component, pageProps }) {

  return (
    <div suppressHydrationWarning={true}>
      {process.browser &&
        <AuthUserProvider>
            <Component {...pageProps} />
        </AuthUserProvider>}
    </div>
  )
}

export default MyApp
