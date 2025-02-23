import StreamVideoProvider from '@/providers/StreamClientProvider'
import { Metadata } from 'next';
import React, { ReactNode } from 'react'

export const metadata: Metadata = {
  title: "BHConnect",
  description: "Video calling app",
  icons:{
    icon:'/icons/logo.svg'
  }
};


function Rootlayout({ children }: { children: ReactNode }) {
  return (
    <main>
      <StreamVideoProvider>
        {children}
      </StreamVideoProvider>
    </main>
  )
}

export default Rootlayout