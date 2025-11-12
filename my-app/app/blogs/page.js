import React from 'react'
import Link from 'next/link'


const page = () => {
  return (
    <div>
      <h1>Blogs</h1>
            <p><Link href="blogs/blog1">Blog 1</Link></p>
            <p><Link href="blogs/blog2">Blog 2</Link></p>
            <p><Link href="blogs/blog3">Blog 3</Link></p>
    </div>
  )
}

export default page
