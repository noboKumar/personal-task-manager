"use client";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import Link from "next/link";
import React, { useContext } from "react";
import { AuthContext } from "../context/AuthContext";
import { useRouter } from "next/navigation";

const SignIn = () => {
  const auth = useContext(AuthContext);
  if (!auth) throw new Error("AuthContext not provided");
  const { loginUser } = auth;
  const router = useRouter();

  const handleSignIn = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    const form = e.currentTarget;
    const email: string = form.email.value;
    const password: string = form.password.value;
    console.log(email, password);

    loginUser(email, password);
    try {
      const userCredential = await loginUser(email, password);
      console.log("User signed in:", userCredential.user);
      router.push("/");
    } catch (error) {
      console.log(error);
    }
  };

  return (
    <div className="space-y-4 border-2 rounded-xl p-8 max-w-xl mx-auto mt-10 bg-red-50">
      <h1 className="text-4xl font-bold">Sign In</h1>
      <form className="space-y-2" onSubmit={handleSignIn}>
        {/* email */}
        <div className="grid w-full max-w-sm items-center gap-3">
          <label className="font-semibold" htmlFor="email">
            Email
          </label>
          <Input
            className="bg-white"
            type="email"
            placeholder="Email"
            name="email"
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
            placeholder="Password"
            name="password"
            required
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
