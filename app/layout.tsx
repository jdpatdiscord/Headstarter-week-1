import './globals.css'

import React from 'react'
import ReactDOM from 'react-dom/client'
import Navbar from './client_navbar'

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en">
      <head>
        <meta charSet="UTF-8" />
        <meta name="viewport" content="width=device-width, initial-scale=1.0" />
        <title>Portfolio</title>
      </head>
      <body className="bg-slate-50">
        <div className="grid place-items-center">
          <div className="flex flex-col min-h-screen w-full max-w-6xl border-slate-950 border-r-2 border-l-2">
            <div className="flex flex-none flex-col">
              <Navbar/>
              {children}
            </div>
            <div className="flex-1">
                
            </div>
            <div className="flex-none pt-12">
              <p>Written with <a href="https://react.dev/" className="underline">React.js</a> / <a href="https://nextjs.org/" className="underline">Next.js</a> / <a href="https://tailwindcss.com/" className="underline">TailwindCSS</a></p>
              <p>Copyright &copy; 2024 Jacob, all rights reserved.</p>
            </div>
          </div>
        </div>
      </body>
    </html>
  )
}
