import React from 'react'
import Link from 'next/link'
import Image from 'next/image'
import logo from '@/assets/svg/logo.svg'

function index() {
  return (
    <nav className='bg-background'>
      <div className="max-w-7xl mx-auto px-2 sm:px-6 lg:px-8">
        <div className="relative flex items-center justify-between h-16">
          <div className="flex-1 flex items-center justify-center sm:items-stretch sm:justify-start">
            <div className=" flex items-center justify-center">
              <Link href="/">
                <Image src={logo}/>
              </Link>
            </div>
            <div className="hidden sm:block sm:ml-6 ">
              <div className="flex space-x-4 justify-center items-center" style={{height: '100%'}}>
                <Link href="/sobre">
                 Sobre
                </Link>
                <Link href="/loja">
                 Loja
                </Link>
                <Link href="/contato">
                 Contato
                </Link>
              </div>
            </div>
          </div>
        </div>
      </div>
    </nav>
  )
}

export default index