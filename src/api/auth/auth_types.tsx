// src/api/auth/auth_types.ts
export type AuthCredentials = {
    email: string;
    password: string;
};

export type User = {
    id: string;
    email: string;
};


// Matches backend raw response
export type RawAuthResponse = {
    data: {
        auth_provider: string;
        userId: string;
    };
    message: string;
    status: string;
    status_code: number;
    token: string;
};

// What your app will actually use
export type AuthResponse = {
    token: string;
    user: {
        id: string;
        email: string;
    };
};
