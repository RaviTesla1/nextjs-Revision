import React from 'react'

async function page({params}) {
  console.log(await params)
  const {blogID,commentID } = await params
  return (
    <div>
      <h1>Blogs of {blogID} on {commentID} page</h1>
      
    </div>
  )
}

export default page
