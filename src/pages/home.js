import "../App.css";
import React, { setState, useState, useEffect } from "react";
// import BarChart from "../components/barCart";
import axios from "axios";
import LoginForm from "../components/loginForm";


const Home = () => {

    const localCurrentUserId = window.localStorage.getItem("userId")
    const localCurrentRole = window.localStorage.getItem("role")

    //   useEffect(() => {
    //     const dataFetch = async () => {
    //       const result = await axios("http://localhost:3000/resume");
    //       setCardsResumes(result.data);
    //     };
    //     try {
    //       dataFetch();
    //     } catch (exeption) {
    //       // console.log("exeption:", exeption);
    //     }
    //     // dataFetch();
    //   }, []);




    return (
        <div className="Home">
                <div className="App-container">
                    <div className="Login">
                        {/* Увійдіть в аккаунт */}
                        {/* <LoginForm /> */}
                    </div>
                    <div className="App-container-img">
                        <img className="App-container-image" src='shopit.png'></img>
                    </div>
                    <div className="App-container-slogan">
                        <p className="App-container-slogan-text"> This is the best shop app ever made!</p>
                    </div>
                    <div className="app-container-button">
                        <button className="btn btn-dark" type="button">Download App</button>
                    </div>
                </div>
            </div>
    )
};

export default Home;
