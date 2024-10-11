import { cookies } from 'next/headers';

export default async function ProfilePage() {
  const cookie = await cookies()
  const name = (cookie.get('name')?.value || '')

  return (
    <div>
      <h2>Hello {name}, Welcome!</h2>
    </div>
  )
}
