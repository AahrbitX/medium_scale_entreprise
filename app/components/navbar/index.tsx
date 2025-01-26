"use client";

import * as React from "react";
import Link from "next/link";

import { Button } from "@/components/ui/button";
import {
  SheetDescription,
  Sheet,
  SheetContent,
  SheetHeader,
  SheetTitle,
  SheetTrigger,
} from "@/components/ui/sheet";

import Logo from "@/components/custom/Logo";
import { MenuIcon } from "lucide-react";
import NavLink from "./link";

const navItems = [
  { title: "Home", href: "/" },
  { title: "About", href: "/about" },
  { title: "Brand", href: "/brand" },
  { title: "Store", href: "/store" },
  { title: "Contact", href: "/#contact" },
];

export default function Navbar() {
  const [isOpen, setIsOpen] = React.useState(false);

  return (
    <header className="fixed top-0 w-full bg-background z-50 border-b">
      <div className="container mx-auto px-4">
        <div className="flex h-16 items-center justify-between">
          <Logo logoText="MSE" />
          <nav className="hidden md:flex justify-center gap-6">
            {navItems.map((item) => (
              <NavLink key={item.title} title={item.title} href={item.href} />
            ))}
          </nav>
          <div className="flex items-center space-x-4">
            <div className="hidden md:flex items-center space-x-3">
              <Button asChild>
                <Link href="/signup">Sign Up</Link>
              </Button>
            </div>
            <Sheet open={isOpen} onOpenChange={setIsOpen}>
              <SheetTrigger asChild>
                <Button variant="ghost" size="icon" className="md:hidden">
                  <MenuIcon className="h-5 w-5" />
                  <span className="sr-only">Toggle navigation menu</span>
                </Button>
              </SheetTrigger>
              <SheetContent side="left">
                <SheetHeader>
                  <SheetTitle>
                    <Logo logoText="EcomX" />
                  </SheetTitle>
                  <SheetDescription>Navigation menu</SheetDescription>
                </SheetHeader>
                <nav className="flex flex-col h-full justify-between pb-10">
                  <div className="flex flex-col justify-between space-y-4 pt-10">
                    {navItems.map((item) => (
                      <Link
                        key={item.title}
                        href={item.href}
                        className="font-medium transition-colors hover:text-primary"
                        onClick={() => setIsOpen(false)}
                      >
                        {item.title}
                      </Link>
                    ))}
                  </div>
                  <div className="flex flex-col justify-between space-y-4 pb-5">
                    <Button asChild>
                      <Link href="/signup" onClick={() => setIsOpen(false)}>
                        Sign Up
                      </Link>
                    </Button>
                  </div>
                </nav>
              </SheetContent>
            </Sheet>
          </div>
        </div>
      </div>
    </header>
  );
}
