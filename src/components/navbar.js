import { NavLink } from "react-router-dom";
import React, { useState, useEffect, useContext } from "react";

// import LoginContext from './../App'

const NavBar = () => {

    const [isAuthenticated, setIsAuthenticated] = useState(false);
    const [showLoginForm, setShowLoginForm] = useState(false)

    const [localCurrentId, setCurrentId] = useState("")
    const [localCurrentRole, setLocalCurrentRole] = useState("")
    const [localCurrentEmail, setCurrentEmail] = useState("")

    const updateNavBar = () => {
        const localCurrentId = window.localStorage.getItem("Id");
        const localCurrentEmail = window.localStorage.getItem("Email");
        const localCurrentRole = window.localStorage.getItem("Role");

        setCurrentId(localCurrentId);
        setCurrentEmail(localCurrentEmail);
        setLocalCurrentRole(localCurrentRole);
        setIsAuthenticated(Boolean(localCurrentId));

        console.log(isAuthenticated)
    };

    useEffect(() => {
        // Вызываем функцию обновления при монтировании компонента
        updateNavBar();

        // Здесь можно следить за изменениями других переменных, которые могут повлиять на навигационную панель
    }, []);

    const LogOut = () => {
        window.localStorage.clear();
        updateNavBar();
        setIsAuthenticated(false);
    }

    const Authenticated = () => {
        updateNavBar();
        // setIsAuthenticated(true);
    }
    return (
        // <nav className="bg-secondary navbar-dark navbar">
        //     <div className="navbar-logo">
        //         <img src="shopit.png" className="navbar-logo-img"></img>
        //     </div>
        // <ul className="row col-12 d-flex justify-content-md-around">
        //     <li>
        //         <NavLink to="/">Головна</NavLink>
        //     </li>
        //     {!localCurrentRole && (
        //         <div>
        //             <li>
        //                 <NavLink to="/login" >Увійти</NavLink>
        //             </li>
        //         </div>
        //     )}
        //     {/* {(localCurrentRole || isAuthenticated) && (
        //         <div>
        //             <NavLink to="/profile">
        //                 <span>{localCurrentEmail}</span>/<span>{localCurrentRole}</span>
        //             </NavLink>
        //         </div>
        //     )} */}
        //     {(localCurrentRole || isAuthenticated) && (
        //         <div>
        //             <NavLink to="/" onClick={LogOut}>
        //                 <span>Вийти</span>
        //             </NavLink>
        //         </div>
        //     )}
        // </ul>
        // </nav>

        // <nav className="navbar navbar-expand-lg bg-body-tertiary" >
        <nav className="navbar" >
            <div className="container-fluid">
                <img src="shopit.png" className="navbar-logo-img"></img>
                {/* <a className="navbar-brand" href="#">Navbar</a> */}
                {/* <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarNavAltMarkup" aria-controls="navbarNavAltMarkup" aria-expanded="false" aria-label="Toggle navigation">
                    <span className="navbar-toggler-icon"></span>
                </button> */}
                {/* <div className="collapse navbar-collapse" id="navbar-nav"> */}
                <div className="navbar-nav">
                    <div className="navbar-nav-container">
                        <div className="nav-link">
                            <NavLink to="/">Home</NavLink>
                        </div>
                        {!localCurrentRole && (
                            <div className="nav-link">
                                <li>
                                    <NavLink to="/login" >Login</NavLink>
                                </li>
                            </div>
                        )}
                        {(localCurrentRole) && (
                            <div className="nav-link">
                                <NavLink to="/" onClick={LogOut}>
                                    <span>Вийти</span>
                                </NavLink>
                            </div>
                        )}
                    </div>

                    {/* </div> */}
                </div>
            </div>
        </nav>

        // <nav className="navbar" id="navbar">
        //     <form className="container-fluid justify-content-start">
        //         <div className="navbar-logo">
        //             <img src="shopit.png" className="navbar-logo-img"></img>
        //         </div>
        //         <div className="navbar-container">
        //             {/* <button onClick={ShowLoginForm} type="button" id="card-body-edit-form-button" className="btn btn-warning" data-toggle="modal" data-target="#exampleModal" data-whatever="@mdo">Login</button>
        //             <button type="button" className="btn btn-primary" data-bs-toggle="modal" data-bs-target="#exampleModal">
        //                 Launch demo modal
        //             </button> */}
        //             <ul className="row col-12 d-flex justify-content-md-around">
        //                 <li>
        //                     <NavLink to="/">Головна</NavLink>
        //                 </li>
        //                 {!localCurrentRole && (
        //                     <div>
        //                         <li>
        //                             {/* <button onClick={ShowLoginForm} type="button" id="card-body-edit-form-button" className="btn btn-warning" data-toggle="modal" data-target="#exampleModal" data-whatever="@mdo">Login</button> */}
        //                             <NavLink to="/login" >Увійти</NavLink>
        //                         </li>
        //                     </div>
        //                 )}
        //                 {(localCurrentRole || isAuthenticated) && (
        //                     <div>
        //                         <NavLink to="/" onClick={LogOut}>
        //                             <span>Вийти</span>
        //                         </NavLink>
        //                     </div>
        //                 )}
        //             </ul>
        //         </div>
        //     </form>
        // </nav>

    );
};

export default NavBar;
