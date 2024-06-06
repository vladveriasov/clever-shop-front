
import React, { useState } from "react";
import axios from "axios";
import { useNavigate } from "react-router-dom";
import { useAuth } from "./AuthContext";

function LoginForm() {
    const [userEmail, setUserEmail] = useState("039@gmail.com");
    const [userPassword, setUserPassword] = useState("string");
    const navigate = useNavigate();
    const { login } = useAuth();
    const { logout } = useAuth();

    const handleSubmit = async (event) => {
        event.preventDefault();
        try {
            const result = await axios.get(`http://localhost:3000/user/${userEmail}`);
            if (result.data.userPassword === userPassword) {
                const user = {
                    id: result.data.userId,
                    email: result.data.userEmail,
                    role: result.data.userRole,
                };
                login(user);
                window.localStorage.setItem("Id", user.id);
                window.localStorage.setItem("Email", user.email);
                window.localStorage.setItem("Role", user.role);

                if (user.role === "USER") {
                    logout()
                    navigate("/");

                } else if (user.role === "ADMIN") {
                    navigate("/admin");
                    // navigate(`/admin/${user.id}`);
                }
                else if (user.role === "MODERATOR") {
                    navigate("/moderator");
                    // navigate(`/admin/${user.id}`);
                }
            } else {
                alert("Incorrect password!");
            }
        } catch (exception) {
            console.log("Exception:", exception);
        }
    };

    return (
        <div className="login-form-container">
            <form onSubmit={handleSubmit}>
                <div className="mb-3">
                    <label className="form-label" htmlFor="exampleInputEmail1">
                        Email address
                    </label>
                    <input
                        type="email"
                        id="exampleInputEmail1"
                        className="form-control"
                        value={userEmail}
                        onChange={(e) => setUserEmail(e.target.value)}
                        placeholder="Email"
                    />
                    <div id="emailHelp" className="form-text">We'll never share your email with anyone else.</div>
                </div>

                <div className="mb-3">
                    <label className="form-label" htmlFor="exampleInputPassword1">
                        Password
                    </label>
                    <input
                        className="form-control"
                        type="password"
                        id="exampleInputPassword1"
                        value={userPassword}
                        onChange={(e) => setUserPassword(e.target.value)}
                        placeholder="Password"
                    />
                </div>
                <button type="submit" className="btn btn-primary">Submit</button>
            </form>
        </div>
    );
}

export default LoginForm;
