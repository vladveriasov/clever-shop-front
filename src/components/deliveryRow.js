import React, { useState } from "react";
import axios from "axios";
import EditDeliveryForm from "./editDeliveryForm";

const DeliveryRow = (props) => {
    const [showEditForm, setShowEditForm] = useState(false);

    const toggleEditForm = () => {
        setShowEditForm(!showEditForm);
    };

    const deleteDelivery = async () => {
        try {
            await axios.delete(`https://gainful-judicious-uncle.glitch.me/delivery/${props.deliveryId}`);
            // Refresh or update the parent component state
        } catch (exception) {
            console.log("exception:", exception);
        }
    };

    return (
        <>
            <tr>
                <th scope="row">{props.deliveryId}</th>
                <td>{props.deliveryMethod}</td>
                <td>{props.deliveryAddress}</td>
                {/* <td>{props.deliveryCity}</td> */}
                <td>{props.deliveryPrice}</td>
                <td>{props.deliveryOrderId}</td>
                <td>
                    <button onClick={toggleEditForm} type="button" className="btn btn-warning">Edit</button>
                </td>
                <td>
                    <button type="button" className="btn btn-danger" onClick={deleteDelivery}>Delete</button>
                </td>
            </tr>

            {showEditForm && (
                <div className="modal show" style={{ display: 'block', backgroundColor: 'rgba(0, 0, 0, 0.5)' }}>
                    <div className="modal-dialog" role="document">
                        <div className="modal-content">
                            <div className="modal-header">
                                <h5 className="modal-title">Edit Delivery</h5>
                                <button type="button" className="btn-close" onClick={toggleEditForm}></button>
                            </div>
                            <div className="modal-body">
                                <EditDeliveryForm
                                    deliveryId={props.deliveryId}
                                    deliveryMethod={props.deliveryMethod}
                                    deliveryAddress={props.deliveryAddress}
                                    // deliveryCity={props.deliveryCity}
                                    deliveryPrice={props.deliveryPrice}
                                    deliveryOrderId={props.deliveryOrderId}
                                    onClose={toggleEditForm}
                                />
                            </div>
                        </div>
                    </div>
                </div>
            )}
        </>
    );
};

export default DeliveryRow;
