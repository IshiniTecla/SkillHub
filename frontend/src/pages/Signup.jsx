import React, { useState } from "react";
import { GoogleOAuthProvider, GoogleLogin } from "@react-oauth/google";
import axios from "axios";

const Signup = () => {
    const [user, setUser] = useState({
        name: "",
        phone: "",
        address: "",
        email: "",
        password: "",
        confirmPassword: "",
    });

    const handleChange = (e) => {
        setUser({ ...user, [e.target.name]: e.target.value });
    };

    const handleSubmit = async (e) => {
        e.preventDefault();
        if (user.password !== user.confirmPassword) {
            alert("Passwords do not match!");
            return;
        }
        try {
            const res = await axios.post("http://localhost:8080/auth/signup", user);
            console.log("Signup Success:", res.data);
        } catch (error) {
            console.error("Signup Error:", error);
        }
    };

    const handleGoogleSignup = async (response) => {
        try {
            const { credential } = response;
            const res = await axios.post("http://localhost:8080/auth/google", { token: credential });
            console.log("Google Signup Success:", res.data);
        } catch (error) {
            console.error("Google Signup Error:", error);
        }
    };

    return (
        <GoogleOAuthProvider clientId="YOUR_GOOGLE_CLIENT_ID">
            <div style={{ maxWidth: "400px", margin: "50px auto", padding: "20px", border: "1px solid #ccc", borderRadius: "10px", textAlign: "center" }}>
                <h2>Sign Up</h2>
                <form onSubmit={handleSubmit}>
                    <input type="text" name="name" placeholder="Name" value={user.name} onChange={handleChange} required style={{ width: "100%", padding: "8px", margin: "8px 0" }} />
                    <input type="text" name="phone" placeholder="Phone" value={user.phone} onChange={handleChange} required style={{ width: "100%", padding: "8px", margin: "8px 0" }} />
                    <input type="text" name="address" placeholder="Address" value={user.address} onChange={handleChange} required style={{ width: "100%", padding: "8px", margin: "8px 0" }} />
                    <input type="email" name="email" placeholder="Email" value={user.email} onChange={handleChange} required style={{ width: "100%", padding: "8px", margin: "8px 0" }} />
                    <input type="password" name="password" placeholder="Password" value={user.password} onChange={handleChange} required style={{ width: "100%", padding: "8px", margin: "8px 0" }} />
                    <input type="password" name="confirmPassword" placeholder="Confirm Password" value={user.confirmPassword} onChange={handleChange} required style={{ width: "100%", padding: "8px", margin: "8px 0" }} />
                    <button type="submit" style={{ width: "100%", padding: "10px", backgroundColor: "#007bff", color: "#fff", border: "none", cursor: "pointer" }}>Sign Up</button>
                </form>
                <hr />
                <GoogleLogin onSuccess={handleGoogleSignup} onError={() => console.error("Google Signup Failed")} />
            </div>
        </GoogleOAuthProvider>
    );
};

export default Signup;
