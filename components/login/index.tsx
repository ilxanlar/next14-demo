'use client'

import { useActionState } from 'react'
import login from '@/actions/login'

export default function Login() {
  const [state, dispatch, isPending] = useActionState(login, {
    errors: [],
    message: '',
  })

  return (
    <form action={dispatch}>
      {state.errors.length > 0 ? (
        <div className="bg-red-100 text-red-600 px-6 py-4 rounded mb-4">
          <strong>LOGIN ERROR</strong>
          <ul className="list-disc mx-4 mt-1 text-sm">
            {state.errors.map((err, key) => (
              <li key={key}>{err}</li>
            ))}
          </ul>
        </div>
      ) : null}
      <div className="mb-4">
        <label className="block mb-2">Email</label>
        <input
          className="block w-full px-4 py-2 border border-gray-300 rounded"
          name="email"
          type="email"
          placeholder="Email"
        />
      </div>
      <div className="mb-6">
        <label className="block mb-2">Password</label>
        <input
          className="block w-full px-4 py-2 border border-gray-300 rounded"
          name="password"
          type="password"
          placeholder="Password"
        />
      </div>
      <button className="bg-blue-500 text-white block w-full px-4 py-2 border border-solid rounded">
        {isPending ? 'LOGGING IN...' : 'LOGIN'}
      </button>
    </form>
  )
}
