import "../App.css";
import React, { useState } from "react";
import axios from "axios";

const EditOrderForm = (props) => {
    const [userOrderId, setUserOrderId] = useState(props.userOrderId);
    // const [orderDate, setOrderDate] = useState(props.orderDate);
    const [receiver, setReceiver] = useState(props.receiver);
    const [receiverPhone, setReceiverPhone] = useState(props.receiverPhone);
    const [paymentMethod, setPaymentMethod] = useState(props.paymentMethod);
    // const [delivery, setDelivery] = useState(props.delivery);

    const editOrder = () => {
        const data = {
            userOrderId,
            // orderDate,
            receiver,
            receiverPhone,
            paymentMethod,
            // delivery
        };
        const dataFetch = async () => {
            await axios.put(`http://localhost:3000/order/${props.orderId}`, data);
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
                    <label className="form__label" htmlFor="userOrderId">
                        User Order ID
                    </label>
                    <input
                        className="form__input"
                        type="text"
                        value={userOrderId}
                        onChange={(e) => setUserOrderId(e.target.value)}
                        id="userOrderId"
                        placeholder="User Order ID"
                    />
                </div>
                {/* <div className="editForm-container">
                    <label className="form__label" htmlFor="orderDate">
                        Order Date
                    </label>
                    <input
                        className="form__input"
                        type="date"
                        value={orderDate}
                        onChange={(e) => setOrderDate(e.target.value)}
                        id="orderDate"
                        placeholder="Order Date"
                    />
                </div> */}
                <div className="editForm-container">
                    <label className="form__label" htmlFor="receiver">
                        Receiver
                    </label>
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
                    <label className="form__label" htmlFor="receiverPhone">
                        Receiver Phone
                    </label>
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
                    <label className="form__label" htmlFor="paymentMethod">
                        Payment Method
                    </label>
                    <input
                        className="form__input"
                        type="text"
                        value={paymentMethod}
                        onChange={(e) => setPaymentMethod(e.target.value)}
                        id="paymentMethod"
                        placeholder="Payment Method"
                    />
                </div>
                {/* <div className="editForm-container">
                    <label className="form__label" htmlFor="delivery">
                        Delivery
                    </label>
                    <input
                        className="form__input"
                        type="text"
                        value={delivery}
                        onChange={(e) => setDelivery(e.target.value)}
                        id="delivery"
                        placeholder="Delivery"
                    />
                </div> */}
                <div className="footer">
                    <button type="button" className="btn btn-secondary" onClick={props.onClose}>Close</button>
                    <button onClick={editOrder} type="submit" className="btn btn-primary">
                        Update Order
                    </button>
                </div>
            </div>
        </div>
    );
};

export default EditOrderForm;
