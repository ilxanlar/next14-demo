'use server';

import { redirect } from 'next/navigation';
import { cookies } from 'next/headers';

import wait from '@/actions/wait';

type ActionState = {
  errors: string[]
  message: string,
  name: string
}

export default async function login(prevState: ActionState, formData: FormData) {
  await wait();

  const data = {
    email: formData.get('email'),
    password: formData.get('password'),
  };

  const state: ActionState = {
    errors: [],
    message: '',
    name: ''
  };

  if (!data.email) {
    state.errors.push('Your email address is required');
  }

  if (!data.password) {
    state.errors.push('Your password is required');
  }

  if (data.email && data.password && data.password !== 'pass') {
    state.errors.push('We need your correct password to log you in, please cooperate man!');
  }

  if (state.errors.length === 0) {
    const cookie = await cookies();
    state.name = 'Mehdi';
    cookie.set('name', state.name);
    redirect('/');
  }

  return state;
}
