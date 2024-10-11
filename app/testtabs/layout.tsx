import Link from 'next/link'

export default function Layout({ children, tabs }: { children: React.ReactNode, tabs: React.ReactNode }) {
  return (
    <div className="border">
      <nav>
        <Link href="/testtabs/tab1">Tab A</Link>
        <Link href="/testtabs/tab2">Tab B</Link>
      </nav>
      <div>{children}</div>
      <div>{tabs}</div>
    </div>
  )
}
