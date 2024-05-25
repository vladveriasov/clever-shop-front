import React, { useState } from "react";
// import "./style.css";
import "../App.css";
import axios from "axios";
// import { useNavigate } from "react-router-dom";


function LoginForm() {
    const [userEmail, setUserEmail] = useState("");
    const [userPassword, setUserPassword] = useState("");
    //   const [showModal, setShowModal] = useState(false)
    const [userRole, setUserRole] = useState("");
    const [userId, setUserId] = useState("");
    //   let navigate = useNavigate(); 

    const handleSubmit = () => {
        const dataFetch = async () => {
            console.log("in")
            const result = await axios(`http://localhost:3000/user/${userEmail}`, { method: "GET", data: { userEmail} });
            console.log(result)
            if (result.data.userRole !== 'false') {
                console.log('set local stor')
                console.log(userId, userEmail, userRole)
                // window.localStorage.clear();
                window.localStorage.setItem("Id", userId)
                window.localStorage.setItem("Email", userEmail)
                window.localStorage.setItem("Role", result.data.userRole)

                // window.localStorage.setItem("Role", result.data.isUser ? "USER" : result.data.isModerator ? "MODERATOR" : result.data.isAdmin ? "ADMIN" : null)
            }
            //   setShowModal(true)
            // setUserRole(result.data.userRole)
            // console.log("role:  ", userRole)
            // setUserId(result.data.userId)
            console.log(result.data.userId)

            if (result.data.userRole == "USER") {
                // navigate("/")
            } else if (result.data.userRole == "MODERATOR") {
                // navigate("/moderator/"+userId)
            } else if (result.data.userRole == "ADMIN") {
                // navigate("/admin/"+userId)
            }

        };
        try {
            dataFetch();
        } catch (exeption) {
            console.log("exeption:", exeption);
        } 
    };

    return (<div className="login-form-container">
        <form>
            <div className="mb-3">
                <label className="form-label" htmlFor="exampleInputEmail1">
                    Email address {" "}
                </label>
                <input
                    type="email"
                    id="exampleInputEmail1"
                    className="form-control"
                    aria-describedby="emailHelp"
                    value={userEmail}
                    onChange={(e) => setUserEmail(e.target.value)}
                    placeholder="Email"
                />
                <div id="emailHelp" className="form-text">We'll never share your email with anyone else.</div>
            </div>

            <div className="mb-3">
                <label className="form-label" htmlFor="exampleInputPassword1">
                    Password{" "}
                </label>
                <input
                    className="form-control"
                    type="password"
                    id="exampleInputPassword1"
                    value={userPassword}
                    onChange={(e) => setUserPassword(e.target.value)}
                    placeholder="пароль"
                />
            </div>
            <button type="submit" className="btn btn-primary" onClick={() => handleSubmit()}>Submit</button>
        </form>
    </div>
    );
}

export default LoginForm;
