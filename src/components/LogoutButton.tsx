"use client"
import { Button } from '@/components/ui/button'
import { Loader2 } from 'lucide-react'
import React, { useState } from 'react'

const LogoutButton = () => {
  const [loading, setLoading] = useState(false)
  const handleLogOut = () => {
    console.log('logged out')
  }
  return (
    <Button className='w-24' variant='outline' onClick={handleLogOut} disabled={loading}>
      {loading ? <Loader2 className="animate-spin" /> : "Log Out"}
    </Button>
  )
}

export default LogoutButton