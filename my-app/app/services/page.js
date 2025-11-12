import React from "react";
import Link from "next/link";

function page() {
  return (
    <div>
      <h1>Services</h1>
      <p>
        <Link href="services/seo">Seo</Link>{" "}
      </p>
      <p>
        <Link href="services/web">Web Development</Link>
      </p>
    </div>
  );
}

export default page;
