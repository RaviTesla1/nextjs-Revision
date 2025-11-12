import React from 'react'

async function page({params}) {
  const {blogID} = await params
  console.log('blogID--------',blogID)
  return (
    <div>
       <h1> {blogID}</h1>
    </div>
  )
}

export default page
