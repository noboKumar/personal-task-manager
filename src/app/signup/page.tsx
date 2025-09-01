import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import Link from "next/link";
import React from "react";

const signup = () => {
  return (
    <div className="space-y-4 border-2 rounded-xl p-8 max-w-xl mx-auto mt-10 bg-red-50">
      <h1 className="text-4xl font-bold">Register Now!</h1>
      <form className="space-y-2">
        {/* name */}
        <div className="grid w-full max-w-sm items-center gap-3">
          <label className="font-semibold" htmlFor="email">
            Name
          </label>
          <Input
            className="bg-white"
            type="text"
            id="name"
            name="name"
            placeholder="Name"
            required
          />
        </div>

        {/* email */}
        <div className="grid w-full max-w-sm items-center gap-3">
          <label className="font-semibold" htmlFor="email">
            Email
          </label>
          <Input
            className="bg-white"
            type="email"
            id="email"
            name="email"
            placeholder="Email"
            required
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
            id="password"
            name="password"
            placeholder="Password"
            required
          />
        </div>
        <p>
          Already have an account?{" "}
          <Link className="underline font-medium" href={"signin"}>
            sign in
          </Link>{" "}
          now
        </p>
        <Button type="submit">Create account</Button>
      </form>
    </div>
  );
};

export default signup;
