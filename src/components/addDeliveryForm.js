import React, { useState } from "react";
import axios from "axios";

const AddDeliveryForm = ({ onClose }) => {
    const [deliveryMethod, setDeliveryMethod] = useState("");
    const [deliveryAddress, setDeliveryAddress] = useState("");
    // const [deliveryCity, setDeliveryCity] = useState("");
    const [deliveryPrice, setDeliveryPrice] = useState("");
    const [deliveryOrderId, setDeliveryOrderId] = useState("");

    const addDelivery = () => {
        const data = {
            deliveryMethod,
            deliveryAddress,
            // deliveryCity,
            deliveryPrice,
            deliveryOrderId
        };
        const dataFetch = async () => {
            await axios.post("https://gainful-judicious-uncle.glitch.me/delivery", data);
            // await axios.post("https://gainful-judicious-uncle.glitch.me/product", data);
        };
        try {
            if (data.deliveryOrderId === "") {
                onClose();
            } else {
                dataFetch();
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
                {/* <div className="editForm-container">
                    <label className="form__label" htmlFor="deliveryMethod">Delivery Method</label>
                    <select className="form__input" value={deliveryMethod} onChange={(e) => setDeliveryMethod(e.target.value)} id="deliveryMethod">
                        <option onChange = { (e) => setDeliveryMethod("STORE")}  >Store</option>
                        <option onChange = { (e) => setDeliveryMethod("HOME_DELIVERY")}  >Home</option>
                        <option  onChange = { (e) => setDeliveryMethod("DELIVERY_POINT")} >Point</option>
                    </select>
                </div> */}
                <div className="editForm-container">
                    <label className="form__label" htmlFor="deliveryMethod">Delivery Method</label>
                    <input className="form__input" type="text" value={deliveryMethod} onChange={(e) => setDeliveryMethod(e.target.value)} id="deliveryMethod" placeholder="Delivery Address" />
                </div>
                <div className="editForm-container">
                    <label className="form__label" htmlFor="deliveryAddress">Delivery Address</label>
                    <input className="form__input" type="text" value={deliveryAddress} onChange={(e) => setDeliveryAddress(e.target.value)} id="deliveryAddress" placeholder="Delivery Address" />
                </div>
                {/* <div className="editForm-container">
                    <label className="form__label" htmlFor="deliveryCity">Delivery City</label>
                    <input className="form__input" type="text" value={deliveryCity} onChange={(e) => setDeliveryCity(e.target.value)} id="deliveryCity" placeholder="Delivery City" />
                </div> */}
                <div className="editForm-container">
                    <label className="form__label" htmlFor="deliveryPrice">Delivery Price</label>
                    <input className="form__input" type="text" value={deliveryPrice} onChange={(e) => setDeliveryPrice(e.target.value)} id="deliveryPrice" placeholder="Delivery Price" />
                </div>
                <div className="editForm-container">
                    <label className="form__label" htmlFor="deliveryOrderId">Order ID</label>
                    <input className="form__input" type="text" value={deliveryOrderId} onChange={(e) => setDeliveryOrderId(e.target.value)} id="deliveryOrderId" placeholder="Order ID" />
                </div>
                <div className="footer">
                    <button type="button" className="btn btn-secondary" onClick={onClose}>Close</button>
                    <button onClick={addDelivery} type="submit" className="btn btn-primary">Add Delivery</button>
                </div>
            </div>
        </div>
    );
};

export default AddDeliveryForm;
