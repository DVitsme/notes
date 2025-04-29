import React from 'react'
import Link from 'next/link'
import { shadow } from '../app/styles/utils'
import { Button } from '@/components/ui/button';
import { DarkModeToggle } from './DarkModeToggle';
import LogoutButton from './LogoutButton';

const Header = () => {
  const user = true;

  return (
    <header className='relative flex h-24 w-full items-center justify-between bg-popover px-3 sm:px-8' style={{ boxShadow: shadow }}>
      <div className="flex">
        <Link href='/'>
          <p className='font-semibold text-2xl border-b-orange-300 border-b-2'>Ai Note Taker</p>
        </Link>
      </div>
      <div className="flex gap-4">
        {user ? (
          <LogoutButton />
        ) :
          (
            <>
              <Button asChild>
                <Link href="/sign-up" className='hidden'>Sign up</Link>
              </Button>
              <Button asChild>
                <Link href="/login">Login</Link>
              </Button>
            </>
          )}
        <DarkModeToggle />
      </div>
    </header>
  )
}

export default Header