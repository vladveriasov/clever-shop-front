// import "../App.css";
// import React, { useState } from "react";
// import axios from "axios";

// const EditUserForm = (props) => {
//     console.log(props.userId)
//     const [userEmail, setUserEmail] = useState(`${props.userEmail}`);
//     const [userName, setUserName] = useState(`${props.userName}`);
//     const [userPassword, setUserPassword] = useState(`${props.userPassword}`);
//     const [userPhoneNumber, setUserPhoneNumber] = useState(`${props.userPhoneNumber}`);
//     const [userBonusAccount, setUserBonusAccount] = useState(`${props.userBonusAccount}`);
//     const [userInterfaceLanguage, setUserInterfaceLanguage] = useState(`${props.userInterfaceLanguage}`);
//     const [userNotification, setUserNotification] = useState(`${props.userNotification}`);
//     const [userRole, setUserRole] = useState(`${props.userRole}`);
//     const [userPhoto, setUserPhoto] = useState(`${props.userPhoto}`);


//     const editUser = () => {
//         console.log(
//             userEmail,
//             userName,
//             userPassword
//         );
//         const data = {
//             // vacanciesID: props.vacanciesID,
//             userEmail,
//             userName,
//             userPassword,
//             userPhoneNumber,
//             userBonusAccount,
//             userInterfaceLanguage,
//             userNotification,
//             userRole,
//             userPhoto
//         }
//         const dataFetch = async () => {
//             const result = await axios(`http://localhost:3000/user/${props.userEmail}`, { method: "PUT", data: data });
//         };
//         try {
//             dataFetch();
//             console.log(dataFetch())
//         } catch (exeption) {
//             console.log("exeption:", exeption);
//         }

//     };

//     return (
//         <div className="modal fade" id="exampleModal" tabIndex="-1" role="dialog" aria-labelledby="exampleModalLabel" aria-hidden="true">
//             <div className="modal-dialog" role="document">
//                 <div className="modal-content">
//                     <div className="modal-header">
//                         <h5 className="modal-title" id="exampleModalLabel">Edit User</h5>
//                         <button type="button" className="close" data-dismiss="modal" aria-label="Close">
//                             <span aria-hidden="true">&times;</span>
//                         </button>
//                     </div>
//                     <div className="modal-body">
//                         <div className="form">
//                             <div className="form-body">
//                                 <div className="userEmail">
//                                     <label className="form__label" htmlFor="userEmail">
//                                         userEmail{" "}
//                                     </label>
//                                     <input
//                                         className="form__input"
//                                         type="text"
//                                         value={userEmail}
//                                         onChange={(e) => setUserEmail(e.target.value)}
//                                         id="userEmail"
//                                         placeholder="email"
//                                     />
//                                 </div>
//                                 <div className="userName">
//                                     <label className="form__label" htmlFor="userName">
//                                         User name{" "}
//                                     </label>
//                                     <input
//                                         className="form__input"
//                                         type="text"
//                                         value={userName}
//                                         onChange={(e) => setUserName(e.target.value)}
//                                         id="userName"
//                                         placeholder="user Name"
//                                     />
//                                 </div>
//                                 <div className="userPassword">
//                                     <label className="form__label" htmlFor="userPassword">
//                                         userPassword{" "}
//                                     </label>
//                                     <input
//                                         className="form__input"
//                                         type="text"
//                                         value={userPassword}
//                                         onChange={(e) => setUserPassword(e.target.value)}
//                                         id="userPassword"
//                                         placeholder=" userPassword"
//                                     />
//                                 </div>
//                                 <div className="userPhoneNumber">
//                                     <label className="form__label" htmlFor="userPhoneNumber">
//                                         User phone number{" "}
//                                     </label>
//                                     <input
//                                         className="form__input"
//                                         type="text"
//                                         value={userPhoneNumber}
//                                         onChange={(e) => setUserPhoneNumber(e.target.value)}
//                                         id="userPhoneNumber"
//                                         placeholder="userPhoneNumber"
//                                     />
//                                 </div>
//                                 <div className="userBonusAccount">
//                                     <label className="form__label" htmlFor="userBonusAccount">
//                                         userBonusAccount{" "}
//                                     </label>
//                                     <input
//                                         className="form__input"
//                                         type="text"
//                                         value={userBonusAccount}
//                                         onChange={(e) => setUserBonusAccount(e.target.value)}
//                                         id="userBonusAccount"
//                                         placeholder="userBonusAccount"
//                                     />
//                                 </div>
//                                 <div className="userInterfaceLanguage">
//                                     <label className="form__label" htmlFor="userInterfaceLanguage">
//                                         userInterfaceLanguage{" "}
//                                     </label>
//                                     <input
//                                         className="form__input"
//                                         type="boolean"
//                                         value={userInterfaceLanguage}
//                                         onChange={(e) => setUserInterfaceLanguage(e.target.value)}
//                                         id="userInterfaceLanguage"
//                                         placeholder="userInterfaceLanguage"
//                                     />
//                                 </div>

//                                 <div className="userNotification">
//                                     <label className="form__label" htmlFor="userNotification">
//                                         userNotification{" "}
//                                     </label>
//                                     <input
//                                         className="form__input"
//                                         type="boolean"
//                                         value={userNotification}
//                                         onChange={(e) => setUserNotification(e.target.value)}
//                                         id="userNotification"
//                                         placeholder="userNotification"
//                                     />
//                                 </div>
//                                 <div className="userRole">
//                                     <label className="form__label" htmlFor="userRole">
//                                         userRole{" "}
//                                     </label>
//                                     <input
//                                         className="form__input"
//                                         type="text"
//                                         value={userRole}
//                                         onChange={(e) => setUserRole(e.target.value)}
//                                         id="userRole"
//                                         placeholder="userRole"
//                                     />
//                                 </div>
//                                 <div className="userPhoto">
//                                     <label className="form__label" htmlFor="userPhoto">
//                                         userPhoto{" "}
//                                     </label>
//                                     <input
//                                         className="form__input"
//                                         type="userPhoto"
//                                         value={userPhoto}
//                                         onChange={(e) => setUserPhoto(e.target.value)}
//                                         id="userPhoto"
//                                         placeholder="userPhoto"
//                                     />
//                                 </div>

//                                 <div className="footer">
//                                     <button type="button" className="btn btn-secondary" data-dismiss="modal">Close</button>
//                                     <button
//                                         onClick={() => editUser()}
//                                         type="submit"
//                                         className="btn btn-primary"
//                                     >
//                                         Update User
//                                     </button>
//                                 </div>
//                             </div>
//                         </div>
//                     </div>
//                 </div>
//             </div>
//         </div>
//     );
// };

// export default EditUserForm;


import "../App.css";
import React, { useState } from "react";
import axios from "axios";

const EditUserForm = (props) => {
    // const [userEmail, setUserEmail] = useState(props.userEmail);
    // const [userName, setUserName] = useState(props.userName);
    // const [userPassword, setUserPassword] = useState(props.userPassword);
    // const [userPhoneNumber, setUserPhoneNumber] = useState(props.userPhoneNumber);
    // const [userBonusAccount, setUserBonusAccount] = useState(props.userBonusAccount);
    // const [userInterfaceLanguage, setUserInterfaceLanguage] = useState((Boolean(props.userInterfaceLanguage)));
    // const [userNotification, setUserNotification] = useState((Boolean(props.userNotification)));
    // const [userRole, setUserRole] = useState(props.userRole);
    // const [userPhoto, setUserPhoto] = useState(props.userPhoto);
    console.log(props.userId)
    const [userEmail, setUserEmail] = useState(`${props.userEmail}`);
    const [userName, setUserName] = useState(`${props.userName}`);
    const [userPassword, setUserPassword] = useState(`${props.userPassword}`);
    const [userPhoneNumber, setUserPhoneNumber] = useState(`${props.userPhoneNumber}`);
    const [userBonusAccount, setUserBonusAccount] = useState(`${props.userBonusAccount}`);
    const [userInterfaceLanguage, setUserInterfaceLanguage] = useState(`${props.userInterfaceLanguage}`);
    const [userNotification, setUserNotification] = useState(`${props.userNotification}`);
    const [userRole, setUserRole] = useState(`${props.userRole}`);
    const [userPhoto, setUserPhoto] = useState(`${props.userPhoto}`);

    const editUser = () => {
        const data = {
            userEmail,
            userName,
            userPassword,
            userPhoneNumber,
            userBonusAccount,
            userInterfaceLanguage: Boolean(userInterfaceLanguage),
            userNotification: Boolean(userNotification),
            userRole,
            userPhoto
        };
        const dataFetch = async () => {
            const result = await axios(`http://localhost:3000/user/${props.userEmail}`, { method: "PUT", data: data });
            //await axios.put(`http://localhost:3000/user/${props.userEmail}`, data);
        };
        try {
            dataFetch();
        } catch (exception) {
            console.log("exception:", exception);
        }
    };

    return (
        <div className="form">
            <div className="form-body">
                <div className="editForm-container">
                    <label className="form__label" htmlFor="userEmail">
                        Email
                    </label>
                    <input
                        className="form__input"
                        type="text"
                        value={userEmail}
                        onChange={(e) => setUserEmail(e.target.value)}
                        id="userEmail"
                        placeholder="Email"
                    />
                </div>
                <div className="editForm-container">
                    <label className="form__label" htmlFor="userName">
                        Name
                    </label>
                    <input
                        className="form__input"
                        type="text"
                        value={userName}
                        onChange={(e) => setUserName(e.target.value)}
                        id="userName"
                        placeholder="Name"
                    />
                </div>
                <div className="editForm-container">
                    <label className="form__label" htmlFor="userPassword">
                        Password
                    </label>
                    <input
                        className="form__input"
                        type="text"
                        value={userPassword}
                        onChange={(e) => setUserPassword(e.target.value)}
                        id="userPassword"
                        placeholder="Password"
                    />
                </div>
                <div className="editForm-container">
                    <label className="form__label" htmlFor="userPhoneNumber">
                        Phone Number
                    </label>
                    <input
                        className="form__input"
                        type="text"
                        value={userPhoneNumber}
                        onChange={(e) => setUserPhoneNumber(e.target.value)}
                        id="userPhoneNumber"
                        placeholder="Phone Number"
                    />
                </div>
                <div className="editForm-container">
                    <label className="form__label" htmlFor="userBonusAccount">
                        Bonus Account
                    </label>
                    <input
                        className="form__input"
                        type="text"
                        value={userBonusAccount}
                        onChange={(e) => setUserBonusAccount(e.target.value)}
                        id="userBonusAccount"
                        placeholder="Bonus Account"
                    />
                </div>
                <div className="editForm-container">
                    <label className="form__label" htmlFor="userInterfaceLanguage">
                        Interface Language
                    </label>
                    <input
                        className="form__input"
                        type="text"
                        checked={userInterfaceLanguage}
                        onChange={(e) => setUserInterfaceLanguage((Boolean(e.target.checked)))}
                        id="userInterfaceLanguage"
                        placeholder="true"
                    />
                </div>
                <div className="editForm-container">
                    <label className="form__label" htmlFor="userNotification">
                        Notification
                    </label>
                    <input
                        className="form__input"
                        type="text"
                        value={userNotification}
                        onChange={(e) => setUserNotification((Boolean(e.target.checked)))}
                        id="userNotification"
                        placeholder="true"
                    />
                </div>
                <div className="editForm-container">
                    <label className="form__label" htmlFor="userRole">
                        Role
                    </label>
                    <input
                        className="form__input"
                        type="text"
                        value={userRole}
                        onChange={(e) => setUserRole(e.target.value)}
                        id="userRole"
                        placeholder="Role"
                    />
                </div>
                <div className="editForm-container">
                    <label className="form__label" htmlFor="userPhoto">
                        Photo
                    </label>
                    <input
                        className="form__input"
                        type="text"
                        value={userPhoto}
                        onChange={(e) => setUserPhoto(e.target.value)}
                        id="userPhoto"
                        placeholder="Photo"
                    />
                </div>
                <div className="footer">
                    {/* <button type="button" className="btn btn-secondary" onClick={props.onClose}>Close</button> */}
                    <button onClick={editUser} type="submit" className="btn btn-primary">
                        Update User
                    </button>
                </div>
            </div>
        </div>
    );
};

export default EditUserForm;
