import React from 'react'
import Navbar from './components/Navbar'
import { Button } from '@/components/ui/button'

const page = () => {
  return (
    <div className=''>
      <Navbar></Navbar>
      <Button variant="secondary">Testing</Button>
    </div>
  )
}

export default page