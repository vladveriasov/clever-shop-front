import "../App.css";
// import React, { setState, useState, useEffect } from "react";
// import BarChart from "../components/barCart";
import axios from "axios";
// import LoginForm from "../components/loginForm";


const Home = () => {

    // const localCurrentUserId = window.localStorage.getItem("userId")
    // const localCurrentRole = window.localStorage.getItem("role")

    const handleDownload = async () => {
        try {
            const response = await axios.get('https://musefrill-ailon4.stormkit.dev/download/streamable', {
                responseType: 'blob',
            });

            const url = window.URL.createObjectURL(new Blob([response.data]));
            const link = document.createElement('a');
            link.href = url;
            link.setAttribute('download', 'app.zip'); // Название файла для скачивания
            document.body.appendChild(link);
            link.click();
            link.remove();
        } catch (exception) {
            console.error("Exception downloading file:", exception);
        }
    };

    return (
        <div className="Home">
            <div className="App-container">
                <div className="Login">
                    {/* Увійдіть в аккаунт */}
                    {/* <LoginForm /> */}
                </div>
                <div className="App-container-img">
                    <img className="App-container-image" src="shopit.png" alt="ShopIT Logo"></img>
                </div>
                <div className="App-container-slogan">
                    <p className="App-container-slogan-text"> This is the best shop app ever made!</p>
                </div>
                <div className="app-container-button">
                    <button className="btn btn-dark" type="button" onClick={handleDownload}>Download App</button>
                </div>
            </div>
        </div>
    )
};

export default Home;
