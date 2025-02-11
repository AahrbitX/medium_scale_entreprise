import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Filter, Search } from "lucide-react";
import React from "react";
import { FilterDrawerDialog } from "./dialogControls";

function ProductControls() {
  return (
    <div className=" container px-4 mt-16 mb-12 flex items-center justify-between">
      <h3 className="text-3xl font-semibold font-dmsans">All Products</h3>
      <div className=" gap-3 hidden lg:flex ">
        <Input
          type="text"
          className="max-w-[18rem]"
          placeholder="Search Products ... "
        />
        <Button className="">
          <Search size={18} />
        </Button>
      </div>
      <FilterDrawerDialog />
    </div>
  );
}

export default ProductControls;
