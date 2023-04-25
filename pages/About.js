import React from 'react'
import Link from 'next/link'
export default function About() {
  return (
    <div>
      <head>
        <title>about us</title>
      </head>
      <h1>hello about</h1>
      <Link href="/">home</Link>
      <Link href="About">about</Link>
      <Link href="prodict">prodict</Link>
      <Link href="Conent">Conent</Link>
    </div>
  )
}
