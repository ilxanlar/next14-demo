'use client'

import React from 'react'
import { useRouter } from 'next/navigation'

type Props = {
  children: React.ReactNode
  title: React.ReactNode
}

export default function Modal(props: Props) {
  const { children, title } = props

  const router = useRouter()

  return (
    <div className="fixed top-0 left-0 w-screen h-screen bg-[rgba(0,0,0,0.5)] flex items-center justify-center">
      <div className="bg-white rounded w-[400px] p-8 relative">
        <header className="flex justify-between items-center mb-6">
          <h2 className="uppercase text-xl font-bold">{title || 'Modal'}</h2>
          <button className="opacity-50" onClick={() => router.back()}>CLOSE</button>
        </header>
        {children}
      </div>
    </div>
  )
}
