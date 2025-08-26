import Link from 'next/link'
import React from 'react'

const GameStarter = () => {
  return (
    <div className="w-full bg-background flex justify-between items-center p-2 min-h-12 fixed bottom-0 border-t-1 border-light">
      <Link href={"/game"} className='z-50 w-full rounded-[8px] bg-primary font-extrabold py-2 underline m-1 cursor-pointer hover:bg-primary/75 transition-all duration-200 text-center'>Start</Link>
    </div>
  )
}

export default GameStarter