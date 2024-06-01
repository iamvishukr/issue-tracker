"use client";
import Link from "next/link";
import { usePathname } from "next/navigation";
import React from "react";
import { AiFillBug } from "react-icons/ai";
import classnames from "classnames";
const Navbar = () => {
  const currentPath = usePathname();

  const links = [
    { label: "Dashboard", href: "/" },
    { label: "Issues", href: "/issues" },
  ];
  return (
    <nav className=" border border-gray-100 mx-2 px-6 flex items-center h-14 space-x-6 rounded-xl shadow-xl">
      <Link href="/">
        <AiFillBug size={40} />
      </Link>
      <ul className="flex flex-row space-x-6 ">
        {links.map((link) => (
          <Link className={classnames({
            'text-zinc-900' : link.href === currentPath,
            'text-zinc-500' : link.href !== currentPath,
            'hover:text-zinc-800 transition-colors': true
          })
          } 
          key={link.href} 
          href={link.href}>
            {link.label}
          </Link>
        ))}
      </ul>
    </nav>
  );
};

export default Navbar;
