// import { NavLink } from "react-router-dom";
// import React, { useState, useEffect, useContext } from "react";

// // import LoginContext from './../App'

// const NavBar = () => {

//     const [isAuthenticated, setIsAuthenticated] = useState(false);
//     const [showLoginForm, setShowLoginForm] = useState(false)

//     const [localCurrentId, setCurrentId] = useState("")
//     const [localCurrentRole, setLocalCurrentRole] = useState("")
//     const [localCurrentEmail, setCurrentEmail] = useState("")

//     const [isAdmin, setIsAdmin] = useState(false)


//     const updateNavBar = () => {
//         const localCurrentId = window.localStorage.getItem("Id");
//         const localCurrentEmail = window.localStorage.getItem("Email");
//         const localCurrentRole = window.localStorage.getItem("Role");

//         setCurrentId(localCurrentId);
//         setCurrentEmail(localCurrentEmail);
//         setLocalCurrentRole(localCurrentRole);
//         setIsAuthenticated(Boolean(localCurrentId));

//         console.log(isAuthenticated)

//         setIsAdmin(localCurrentRole ? "ADMIN" : null)
//         let isModerator = localCurrentRole ? "MODERATOR" : null
//         let isUser = localCurrentRole ? "USER" : null

//         console.log(isAdmin)
//         console.log(isUser)
//     };

//     useEffect(() => {
//         // Вызываем функцию обновления при монтировании компонента
//         updateNavBar();

//         // Здесь можно следить за изменениями других переменных, которые могут повлиять на навигационную панель
//     }, []);

//     const LogOut = () => {
//         window.localStorage.clear();
//         updateNavBar();
//         setIsAuthenticated(false);
//     }

//     const Authenticated = () => {
//         updateNavBar();
//         // setIsAuthenticated(true);
//     }
//     return (
//         <nav className="navbar" >
//             <div className="container-fluid">
//                 <img src="shopit.png" className="navbar-logo-img"></img>
//                 <div className="navbar-nav">
//                     <div className="navbar-nav-container">
//                         <div className="nav-link">
//                             <NavLink to="/">Home</NavLink>
//                         </div>
//                         {!localCurrentRole && (
//                             <div className="nav-link">
//                                 <li>
//                                     <NavLink to="/login" >Login</NavLink>
//                                 </li>
//                             </div>
//                         )}
//                         {(localCurrentRole) && (
//                             <div className="nav-link">
//                                 <NavLink to="/" onClick={LogOut}>
//                                     <span>Вийти</span>
//                                 </NavLink>
//                             </div>

//                         )}
//                         {(isAdmin) && (
//                             <div className="nav-link">
//                                 <NavLink to="/admin" >
//                                     <span>Admin</span>
//                                 </NavLink>
//                             </div>

//                         )}
//                     </div>
//                 </div>
//             </div>
//         </nav>
//     );
// };

// export default NavBar;


// NavBar.js
import { NavLink } from "react-router-dom";
// import React, { useEffect } from "react";
import { useAuth } from './AuthContext';

const NavBar = () => {
    const { isAuthenticated, currentUser, logout } = useAuth();

    return (
        <nav className="navbar">
            <div className="container-fluid">
                <img src="shopit.png" className="navbar-logo-img" alt="ShopIt" />
                <div className="navbar-nav">
                    <div className="navbar-nav-container">
                        <div className="nav-link">
                            <NavLink to="/">Home</NavLink>
                        </div>
                        {!isAuthenticated && (
                            <div className="nav-link">
                                <li>
                                    <NavLink to="/login">Login</NavLink>
                                </li>
                            </div>
                        )}
                        {isAuthenticated && (
                            <div className="nav-link">
                                <NavLink to="/" onClick={logout}>
                                    <span>Logout</span>
                                </NavLink>
                            </div>
                        )}
                        {currentUser.role === "ADMIN" && (
                            <div className="nav-link">
                                <NavLink to="/admin">
                                    <span>Admin</span>
                                </NavLink>
                            </div>
                        )}
                        {currentUser.role === "MODERATOR" && (
                            <div className="nav-link">
                                <NavLink to="/moderator">
                                    <span>Moder</span>
                                </NavLink>
                            </div>
                        )}
                    </div>
                </div>
            </div>
        </nav>
    );
};

export default NavBar;
