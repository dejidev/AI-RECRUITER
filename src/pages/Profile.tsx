import { useAuth } from "../context/Auth";

const Profile = () => {
    const { user, signOut } = useAuth();

    if (!user) return <p>You are not signed in.</p>;

    return (
        <div style={{ textAlign: "center" }}>
            <h1>Profile</h1>
            <p><strong>Name:</strong> {user.name}</p>
            <p><strong>Email:</strong> {user.email}</p>
            <button onClick={signOut}>Sign Out</button>
        </div>
    );
};

export default Profile;
