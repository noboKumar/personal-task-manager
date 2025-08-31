import React from "react";
import { Button } from "./ui/button";

const NavBar = () => {
  return (
    <div className="border-b-2 bg-red-50">
      <div className="flex justify-between p-5 w-10/12 mx-auto">
        <div>
          <Button variant="ghost" className="text-2xl font-bold">
            ToDo
          </Button>
        </div>
        <div>
          <Button variant="outline">Sign In</Button>
        </div>
      </div>
    </div>
  );
};

export default NavBar;