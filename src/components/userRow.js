import React, { useState} from "react";
// import { useNavigate } from "react-router-dom";
import EditUserForm from "./editUserForm";
import axios from "axios";

const UserRow = (props) => {
    const [showEditForm, setShowEditForm] = useState(false)

    const localCurrentRole = window.localStorage.getItem("Role")

    const editShowEditForm = () => {
        setShowEditForm(!showEditForm);
    }

    const DeleteUser = () => {
        const dataFetch = async () => {
            // const result = await axios(`http://localhost:3000/employer/${props.employerID}`, { method: "DELETE" });
            const result = await axios(`http://localhost:3000/user/${props.userId}`, { method: "DELETE" });
            // window.localStorage.clear();
            console.log(result)
        };
        try {
            dataFetch();
        } catch (exeption) {
            console.log("exeption:", exeption);
        }
    }

    return (
        <>
            <tr >
                <th scope="row">{props.userId}</th>
                <td>{props.userName}</td>
                <td>{props.userEmail}</td>
                <td>{props.userPhoneNumber}</td>
                <td>{props.userPassword}</td>
                <td>{props.userBonusAccount}</td>
                <td>{props.userInterfaceLanguage}</td>
                <td>{props.userNotification}</td>
                <td>{props.userRole}</td>
                <td>{props.userPhoto}</td>
                <td>
                    <button onClick={editShowEditForm} type="button" className="btn btn-warning" >Edit</button>
                </td>
                <td>
                    {localCurrentRole === "ADMIN" && (
                        <button type="button" className="btn btn-danger" onClick={DeleteUser}>Delete</button>
                    )}
                </td>

            </tr>

            {showEditForm && (
                <div className="modal show" style={{ display: 'block', backgroundColor: 'rgba(0, 0, 0, 0.5)' }}>
                    <div className="modal-dialog" role="document">
                        <div className="modal-content">
                            <div className="modal-header">
                                <h5 className="modal-title">Edit User</h5>
                                <button type="button" className="btn-close" onClick={editShowEditForm}></button>
                            </div>
                            <div className="modal-body">
                                <EditUserForm {...props} />
                            </div>
                        </div>
                    </div>
                </div>
            )}
        </>

    );
};
export default UserRow;