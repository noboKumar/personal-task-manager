import { User, UserCredential } from "firebase/auth";
import { createContext } from "react";

interface AuthContextType {
  user: User | null;
  loading: boolean;
  loginUser: (email: string, password: string) => Promise<UserCredential>;
  logoutUser: () => Promise<void>;
}

export const AuthContext = createContext<AuthContextType | undefined>(undefined);
