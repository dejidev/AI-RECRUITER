import { createContext } from "react";
import type { AuthCredentials } from "../api/auth/auth_types";

type User = {
    id: string;
    email: string;
};

type AuthContextType = {
    user: User | null;
    token: string | null;
    signIn: (credentials: AuthCredentials) => Promise<void>;
    signUp: (credentials: AuthCredentials) => Promise<void>;
    signOut: () => void;
};

export const AuthContext = createContext<AuthContextType | null>(null);