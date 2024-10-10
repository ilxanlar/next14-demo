'use server'

import React from 'react'
import Link from 'next/link'
import { cookies } from 'next/headers'

export default async function Nav() {
  const cookie = await cookies()
  const name = cookie.get('name')

  return (
    <>
      <Link href="/">HOME</Link>
      <Link href="/posts">POSTS</Link>
      {name ? (
        <Link href="/profile">MY PROFILE</Link>
      ) : (
        <Link href="/login">LOGIN</Link>
      )}
    </>
  )
}
