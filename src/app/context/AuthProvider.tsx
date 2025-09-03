"use client";
import {
  onAuthStateChanged,
  signInWithEmailAndPassword,
  signOut,
  User,
  UserCredential,
} from "firebase/auth";
import React, { ReactNode, useEffect, useState } from "react";
import { AuthContext } from "./AuthContext";
import { auth } from "@/lib/firebase.config";

const AuthProvider = ({ children }: { children: ReactNode }) => {
  const [user, setUser] = useState<User | null>(null);
  const [loading, setLoading] = useState<boolean>(true);

  useEffect(() => {
    const unsubscribe = onAuthStateChanged(auth, (currentUser) => {
      setUser(currentUser ?? null);
      setLoading(false);
    });
    return () => unsubscribe();
  }, []);

  // login user
  const loginUser = (
    email: string,
    password: string
  ): Promise<UserCredential> => {
    return signInWithEmailAndPassword(auth, email, password);
  };

  // logout user
  const logoutUser = () => {
    return signOut(auth);
  };

  const userInfo = {
    user,
    setUser,
    loading,
    logoutUser,
    setLoading,
    loginUser,
  };

  return <AuthContext value={userInfo}>{children}</AuthContext>;
};

export default AuthProvider;
