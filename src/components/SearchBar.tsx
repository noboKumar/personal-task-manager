import React from "react";
import { Input } from "./ui/input";
import { Button } from "./ui/button";
import { FaPlus } from "react-icons/fa6";

const SearchBar = () => {
  return (
    <div>
      <div className="flex w-full items-center gap-2 mt-10">
        <Input
          className="w-full bg-blue-100 font-semibold"
          type="text"
          placeholder="Search"
        />
        <Button className="bg-green-700 hover:bg-green-600" type="submit">
          <FaPlus className="text-white" />
        </Button>
      </div>
    </div>
  );
};

export default SearchBar;
