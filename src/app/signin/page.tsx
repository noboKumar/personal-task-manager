import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import Link from "next/link";
import React from "react";

const SignIn = () => {
  return (
    <div className="space-y-4 border-2 rounded-xl p-8 max-w-xl mx-auto mt-10 bg-red-50">
      <h1 className="text-4xl font-bold">Sign In</h1>
      <form className="space-y-4">
        {/* email */}
        <div className="grid w-full max-w-sm items-center gap-3">
          <label className="font-semibold" htmlFor="email">
            Email
          </label>
          <Input
            className="bg-white"
            type="email"
            id="email"
            placeholder="Email"
          />
        </div>

        {/* password */}
        <div className="grid w-full max-w-sm items-center gap-3">
          <label className="font-semibold" htmlFor="email">
            Password
          </label>
          <Input
            className="bg-white"
            type="password"
            id="email"
            placeholder="Password"
          />
        </div>
        <p>
          New here?{" "}
          <Link className="underline font-medium" href={"signup"}>
            sign up
          </Link>{" "}
          now
        </p>
        <Button type="submit">Sign In</Button>
      </form>
    </div>
  );
};

export default SignIn;
