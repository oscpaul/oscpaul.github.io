'use client'

import Link from 'next/link'
import { useEffect, useRef, useState } from 'react'

import Logo from './Logo'
import HeaderLink from './Navigation/HeaderLink'
import MobileHeaderLink from './Navigation/MobileHeaderLink'
import Signin from '@/app/components/Auth/SignIn'
import SignUp from '@/app/components/Auth/SignUp'
import { Icon } from '@iconify/react/dist/iconify.js'
import { HeaderItem } from '@/app/types/menu'
    import { usePathname } from 'next/navigation';

    import localFont from 'next/font/local';
   const myCustomFont = localFont({
      src: [
        {
          path: '../../../../../public/fonts/Regular.woff2',
          weight: '400',
          style: 'normal',
        }
      ]

    });

const Header: React.FC = () => {

      const pathname = usePathname();

  const [headerLink, setHeaderLink] = useState<HeaderItem[]>([])

  const [navbarOpen, setNavbarOpen] = useState(false)
  const [sticky, setSticky] = useState(false)
  const [isSignInOpen, setIsSignInOpen] = useState(false)
  const [isSignUpOpen, setIsSignUpOpen] = useState(false)

  const navbarRef = useRef<HTMLDivElement>(null)
  const signInRef = useRef<HTMLDivElement>(null)
  const signUpRef = useRef<HTMLDivElement>(null)
  const mobileMenuRef = useRef<HTMLDivElement>(null)
    

  useEffect(() => {
    const fetchData = async () => {
      try {
        const res = await fetch('/api/data')
        if (!res.ok) throw new Error('Failed to fetch')
        const data = await res.json()
        setHeaderLink(data.HeaderData)
      } catch (error) {
        console.error('Error fetching services:', error)
      }
    }
    fetchData()
  }, [])



  const handleScroll = () => {

    setSticky(window.scrollY >= 20)
     
  }
    
  const handleClickOutside = (event: MouseEvent) => {
    if (
      signInRef.current &&
      !signInRef.current.contains(event.target as Node)
    ) {
      setIsSignInOpen(false)
    }
    if (
      signUpRef.current &&
      !signUpRef.current.contains(event.target as Node)
    ) {
      setIsSignUpOpen(false)
    }
    if (
      mobileMenuRef.current &&
      !mobileMenuRef.current.contains(event.target as Node) &&
      navbarOpen
    ) {
      setNavbarOpen(false)
    }
  }

  useEffect(() => {
    
    window.addEventListener('scroll', handleScroll)
    document.addEventListener('mousedown', handleClickOutside)
    return () => {
     
     
      window.removeEventListener('scroll', handleScroll)
      document.removeEventListener('mousedown', handleClickOutside)
          
    }
  }, [navbarOpen, isSignInOpen, isSignUpOpen])

  useEffect(() => {
    if (isSignInOpen || isSignUpOpen || navbarOpen) {
      document.body.style.overflow = 'hidden'
    } else {
      document.body.style.overflow = ''
    }
  }, [isSignInOpen, isSignUpOpen, navbarOpen])
  if (pathname === '/') {
      console.log(pathname)
  
  return (
<header
       className={`fixed top-0 z-40  w-full transition-all duration-300 ${
        sticky ? ' shadow-lg bg-white' : 'shadow-none'
      }, ${sticky ? 'height-auto  p-0' : 'height-auto p-4 p-0'}`}>
      <div>
        <div className='flex1' style={{ }}>
          
       <div className='flex3'>
            <Logo />
          </div>
             <nav className="flex2 header-nav flex text-lg font-medium">
          <Link href="/" className="hover:text-gray-300 transition">
            Home
          </Link>

          <Link href="/about" className="hover:text-gray-300 transition">
            Menu
          </Link>

          <Link
            href="/order"
            className="bg-white text-blue-700 px-4 rounded-md font-semibold hover:bg-gray-100 transition"
          >
            Order Now
          </Link>
        </nav>
  
        </div>
      
  
      </div>
    </header>
  )
  }
  else
     return (
    <header
       className={`fixed top-0 z-40  w-full transition-all duration-300 ${
        sticky ? ' shadow-lg bg-white' : 'shadow-none'
      }, ${sticky ? 'height-auto  p-0' : 'height-auto p-4 p-0'}`}>
      <div>
        <div className='backgroundDiv container flex items-center justify-between' style={{ }}>
          
          <div>
            <Logo />
          </div>
             <nav className="header-nav flex gap-6 text-lg font-medium">
          <Link href="/" className="hover:text-gray-300 transition">
            Home
          </Link>

          <Link href="/about" className="hover:text-gray-300 transition">
            Menu
          </Link>

          <Link
            href="/order"
            className="bg-white text-blue-700 px-4 py-2 rounded-md font-semibold hover:bg-gray-100 transition"
          >
            Order Now
          </Link>
        </nav>
  
        </div>
      
  
      </div>
    </header>
  )
}

export default Header
