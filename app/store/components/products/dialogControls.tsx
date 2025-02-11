"use client";

import * as React from "react";

import { cn } from "@/lib/utils";
import { useMediaQuery } from "@/lib/useMediaQuery";
import { Button } from "@/components/ui/button";
import {
  Dialog,
  DialogContent,
  DialogDescription,
  DialogHeader,
  DialogTitle,
  DialogTrigger,
} from "@/components/ui/dialog";
import {
  Drawer,
  DrawerClose,
  DrawerContent,
  DrawerDescription,
  DrawerFooter,
  DrawerHeader,
  DrawerTitle,
  DrawerTrigger,
} from "@/components/ui/drawer";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Filter } from "lucide-react";

export function FilterDrawerDialog() {
  const [open, setOpen] = React.useState(false);
  const isDesktop = useMediaQuery("(min-width: 768px)");

  if (isDesktop) {
    return (
      <Dialog open={open} onOpenChange={setOpen}>
        <DialogTrigger asChild>
          <Button className="flex items-center gap-3" variant={"default"}>
            <Filter /> Filter
          </Button>
        </DialogTrigger>
        <DialogContent className="sm:max-w-[425px]">
          <DialogHeader>
            <DialogTitle>Search Products</DialogTitle>
            <DialogDescription>
              Filter Products at your preference.
            </DialogDescription>
          </DialogHeader>
          <ProfileForm isDesktop={isDesktop} />
        </DialogContent>
      </Dialog>
    );
  }

  return (
    <Drawer open={open} onOpenChange={setOpen}>
      <DrawerTrigger asChild>
        <Button className="flex items-center gap-3" variant={"default"}>
          <Filter /> Filter
        </Button>
      </DrawerTrigger>
      <DrawerContent>
        <DrawerHeader className="text-left">
          <DrawerTitle>Search Products</DrawerTitle>
          <DrawerDescription>
            Filter Products at your preference
          </DrawerDescription>
        </DrawerHeader>
        <ProfileForm isDesktop={isDesktop} className="px-4" />
        <DrawerFooter className="pt-2">
          <DrawerClose asChild>
            <Button variant="outline">Cancel</Button>
          </DrawerClose>
        </DrawerFooter>
      </DrawerContent>
    </Drawer>
  );
}

function ProfileForm({
  className,
  isDesktop,
}: React.ComponentProps<"form"> & { isDesktop: boolean }) {
  return (
    <form className={cn("grid items-start gap-4", className)}>
      {!isDesktop && (
        <div className="grid gap-2">
          <Label htmlFor="name">Product Category</Label>
          <Input type="text" id="name" />
        </div>
      )}

      <Button type="submit">Save changes</Button>
    </form>
  );
}
