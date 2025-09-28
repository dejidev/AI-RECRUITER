// // redux/auth/authSlice.ts
// import { createSlice, type PayloadAction } from "@reduxjs/toolkit";
// import type { AuthState, User } from "./authTypes";

// const initialState: AuthState = {
//     user: null,
//     token: null,
//     isAuthenticated: false,
//     isLoading: false,
// };

// const authSlice = createSlice({
//     name: "auth",
//     initialState,
//     reducers: {
//         setCredentials: (
//             state,
//             action: PayloadAction<{ user: User; token: string }>
//         ) => {
//             const { user, token } = action.payload;
//             state.user = user;
//             state.token = token;
//             state.isAuthenticated = true;
//             state.isLoading = false;

//         },

//         clearCredentials: (state) => {
//             state.user = null;
//             state.token = null;
//             state.isAuthenticated = false;
//             state.isLoading = false;
//         },

//         setLoading: (state, action: PayloadAction<boolean>) => {
//             state.isLoading = action.payload;
//         },

//     },
// });

// export const { setCredentials, clearCredentials, setLoading } =
//     authSlice.actions;

// export default authSlice.reducer;




import { createSlice, type PayloadAction } from "@reduxjs/toolkit";
import type { AuthState, User } from "./authTypes";

const initialState: AuthState = {
    user: null,
    token: null,
    isAuthenticated: false,
    isLoading: false,
};

const authSlice = createSlice({
    name: "auth",
    initialState,
    reducers: {
        setCredentials: (
            state,
            action: PayloadAction<{ user: User; token: string }>
        ) => {
            const { user, token } = action.payload;
            state.user = user;
            state.token = token;
            state.isAuthenticated = true;
            state.isLoading = false;

            // ✅ Persist securely in sessionStorage
            sessionStorage.setItem("token", token);
            sessionStorage.setItem("user", JSON.stringify(user));
        },

        clearCredentials: (state) => {
            state.user = null;
            state.token = null;
            state.isAuthenticated = false;
            state.isLoading = false;

            // ✅ Clear sessionStorage
            sessionStorage.removeItem("token");
            sessionStorage.removeItem("user");
        },

        setLoading: (state, action: PayloadAction<boolean>) => {
            state.isLoading = action.payload;
        },

        restoreCredentials: (state) => {
            try {
                const token = sessionStorage.getItem("token");
                const userStr = sessionStorage.getItem("user");

                if (token && userStr) {
                    const user = JSON.parse(userStr);
                    state.user = user;
                    state.token = token;
                    state.isAuthenticated = true;
                }
            } catch (error) {
                console.error("Failed to restore credentials:", error);
                sessionStorage.removeItem("token");
                sessionStorage.removeItem("user");
            }
        },
    },
});

export const {
    setCredentials,
    clearCredentials,
    setLoading,
    restoreCredentials,
} = authSlice.actions;

export default authSlice.reducer;
