import { useState } from "react";
import { useNavigate } from "react-router-dom";
import { useAuth } from "../context/AuthContext";
import SignHeader from "../components/SignHeader";

const SignIn = () => {
    const [email, setEmail] = useState("");
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
            <SignHeader />
            <section className="w-full py-12 md:py-24 lg:py-32 bg-gradient-to-r from-slate-50 to-teal-50">
                <div className="container mx-auto px-4 md:px-6">
                    <form onSubmit={handleSubmit}>
                        <input placeholder="Email" value={email} onChange={e => setEmail(e.target.value)} />
                        <input type="password" placeholder="Password" value={password} onChange={e => setPassword(e.target.value)} />
                        <button type="submit">Sign In</button>
                    </form>
                </div>
            </section>

        </div>

    );
};

export default SignIn;
