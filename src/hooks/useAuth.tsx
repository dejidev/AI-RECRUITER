// hooks/useAuth.ts
import { useSelector, useDispatch } from "react-redux";
import { useCallback, useEffect } from "react";
import type { RootState } from "../redux/store";
import {
    setCredentials,
    clearCredentials,
    setLoading,
    restoreCredentials
} from "../redux/auth/authSlice";
import {
    useSignInMutation,
    useSignUpMutation
} from "../redux/auth/authApi";
import { jobsApi } from "../redux/jobs/jobsApi";
import { applicationApi } from "../redux/application/applicationApi";
import { roleMatchingApi } from "../redux/role-match/rolematching";
import type { AuthCredentials } from "../redux/auth/authTypes";

export const useAuth = () => {
    const dispatch = useDispatch();
    const { user, token, isAuthenticated, isLoading } = useSelector(
        (state: RootState) => state.auth
    );

    const [signInMutation] = useSignInMutation();
    const [signUpMutation] = useSignUpMutation();

    // Restore credentials on mount
    useEffect(() => {
        dispatch(restoreCredentials());
    }, [dispatch]);

    const signIn = useCallback(async (credentials: AuthCredentials) => {
        dispatch(setLoading(true));
        try {
            const result = await signInMutation(credentials).unwrap();
            dispatch(setCredentials({
                user: result.user,
                token: result.token
            }));
            return result;
        } catch (error) {
            dispatch(setLoading(false));
            throw error;
        }
    }, [dispatch, signInMutation]);

    const signUp = useCallback(async (credentials: AuthCredentials) => {
        dispatch(setLoading(true));
        try {
            const result = await signUpMutation(credentials).unwrap();
            dispatch(setCredentials({
                user: result.user,
                token: result.token
            }));
            return result;
        } catch (error) {
            dispatch(setLoading(false));
            throw error;
        }
    }, [dispatch, signUpMutation]);

    const signOut = useCallback(() => {
        // Clear auth state
        dispatch(clearCredentials());

        // Reset all RTK Query caches
        dispatch(jobsApi.util.resetApiState());
        dispatch(applicationApi.util.resetApiState());
        dispatch(roleMatchingApi.util.resetApiState());
    }, [dispatch]);

    return {
        user,
        token,
        isAuthenticated,
        isLoading,
        signIn,
        signUp,
        signOut,
    };
};