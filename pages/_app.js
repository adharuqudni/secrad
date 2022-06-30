import '../styles/globals.css'

function MyApp({ Component, pageProps }) {
  return (
  <div suppressHydrationWarning={true}>
    {process.browser && <Component />}
  </div>
  )
}

export default MyApp
