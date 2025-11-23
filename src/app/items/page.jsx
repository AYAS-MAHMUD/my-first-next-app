import Link from 'next/link'
import React from 'react'

const items = () => {
  return (
    <div className="flex flex-col min-h-screen items-center justify-center bg-zinc-50 font-sans dark:bg-black">
      <h1>All Products</h1>
      <Link href='/items/1'>1</Link>
      <div>2</div>
      <div>3</div>
      <div>4</div>
      <div>5</div>
      <div>6</div>
    </div>
  )
}

export default items