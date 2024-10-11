import React from 'react';
import type { Metadata } from 'next';
import Nav from '@/components/nav';
import './globals.css';

export const metadata: Metadata = {
  title: 'Create Next App',
  description: 'Generated by create next app',
};

type Props = {
  children: React.ReactNode
  auth: React.ReactNode
}

export default function RootLayout(props: Props) {
  const { auth, children } = props;

  return (
    <html lang="en">
    <body className="bg-gray-100">
    <div className="w-[600px] mx-auto px-8 pb-8 border border-gray-200 border-b-0 border-t-0 bg-white min-h-screen">
      <header className="text-center pb-6 pt-8 sticky top-0 bg-white border-b mb-8">
        <nav className="flex justify-center gap-8">
          <Nav />
        </nav>
      </header>
      {children}
      {auth}
    </div>
    </body>
    </html>
  );
}
