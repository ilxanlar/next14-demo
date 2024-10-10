'use server'

import { cookies } from 'next/headers'

import wait from '@/actions/wait'

type ActionState = {
  errors: string[]
  message: string
}

export default async function login(prevState: ActionState, formData: FormData) {
  await wait()

  const data = {
    email: formData.get('email'),
    password: formData.get('password'),
  }

  const state = {
    errors: [],
    message: ''
  }

  if (!data.email) {
    state.errors.push('Your email address is required')
  }

  if (!data.password) {
    state.errors.push('Your password is required')
  }

  if (data.email && data.password && data.password !== 'pass') {
    state.errors.push('We need your correct password to log you in, please co-operate man!')
  }

  if (state.errors.length === 0) {
    (await cookies()).set('name', 'Mehdi')
    state.message = 'You logged in successfully!'
  }

  return state
}
