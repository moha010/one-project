import Navpar from '@/commponent/Navpar'
import '@/styles/globals.css'

export default function App({ Component, pageProps }) {
  return(
    <>
      <Navpar >
        <Component {...pageProps} />
      </Navpar>
    </>
  )
}
