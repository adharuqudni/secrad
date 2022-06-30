import '../styles/globals.css';
import admin from 'firebase-admin';
if (!admin.apps.length) {
  admin.initializeApp({});
}

function MyApp({ Component, pageProps }) {
  return (
  <div suppressHydrationWarning={true}>
    {process.browser && <Component />}
  </div>
  )
}

export default MyApp
