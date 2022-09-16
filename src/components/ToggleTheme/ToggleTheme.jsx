import React, { useEffect, useState } from "react"
import { SunIcon, MoonIcon } from '@heroicons/react/24/solid'

const ToggleTheme = () => {
  const pageRef = document.documentElement.classList
  const systemThemePreference = window.matchMedia('(prefers-color-scheme: dark)').matches
  const [dark, setDark] = useState(systemThemePreference)

  useEffect(() => {
    dark && pageRef.add('dark')
  }, [])

  const toggleTheme = () => {
    pageRef.toggle('dark')
    setDark(!dark)
  }

  return (
    <div className="hidden sm:block">
      <SunIcon className='w-7 h-7 text-gray-100 cursor-pointer hidden dark:block' onClick={toggleTheme} />
      <MoonIcon className='w-7 h-7 text-gray-100 cursor-pointer block dark:hidden' onClick={toggleTheme} />
    </div>
  )
}

export default ToggleTheme
