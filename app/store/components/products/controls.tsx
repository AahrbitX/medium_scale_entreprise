"use client";

import React, { useState, useEffect, useRef } from "react";
import { motion } from "framer-motion";
import { useSearchParams } from "next/navigation";
import { Search } from "lucide-react";

import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { FilterDrawerDialog } from "./dialogControls";

import {
  Breadcrumb,
  BreadcrumbItem,
  BreadcrumbLink,
  BreadcrumbList,
  BreadcrumbPage,
  BreadcrumbSeparator,
} from "@/components/ui/breadcrumb";
import Link from "next/link";

function ProductControls() {
  const controlsRef = useRef<HTMLDivElement>(null);
  const [isPinned, setIsPinned] = useState(false);
  const [originalOffset, setOriginalOffset] = useState(0);

  useEffect(() => {
    if (controlsRef.current) {
      setOriginalOffset(controlsRef.current.offsetTop); // Store initial position
    }

    const handleScroll = () => {
      if (!controlsRef.current) return;

      const scrollY = window.scrollY;

      if (scrollY >= originalOffset - 80) {
        setIsPinned(true);
      }
      if (scrollY < originalOffset - 80) {
        setIsPinned(false);
      }
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, [originalOffset]);

  return (
    <motion.div
      ref={controlsRef}
      layout
      className={`px-4 py-10 mb-4 z-50 transition-all duration-300 bg-background ${
        isPinned
          ? "fixed top-16 left-0 w-full py-5 border-y border-zinc-300"
          : "relative"
      }`}
    >
      <div className="flex items-center justify-between container mx-auto px-4">
        <CategoryBreadCrumbs />
        <div className="gap-3 hidden lg:flex">
          <Input
            type="text"
            className="max-w-[18rem]"
            placeholder="Search Products ... "
          />
          <Button>
            <Search size={18} />
          </Button>
        </div>
        <FilterDrawerDialog />
      </div>
    </motion.div>
  );
}

function CategoryBreadCrumbs() {
  const searchParams = useSearchParams();

  const currCategory = searchParams.get("category");

  if (!currCategory) {
    return <p className="text-2xl">All Products</p>;
  }

  const currCategoryString =
    currCategory.charAt(0)?.toUpperCase() + currCategory.slice(1);

  return (
    <Breadcrumb className="*:text-xl">
      <BreadcrumbList>
        <BreadcrumbItem>
          <BreadcrumbLink asChild>
            <Link href="/store">All Products</Link>
          </BreadcrumbLink>
        </BreadcrumbItem>
        <BreadcrumbSeparator />
        <BreadcrumbItem>
          <BreadcrumbPage>{currCategoryString}</BreadcrumbPage>
        </BreadcrumbItem>
      </BreadcrumbList>
    </Breadcrumb>
  );
}

export default ProductControls;
