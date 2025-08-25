import type { AuthCredentials, RawAuthResponse } from "../auth/auth_types";

const API_URL = "http://localhost:8080/interface";

export const signup = async (credentials: AuthCredentials): Promise<RawAuthResponse> => {
    const res = await fetch(`${API_URL}/auth/email/sign-up`, {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(credentials),
    });

    console.log(res)

    if (!res.ok) {
        throw new Error("Signup failed");
    }

    return res.json();
};


export const signin = async (credentials: AuthCredentials): Promise<RawAuthResponse> => {

    const res = await fetch(`${API_URL}/auth/email/sign-in`, {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(credentials),
    });

    if (!res.ok) {
        throw new Error("Signin failed");
    }

    return res.json();
};
