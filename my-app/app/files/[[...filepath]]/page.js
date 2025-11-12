import React from 'react'

async function page({params}) {
  console.log(await params)
  const {filepath} = await params;
  return (
    <div>
      <h1>File {filepath?.join('/')}</h1>
    </div>
  )
}

export default page
