'use client'

import React from "react"

export default function Header() {
  return (
    <header className="border border-white/50 rounded-3xl mx-auto max-w-7xl p-6 lg:px-8 mt-4">
      <nav aria-label="Global" className="flex items-center justify-between">
        <div className="flex lg:flex-1">
          <a href="/" className="-m-1.5 p-1.5">
            <span className="sr-only">Your Company</span>
            <img alt="Logo" src="https://cosmocloud.io/_next/static/media/CosmocloudLogo.6ff13a81.svg" className="h-7 w-auto" />
          </a>
        </div>
        <div className="flex-grow text-center">
          <span className="text-lg font-semibold leading-6 text-grey-500">Internship Assignment</span>
        </div>
        <div className="flex lg:flex-1 justify-end">
          {/* This empty div ensures the text is centered by balancing the flex space */}
        </div>
      </nav>
    </header>
  )
}