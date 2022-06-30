import '../styles/globals.css';
import * as firebase from "firebase-admin";
if (!firebase.apps.length) {
  firebase.initializeApp();
}

function MyApp({ Component, pageProps }) {
  return (
  <div suppressHydrationWarning={true}>
    {process.browser && <Component />}
  </div>
  )
}

export default MyApp
