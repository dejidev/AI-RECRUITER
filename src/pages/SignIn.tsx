import { useState } from "react";
import { useNavigate, Link } from "react-router-dom";
import { useAuth } from "../context/useAuth";

const SignIn = () => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [error, setError] = useState<string | null>(null);
  const [loading, setLoading] = useState(false);

  const { signIn } = useAuth();
  const navigate = useNavigate();


  const validateForm = () => {
    if (!email) return "Email is required.";
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    if (!emailRegex.test(email)) return "Please enter a valid email.";

    if (!password) return "Password is required.";
    if (password.length < 6) return "Password must be at least 6 characters.";

    return null;
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setError(null);
    setLoading(true);

    // Client-side validation
    const validationError = validateForm();
    if (validationError) {
      setError(validationError);
      return;
    }

    try {
      await signIn({ email, password });
      navigate("/dashboard");
    } catch (err: any) {
      setError(err.message || "Invalid credentials. Please try again.");
    } finally {
      setLoading(false)
    }

  };

  return (
    <div>
      <section className="w-full bg-gradient-to-r ">
        <div>
          <div className="flex items-center justify-between min-h-screen">
            <div className="container">
              <form onSubmit={handleSubmit} className="text-center">
                <h2 className="text-4xl font-bold">Welcome Back</h2>
                <p className="text-gray-500 mb-8">
                  Start hiring smarter & Faster...
                </p>

                <div className="grid grid-cols-1 gap-7">
                  <input
                    placeholder="Name@work.com"
                    type="email"
                    value={email}
                    onChange={(e) => setEmail(e.target.value)}
                    className="py-3 px-6 shadow-md outline-none text-gray-500 w-[32vw] mx-auto"
                    required
                  />
                  <input
                    type="password"
                    placeholder="Password"
                    value={password}
                    onChange={(e) => setPassword(e.target.value)}
                    className="py-3 px-6 shadow-md outline-none text-gray-500 w-[32vw] mx-auto"
                    required
                  />
                  <small className="underline text-gray-500 cursor-pointer">
                    Forgot Password
                  </small>



                  <button
                    type="submit"
                    disabled={loading}
                    className="flex items-center justify-center gap-2 py-3 px-6 bg-[#1370C8] text-white rounded-md cursor-pointer w-[32vw] mx-auto disabled:opacity-70"
                  >
                    {loading ? "Signing In..." : "Sign In"}

                    {loading && (
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
                        ></circle>
                        <path
                          className="opacity-75"
                          fill="currentColor"
                          d="M4 12a8 8 0 018-8v4a4 4 0 00-4 4H4z"
                        ></path>
                      </svg>
                    )}
                  </button>
                </div>

                {error && <p className="text-red-500 mt-4">{error}</p>}

                <p className="text-gray-500 mt-4">
                  Don't have an account?{" "}
                  <span className="text-[#1370C8] font-semibold">
                    <Link to="/signup">Sign Up</Link>
                  </span>
                </p>
              </form>
            </div>

            <div>
              <div className="bg-[url(/images/sign-in-image.jpg)] h-screen w-[40vw] bg-no-repeat bg-cover bg-center rounded-tl-[80px]"></div>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default SignIn;
