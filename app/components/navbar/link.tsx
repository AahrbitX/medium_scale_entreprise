import React from "react";
import Link from "next/link";
function NavLink({ title, href }: { title: string; href: string }) {
  return (
    <Link
      key={title}
      href={href}
      className="font-medium transition-colors hover:text-primary hover:opacity-[0.9]"
    >
      {title}
    </Link>
  );
}

export default NavLink;
