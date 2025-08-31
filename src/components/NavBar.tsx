import React from "react";
import { Button } from "./ui/button";

const NavBar = () => {
  return (
    <div className="border-b-2 bg-gray-100">
      <div className="flex justify-between px-5 py-2 w-10/12 mx-auto">
        <div>
          <h1 className="text-2xl font-medium">ToDo</h1>
        </div>
        <div>
          <Button variant="outline">Sign In</Button>
        </div>
      </div>
    </div>
  );
};

export default NavBar;
