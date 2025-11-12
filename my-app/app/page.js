import React from "react";
import Link from 'next/link'

 function page() {
  return (
    <div>
      <h1>Technical Agency</h1>
      <p><Link href="about">App Development</Link> </p>
      <p><Link href="about">Web Development</Link> </p>
      <p><Link href="about">App / Web Design</Link> </p>
      <p><Link href="services">Services</Link></p>
      <p><Link href="blogs">Blogs</Link></p>
    </div>
  );
}

export default page;
