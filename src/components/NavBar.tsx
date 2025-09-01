import React from "react";
import { Button } from "./ui/button";
import Link from "next/link";

const NavBar = () => {
  return (
    <div className="border-b-2 bg-red-50">
      <div className="flex justify-between p-5 w-10/12 mx-auto">
        <div>
          <Link href={"/"}>
            <Button variant="ghost" className="text-2xl font-bold">
              ToDo
            </Button>
          </Link>
        </div>
        <div>
          <Link href={"/signin"}>
            <Button variant="outline">Sign In</Button>
          </Link>
        </div>
      </div>
    </div>
  );
};

export default NavBar;
