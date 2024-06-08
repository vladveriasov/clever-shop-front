import React, { useState } from "react";
import axios from "axios";

const AddUserForm = ({ onClose }) => {
    const [userEmail, setUserEmail] = useState("");
    const [userName, setUserName] = useState("");
    const [userPassword, setUserPassword] = useState("");
    const [userPhoneNumber, setUserPhoneNumber] = useState("");
    const [userBonusAccount, setUserBonusAccount] = useState("");
    const [userInterfaceLanguage, setUserInterfaceLanguage] = useState(false);
    const [userNotification, setUserNotification] = useState(false);
    const [userRole, setUserRole] = useState("");
    const [userPhoto, setUserPhoto] = useState("");

    const addUser = () => {
        const data = {
            userEmail,
            userName,
            userPassword,
            userPhoneNumber,
            userBonusAccount,
            userInterfaceLanguage,
            userNotification,
            userRole,
            userPhoto
        };
        const dataFetch = async () => {
            await axios.post("https://musefrill-ailon4.stormkit.dev/user", data);
        };
        try {
            if(data.userEmail === ""){
                onClose();
                // console.log("no data")
            }
            else{
                dataFetch();
                console.log(data);
                onClose();
            }
        } catch (exception) {
            console.log("exception:", exception);
        }
        // onClose();
    };

    return (
        <div className="form">
            <div className="form-body">
                <div className="editForm-container">
                    <label className="form__label" htmlFor="userEmail">Email</label>
                    <input className="form__input" type="text" value={userEmail} onChange={(e) => setUserEmail(e.target.value)} id="userEmail" placeholder="Email" />
                </div>
                <div className="editForm-container">
                    <label className="form__label" htmlFor="userName">Name</label>
                    <input className="form__input" type="text" value={userName} onChange={(e) => setUserName(e.target.value)} id="userName" placeholder="Name" />
                </div>
                <div className="editForm-container">
                    <label className="form__label" htmlFor="userPassword">Password</label>
                    <input className="form__input" type="text" value={userPassword} onChange={(e) => setUserPassword(e.target.value)} id="userPassword" placeholder="Password" />
                </div>
                <div className="editForm-container">
                    <label className="form__label" htmlFor="userPhoneNumber">Phone Number</label>
                    <input className="form__input" type="text" value={userPhoneNumber} onChange={(e) => setUserPhoneNumber(e.target.value)} id="userPhoneNumber" placeholder="Phone Number" />
                </div>
                <div className="editForm-container">
                    <label className="form__label" htmlFor="userBonusAccount">Bonus Account</label>
                    <input className="form__input" type="text" value={userBonusAccount} onChange={(e) => setUserBonusAccount(e.target.value)} id="userBonusAccount" placeholder="Bonus Account" />
                </div>
                <div className="editForm-container">
                    <label className="form__label" htmlFor="userInterfaceLanguage">userInterfaceLanguage</label>
                    <input className="form__input" type="checkbox" checked={userInterfaceLanguage} onChange={(e) => setUserInterfaceLanguage(e.target.checked)} id="userInterfaceLanguage" />
                </div>
                <div className="editForm-container">
                    <label className="form__label" htmlFor="userNotification">Notification</label>
                    <input className="form__input" type="checkbox" checked={userNotification} onChange={(e) => setUserNotification(e.target.checked)} id="userNotification" />
                </div>
                <div className="editForm-container">
                    <label className="form__label" htmlFor="userRole">Role</label>
                    <input className="form__input" type="text" value={userRole} onChange={(e) => setUserRole(e.target.value)} id="userRole" placeholder="Role" />
                </div>
                <div className="editForm-container">
                    <label className="form__label" htmlFor="userPhoto">Photo</label>
                    <input className="form__input" type="text" value={userPhoto} onChange={(e) => setUserPhoto(e.target.value)} id="userPhoto" placeholder="Photo" />
                </div>
                <div className="footer">
                    <button type="button" className="btn btn-secondary" onClick={onClose}>Close</button>
                    <button onClick={addUser} type="submit" className="btn btn-primary">Add User</button>
                </div>
            </div>
        </div>
    );
};

export default AddUserForm;
