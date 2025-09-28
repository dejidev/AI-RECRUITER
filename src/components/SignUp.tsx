// pages/SignUp.tsx - Enhanced Responsive Version (with show/hide password)
import { useState, useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { useNavigate, Link } from "react-router-dom";
import { Eye, EyeOff } from "lucide-react";
import { useSignUpMutation } from "../redux/auth/authApi";
import { setCredentials } from "../redux/auth/authSlice";
import type { RootState } from "../redux/store";

const SignUp = () => {
    const [email, setEmail] = useState("");
    const [name, setName] = useState("");
    const [password, setPassword] = useState("");
    const [confirmPassword, setConfirmPassword] = useState("");
    const [error, setError] = useState<string | null>(null);

    // new: show/hide states
    const [showPassword, setShowPassword] = useState(false);
    const [showConfirmPassword, setShowConfirmPassword] = useState(false);

    const dispatch = useDispatch();
    const navigate = useNavigate();
    const { isAuthenticated } = useSelector((state: RootState) => state.auth);

    const [signUpMutation, { isLoading }] = useSignUpMutation();

    useEffect(() => {
        if (isAuthenticated) {
            navigate("/dashboard");
        }
    }, [isAuthenticated, navigate]);

    const validateForm = () => {
        if (!email) return "Email is required.";
        const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
        if (!emailRegex.test(email)) return "Please enter a valid email.";

        if (!password) return "Password is required.";

        // Strong password validation: min 8, uppercase, lowercase, digit, special char
        const passwordRegex =
            /^(?=.*[a-z])(?=.*[A-Z])(?=.*\d)(?=.*[@$!%*?&+])[A-Za-z\d@$!%*?&+]{8,}$/;

        if (!passwordRegex.test(password)) {
            return "Password must be at least 8 characters long, include uppercase, lowercase, number, and a special character.";
        }

        if (password !== confirmPassword) return "Passwords do not match.";

        return null;
    };

    const handleSubmit = async (e: React.FormEvent) => {
        e.preventDefault();
        setError(null);

        const validationError = validateForm();
        if (validationError) {
            setError(validationError);
            return;
        }

        try {
            const result = await signUpMutation({
                email,
                password,
            }).unwrap();

            dispatch(setCredentials({
                user: result.user,
                token: result.token
            }));

            navigate("/dashboard");

        } catch (err: any) {
            console.error("SignUp error:", err);

            if (err?.data?.message) {
                setError(err.data.message);
            } else if (err?.message) {
                setError(err.message);
            } else if (err?.status === 409) {
                setError("Account already exists. Please sign in instead.");
            } else {
                setError("Sign up failed. Please try again.");
            }
        }
    };

    return (
        <div className="min-h-screen">
            <section className="w-full bg-gradient-to-r from-blue-50 to-indigo-100">
                <div className="min-h-screen flex flex-col lg:flex-row items-center justify-center lg:justify-between">
                    {/* Form Container */}
                    <div className="w-full max-w-lg mx-auto lg:mx-0 lg:ml-16 p-6 lg:p-8">
                        <form onSubmit={handleSubmit} className="text-center space-y-6">
                            <div className="mb-8">
                                <h2 className="text-3xl lg:text-4xl font-bold text-gray-800 mb-2">
                                    Create your account
                                </h2>
                                <p className="text-gray-600">
                                    Start hiring smarter & faster...
                                </p>
                            </div>

                            <div className="space-y-4">
                                <input
                                    placeholder="Full Name"
                                    value={name}
                                    onChange={(e) => setName(e.target.value)}
                                    className="w-full py-3 px-6 border border-gray-200 rounded-lg shadow-sm outline-none focus:ring-2 focus:ring-gray-300 focus:border-transparent text-gray-700 transition-all"
                                />

                                <input
                                    placeholder="Email"
                                    type="email"
                                    value={email}
                                    onChange={(e) => setEmail(e.target.value)}
                                    className="w-full py-3 px-6 border border-gray-200 rounded-lg shadow-sm outline-none focus:ring-2 focus:ring-gray-300 focus:border-transparent text-gray-700 transition-all"
                                    required
                                />

                                {/* Password input with eye icon */}
                                <div className="relative">
                                    <input
                                        type={showPassword ? "text" : "password"}
                                        placeholder="Password"
                                        value={password}
                                        onChange={(e) => setPassword(e.target.value)}
                                        className="w-full py-3 px-6 pr-12 border border-gray-200 rounded-lg shadow-sm outline-none focus:ring-2 focus:ring-gray-300 focus:border-transparent text-gray-700 transition-all"
                                        required
                                        aria-describedby="password-requirements"
                                    />

                                    <button
                                        type="button"
                                        onClick={() => setShowPassword((s) => !s)}
                                        className="absolute right-3 top-1/2 -translate-y-1/2 p-1.5 rounded-md hover:bg-gray-100 focus:outline-none"
                                        aria-label={showPassword ? "Hide password" : "Show password"}
                                    >
                                        {showPassword ? (
                                            <EyeOff size={18} />
                                        ) : (
                                            <Eye size={18} />
                                        )}
                                    </button>
                                </div>

                                {/* Confirm password input with eye icon */}
                                <div className="relative">
                                    <input
                                        type={showConfirmPassword ? "text" : "password"}
                                        placeholder="Confirm Password"
                                        value={confirmPassword}
                                        onChange={(e) => setConfirmPassword(e.target.value)}
                                        className="w-full py-3 px-6 pr-12 border border-gray-200 rounded-lg shadow-sm outline-none focus:ring-2 focus:ring-gray-300 focus:border-transparent text-gray-700 transition-all"
                                        required
                                    />

                                    <button
                                        type="button"
                                        onClick={() => setShowConfirmPassword((s) => !s)}
                                        className="absolute right-3 top-1/2 -translate-y-1/2 p-1.5 rounded-md hover:bg-gray-100 focus:outline-none"
                                        aria-label={showConfirmPassword ? "Hide confirm password" : "Show confirm password"}
                                    >
                                        {showConfirmPassword ? (
                                            <EyeOff size={18} />
                                        ) : (
                                            <Eye size={18} />
                                        )}
                                    </button>
                                </div>

                                <button
                                    type="submit"
                                    disabled={isLoading}
                                    className="w-full flex items-center justify-center gap-2 py-3 px-6 bg-[#1370C8] hover:bg-blue-700 text-white rounded-lg disabled:opacity-70 disabled:cursor-not-allowed transition-all duration-200 font-medium"
                                >
                                    {isLoading ? "Signing Up..." : "Sign Up"}

                                    {isLoading && (
                                        <svg
                                            className="animate-spin h-5 w-5 text-white"
                                            xmlns="http://www.w3.org/2000/svg"
                                            fill="none"
                                            viewBox="0 0 24 24"
                                        >
                                            <circle
                                                className="opacity-25"
                                                cx="12"
                                                cy="12"
                                                r="10"
                                                stroke="currentColor"
                                                strokeWidth="4"
                                            />
                                            <path
                                                className="opacity-75"
                                                fill="currentColor"
                                                d="M4 12a8 8 0 018-8v4a4 4 0 00-4 4H4z"
                                            />
                                        </svg>
                                    )}
                                </button>
                            </div>

                            {error && (
                                <div className="p-3 bg-red-50 border border-red-200 rounded-lg">
                                    <p className="text-red-600 text-sm">{error}</p>
                                </div>
                            )}

                            <p className="text-gray-600 text-sm">
                                Already have an account?{" "}
                                <span className="text-[#1370C8] font-semibold hover:underline">
                                    <Link to="/signin">Sign in</Link>
                                </span>
                            </p>

                            <p className="text-gray-500 text-xs">
                                By signing up you agree to Recruit AI's{" "}
                                <span className="text-gray-700 underline cursor-pointer hover:text-gray-900 transition-all">
                                    Terms and Conditions
                                </span>
                            </p>
                        </form>
                    </div>

                    {/* Image Container - Responsive */}
                    <div className="hidden lg:block lg:w-2/5 lg:h-screen">
                        <div className="bg-[url(/images/sign-in-image.jpg)] h-full w-full bg-no-repeat bg-cover bg-center rounded-tl-[80px]"></div>
                    </div>
                </div>
            </section>
        </div>
    );
};

export default SignUp;
