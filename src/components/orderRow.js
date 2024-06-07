import React, { useState} from "react";
// import { useNavigate } from "react-router-dom";
import EditOrderForm from "./editOrderForm";
// import EditUserForm from "./editUserForm";
import axios from "axios";

const OrderRow = (props) => {
    const [showEditForm, setShowEditForm] = useState(false)
    const localCurrentRole = window.localStorage.getItem("Role")
    

    const editShowEditForm = () => {
        setShowEditForm(!showEditForm);
    }

    const DeleteOrder = () => {
        const dataFetch = async () => {
            // const result = await axios(`http://localhost:3000/employer/${props.employerID}`, { method: "DELETE" });
            const result = await axios(`http://localhost:3000/order/${props.orderId}`, { method: "DELETE" });
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
                <th scope="row">{props.orderId}</th>
                <td>{props.userOrderId}</td>
                <td>{props.orderDate}</td>
                <td>{props.receiver}</td>
                <td>{props.receiverPhone}</td>
                <td>{props.paymentMethod}</td>
                {/* <td>{props.delivery}</td> */}
                <td>
                    <button onClick={editShowEditForm} type="button" className="btn btn-warning" >Edit</button>
                </td>
                <td>
                    {localCurrentRole === "ADMIN" && (
                        <button type="button" className="btn btn-danger" onClick={DeleteOrder}>Delete</button>
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
                                <EditOrderForm {...props} />
                            </div>
                        </div>
                    </div>
                </div>
            )}
        </>

    );
};
export default OrderRow;