import React, { useState } from "react";
import axios from "axios";

const AddOrderForm = ({ onClose, onAdd }) => {
    const [userOrderId, setUserOrderId] = useState("");
    const [receiver, setReceiver] = useState("");
    const [receiverPhone, setReceiverPhone] = useState("");
    const [paymentMethod, setPaymentMethod] = useState("");

    const addOrder = () => {
        const data = {
            userOrderId,
            receiver,
            receiverPhone,
            paymentMethod
        };
        const dataFetch = async () => {
            await axios.post("http://localhost:3000/order", data);
        };
        try {
            if (data.userOrderId === "" || data.receiver === "" || data.receiverPhone === "") {
                console.log("Please fill in all required fields");
            } else {
                dataFetch();
                onAdd(); // Refresh data after adding
                console.log(data);
                onClose();
            }
        } catch (exception) {
            console.log("exception:", exception);
        }
    };

    return (
        <div className="form">
            <div className="form-body">
            <div className="editForm-container">
                    <label className="form__label" htmlFor="userOrderId">User ID</label>
                    <input
                        className="form__input"
                        type="text"
                        value={userOrderId}
                        onChange={(e) => setUserOrderId(e.target.value)}
                        id="userOrderId"
                        placeholder="User ID"
                    />
                </div>
                <div className="editForm-container">
                    <label className="form__label" htmlFor="receiver">Receiver</label>
                    <input
                        className="form__input"
                        type="text"
                        value={receiver}
                        onChange={(e) => setReceiver(e.target.value)}
                        id="receiver"
                        placeholder="Receiver"
                    />
                </div>
                <div className="editForm-container">
                    <label className="form__label" htmlFor="receiverPhone">Receiver Phone</label>
                    <input
                        className="form__input"
                        type="text"
                        value={receiverPhone}
                        onChange={(e) => setReceiverPhone(e.target.value)}
                        id="receiverPhone"
                        placeholder="Receiver Phone"
                    />
                </div>
                <div className="editForm-container">
                    <label className="form__label" htmlFor="paymentMethod">Payment Method</label>
                    <input
                        className="form__input"
                        type="text"
                        value={paymentMethod}
                        onChange={(e) => setPaymentMethod(e.target.value)}
                        id="paymentMethod"
                        placeholder="paymentMethod"
                    />
                    {/* <select
                        className="form__input"
                        value={paymentMethod}
                        onChange={(e) => setPaymentMethod(e.target.value)}
                        id="paymentMethod"
                    >
                        <option value="UPON_RECEIPT">Upon Receipt</option>
                        <option value="ONLINE">Online</option>
                        <option value="CASH_ON_DELIVERY">Cash on Delivery</option>
                    </select> */}
                </div>
                <div className="footer">
                    <button type="button" className="btn btn-secondary" onClick={onClose}>Close</button>
                    <button onClick={addOrder} type="submit" className="btn btn-primary">Add Order</button>
                </div>
            </div>
        </div>
    );
};

export default AddOrderForm;



