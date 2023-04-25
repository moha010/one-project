import Image from 'next/image'
import { Inter } from 'next/font/google'
import Link from 'next/link'

const inter = Inter({ subsets: ['latin'] })

export default function Home() {
  return (
    <div>
      <h1>heelo world</h1>
      <p>this home</p>
      <Link href="/" className='a'>home</Link>
      <Link href="About">about</Link>
      <Link href="prodict">prodict</Link>
      <Link href="Conent">Conent</Link>
      <Link href="post">post</Link>
    </div>
  )
}
