import { useState, useEffect } from "react";
import { signin, signup } from "../api/auth/auth"; // API functions we created
import type { AuthCredentials } from "../api/auth/auth_types";
import { AuthContext } from "./AuthContext";


//To clear the redux stuff 
import { useDispatch } from "react-redux";
import { jobsApi } from "../redux/jobs/jobsApi";
import { applicationApi } from "../redux/application/applicationApi";
import { roleMatchingApi } from "../redux/role-match/rolematching";

type User = {
  id: string;
  email: string;
};


// AuthContext has been moved to a separate file for Fast Refresh compatibility.

export const AuthProvider = ({ children }: { children: React.ReactNode }) => {
  const [user, setUser] = useState<User | null>(null);
  const [token, setToken] = useState<string | null>(null);


  const dispatch = useDispatch();

  // Restore user from localStorage on mount
  useEffect(() => {
    const savedToken = localStorage.getItem("token");
    const savedUser = localStorage.getItem("user");

    if (savedToken && savedUser) {
      try {
        const parsedUser = JSON.parse(savedUser);
        setToken(savedToken);
        setUser(parsedUser);
      } catch (err) {
        console.error("Failed to parse saved user:", savedUser, err);
        localStorage.removeItem("user"); // clear bad value
      }
    }
  }, []);


  const signIn = async (credentials: AuthCredentials) => {
    try {
      const response = await signin(credentials);

      // Transform backend response into your expected shape
      const user = {
        id: response.data.userId,     // might be email or unique identifier
        email: response.data.userId,  // backend gives email here
      };

      const token = response.token;

      setToken(token);
      setUser(user);

      // persist session
      localStorage.setItem("token", token);
      localStorage.setItem("user", JSON.stringify(user));

      return { user, token };
    } catch (error) {
      console.error("Signin failed:", error);
      throw error;
    }
  };


  const signUp = async (credentials: AuthCredentials) => {
    console.log(credentials);

    try {
      const response = await signup(credentials);

      console.log(response);


      const user = {
        id: response.data.userId,
        email: response.data.userId,
      };

      const token = response.token;

      setToken(token);
      setUser(user);

      localStorage.setItem("token", token);
      localStorage.setItem("user", JSON.stringify(user));

      return { user, token };
    } catch (error) {
      console.error("Signup failed:", error);
      throw error;
    }
  };


  const signOut = () => {
    setToken(null);
    setUser(null);
    localStorage.removeItem("token");
    localStorage.removeItem("user");

    // 🔥 Reset RTK Query caches
    dispatch(jobsApi.util.resetApiState());
    dispatch(applicationApi.util.resetApiState());
    dispatch(roleMatchingApi.util.resetApiState());
  };

  return (
    <AuthContext.Provider value={{ user, token, signIn, signUp, signOut }}>
      {children}
    </AuthContext.Provider>
  );
};

// Remove useAuth export from this file. Move it to a new file named useAuth.ts.
