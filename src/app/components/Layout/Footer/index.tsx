'use client'

import React, { FC, useEffect, useState } from 'react'
import Link from 'next/link'
import { Icon } from '@iconify/react'
import Logo from '../Header/Logo'
import { FooterLinkType } from '@/app/types/footerlink'

const Footer: FC = () => {
  const [footerlink, SetFooterlink] = useState<FooterLinkType[]>([])

  useEffect(() => {
    const fetchData = async () => {
      try {
        const res = await fetch('/api/data')
        if (!res.ok) throw new Error('Failed to fetch')
        const data = await res.json()
        SetFooterlink(data.FooterLinkData)
      } catch (error) {
        console.error('Error fetching services:', error)
      }
    }
    fetchData()
  }, [])

  return (
    <footer className='pt-8'>
      <div className='container'>
      
        <div className='border-t border-grey/15 py-5 flex flex-col sm:flex-row justify-between sm:items-center gap-5'>
          <p className='text-sm text-black/70'>
            @2025 - All Rights Reserved
            <Link
              href='https://getnextjstemplates.com/'
              className='hover:text-primary hover:underline'>
              GetNextjsTemplates
            </Link>
          </p>

          <div className=''>
            <Link
              href='#'
              className='text-sm text-black/70 px-5 border-r border-grey/15 hover:text-primary hover:underline'>
              Privacy policy
            </Link>
            <Link
              href='#'
              className='text-sm text-black/70 px-5 hover:text-primary hover:underline'>
              Terms & conditions
            </Link>
          </div>
        </div>
      </div>
    </footer>
  )
}

export default Footer
