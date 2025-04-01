import React, { useState } from "react";
import { GoogleOAuthProvider, GoogleLogin } from "@react-oauth/google";
import axios from "axios";

const Signin = () => {
    const [user, setUser] = useState({ usernameOrEmail: "", password: "" });

    const handleChange = (e) => {
        setUser({ ...user, [e.target.name]: e.target.value });
    };

    const handleSubmit = async (e) => {
        e.preventDefault();
        try {
            const res = await axios.post("http://localhost:8080/auth/signin", user);
            console.log("Signin Success:", res.data);
        } catch (error) {
            console.error("Signin Error:", error);
        }
    };

    const handleGoogleSignin = async (response) => {
        try {
            const { credential } = response;
            const res = await axios.post("http://localhost:8080/auth/google", { token: credential });
            console.log("Google Signin Success:", res.data);
        } catch (error) {
            console.error("Google Signin Error:", error);
        }
    };

    return (
        <GoogleOAuthProvider clientId="YOUR_GOOGLE_CLIENT_ID">
            <div style={{ maxWidth: "400px", margin: "50px auto", padding: "20px", border: "1px solid #ccc", borderRadius: "10px", textAlign: "center" }}>
                <h2>Sign In</h2>
                <form onSubmit={handleSubmit}>
                    <input
                        type="text"
                        name="usernameOrEmail"
                        placeholder="Username or Email"
                        value={user.usernameOrEmail}
                        onChange={handleChange}
                        required
                        style={{ width: "100%", padding: "8px", margin: "8px 0" }}
                    />
                    <input
                        type="password"
                        name="password"
                        placeholder="Password"
                        value={user.password}
                        onChange={handleChange}
                        required
                        style={{ width: "100%", padding: "8px", margin: "8px 0" }}
                    />
                    <button
                        type="submit"
                        style={{
                            width: "100%",
                            padding: "10px",
                            backgroundColor: "#007bff",
                            color: "#fff",
                            border: "none",
                            cursor: "pointer"
                        }}
                    >
                        Sign In
                    </button>
                </form>
                <hr />
                <GoogleLogin
                    onSuccess={handleGoogleSignin}
                    onError={() => console.error("Google Signin Failed")}
                />
            </div>
        </GoogleOAuthProvider>
    );
};

export default Signin;
