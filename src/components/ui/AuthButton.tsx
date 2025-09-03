"use client";
import { AuthContext } from "@/app/context/AuthContext";
import React, { useContext } from "react";
import { Button } from "./button";
import Link from "next/link";
import Swal from "sweetalert2";

const AuthButton = () => {
  const auth = useContext(AuthContext);
  if (!auth) throw new Error("AuthContext not provided");
  const { user, logoutUser } = auth;

  const handleSignOut = async () => {
    const result = await Swal.fire({
      title: "Sure Log Out?",
      icon: "warning",
      showCancelButton: true,
      confirmButtonColor: "#3085d6",
      cancelButtonColor: "#d33",
      confirmButtonText: "Yes, log out!",
    });

    if (result.isConfirmed) {
      await logoutUser();
      await Swal.fire({
        title: "Logged Out!",
        text: "You have been logged out.",
        icon: "success",
      });
    }
  };

  return (
    <>
      {user?.email ? (
        <div className="flex items-center gap-4">
          <h1 className="font-semibold">{user.email}</h1>
          <Button
            onClick={handleSignOut}
            className="bg-red-500 hover:bg-red-800"
          >
            Sign Out
          </Button>
        </div>
      ) : (
        <Link href={"/signin"}>
          <Button variant="outline">Sign In</Button>
        </Link>
      )}
    </>
  );
};

export default AuthButton;
