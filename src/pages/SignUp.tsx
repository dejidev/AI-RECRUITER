import { useState } from "react";
import { useNavigate } from "react-router-dom";
import { useAuth } from "../context/AuthContext";
import { Link } from "react-router-dom";
// import SignHeader from "../components/SignHeader";

const SignUp = () => {
  const [email, setEmail] = useState("");
  const [name, setName] = useState("");
  const [password, setPassword] = useState("");
  const { signIn } = useAuth();
  const navigate = useNavigate();

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    signIn(email, password);
    navigate("/dashboard");
  };

  return (
    <div>
      <section className="w-full bg-gradient-to-r ">
        <div>
          <div className="flex items-center justify-between min-h-screen">
            <div className="container">
              <form onSubmit={handleSubmit} className="text-center">
                <h2 className="text-4xl font-bold">Create your account</h2>
                <p className="text-gray-500 mb-8">
                  Start hiring smarter & Faster...
                </p>
                <div className="grid grid-cols-1 gap-7 ">
                  <input
                    placeholder="Full Name"
                    value={name}
                    onChange={(e) => setName(e.target.value)}
                    className=" py-3 px-6 shadow-md outline-none text-gray-500 w-[32vw] mx-auto"
                  />
                  <input
                    placeholder="Email"
                    value={email}
                    onChange={(e) => setEmail(e.target.value)}
                    className="py-3 px-6 shadow-md outline-none text-gray-500 w-[32vw] mx-auto"
                  />
                  <input
                    type="password"
                    placeholder="Password"
                    value={password}
                    onChange={(e) => setPassword(e.target.value)}
                    className="py-3 px-6 shadow-md outline-none text-gray-500 w-[32vw] mx-auto"
                  />
                  <button
                    type="submit"
                    className="py-3 px-6 bg-[#1370C8] text-white rounded-md cursor-pointer w-[32vw] mx-auto"
                  >
                    Sign up
                  </button>
                </div>
                <p className="text-gray-500 mb-8">
                  Already have an account ?
                  <span className="text-[#1370C8] font-semibold">
                    <Link to={"/signin"}>Sign in</Link>
                  </span>
                </p>
                <p className="text-gray-500">
                  By signing up you agree to Recruit AI's
                  <span className="text-black underline ml-1">
                    Terms and Condition
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

export default SignUp;
