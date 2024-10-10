import React from 'react'

type Props = {
  children: React.ReactNode
  analytics: React.ReactNode
  comments: React.ReactNode
  posts: React.ReactNode
}

export default function Layout(props: Props) {
  const { children, analytics, comments, posts } = props

  return (
    <div>
      <h1>Dashboard Layout</h1>
      <hr/>
      <div>
        {children}
      </div>
      <hr/>
      <div className="grid grid-cols-3 gap-4">
        <div>
          {analytics}
        </div>
        <div>
          {comments}
        </div>
        <div>
          {posts}
        </div>
      </div>
    </div>
  )
}
