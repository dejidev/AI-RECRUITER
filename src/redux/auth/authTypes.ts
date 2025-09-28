// redux/auth/authTypes.ts
export interface AuthCredentials {
    email: string;
    password: string;
    name?: string; // Optional for sign up
}

export interface User {
    id: string;
    email: string;
    authProvider?: string;
}

export interface AuthData {
    auth_provider: string;
    userId: string;
}

export interface AuthResponse {
    data?: AuthData;
    message: string;
    status: "success" | "error";
    status_code: number;
    token?: string;
}

export interface SignInResponse {
    user: User;
    token: string;
    message: string;
}

export interface SignUpResponse {
    user: User;
    token: string;
    message: string;
}

export interface AuthState {
    user: User | null;
    token: string | null;
    isAuthenticated: boolean;
    isLoading: boolean;
}

export interface AuthError {
    message: string;
    status?: number;
}