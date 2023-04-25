import React from 'react'
import Link from 'next/link'
import stayle from "../styles/Layout.module.css"
export default function Navpar(props) {
  return (
    <div >
      <h1>logo js</h1>
      <Link href="/" className={stayle.a}>home</Link>
      <Link href="/About">about</Link>
      <Link href="/prodict">prodict</Link>
      <Link href="/Conent">Conent</Link>
      {props.children}
      <h1><footer>footerrr</footer></h1>
    </div>
  )
}
