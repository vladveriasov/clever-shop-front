// import React, { useState, useEffect } from "react";
// import axios from "axios";

// const EditDeliveryForm = (props) => {
//     const [deliveryMethod, setDeliveryMethod] = useState(props.deliveryMethod);
//     const [deliveryAddress, setDeliveryAddress] = useState(props.deliveryAddress);
//     const [deliveryCity, setDeliveryCity] = useState(props.deliveryCity);
//     const [deliveryPrice, setDeliveryPrice] = useState(props.deliveryPrice);
//     const [deliveryOrderId, setDeliveryOrderId] = useState(props.deliveryOrderId);

//     const handleSubmit = async (event) => {
//         event.preventDefault();

//         const updatedDelivery = {
//             deliveryMethod,
//             deliveryAddress,
//             deliveryCity,
//             deliveryPrice,
//             deliveryOrderId
//         };

//         try {
//             const result = await axios.get(`http://localhost:3000/delivery/${props.deliveryId}`, updatedDelivery);
//             // Handle successful update (e.g., close the modal, refresh the data)
//         } catch (exception) {
//             console.log("exception:", exception);
//         }
//     };

//     return (
//         <form onSubmit={handleSubmit}>
//             <div className="form">
//                 <div className="form-body">
//                     <div className="editForm-container">
//                         <label className="form__label" htmlFor="deliveryMethod">Delivery Method</label>
//                         <select className="form__input" value={deliveryMethod} onChange={(e) => setDeliveryMethod(e.target.value)} id="deliveryMethod">
//                             <option value="STORE">Store</option>
//                             <option value="HOME">Home</option>
//                             <option value="PICKUP">Pickup</option>
//                         </select>
//                     </div>
//                     <div className="editForm-container">
//                         <label className="form__label" htmlFor="deliveryAddress">Delivery Address</label>
//                         <input className="form__input" type="text" value={deliveryAddress} onChange={(e) => setDeliveryAddress(e.target.value)} id="deliveryAddress" placeholder="Delivery Address" />
//                     </div>
//                     <div className="editForm-container">
//                         <label className="form__label" htmlFor="deliveryCity">Delivery City</label>
//                         <input className="form__input" type="text" value={deliveryCity} onChange={(e) => setDeliveryCity(e.target.value)} id="deliveryCity" placeholder="Delivery City" />
//                     </div>
//                     <div className="editForm-container">
//                         <label className="form__label" htmlFor="deliveryPrice">Delivery Price</label>
//                         <input className="form__input" type="text" value={deliveryPrice} onChange={(e) => setDeliveryPrice(e.target.value)} id="deliveryPrice" placeholder="Delivery Price" />
//                     </div>
//                     <div className="editForm-container">
//                         <label className="form__label" htmlFor="deliveryOrderId">Order ID</label>
//                         <input className="form__input" type="text" value={deliveryOrderId} onChange={(e) => setDeliveryOrderId(e.target.value)} id="deliveryOrderId" placeholder="Order ID" />
//                     </div>
//                     <div className="footer">
//                         {/* <button type="button" className="btn btn-secondary" onClick={onClick={props.onClose}}>Close</button> */}
//                         <button type="submit" className="btn btn-primary">Save Changes</button>
//                     </div>
//                 </div>
//             </div>
//         </form>
//     );
// };

// export default EditDeliveryForm;



import React, { useState } from "react";
import axios from "axios";

const EditDeliveryForm = (props) => {
    const [deliveryMethod, setDeliveryMethod] = useState(props.deliveryMethod);
    const [deliveryAddress, setDeliveryAddress] = useState(props.deliveryAddress);
    // const [deliveryCity, setDeliveryCity] = useState(props.deliveryCity);
    const [deliveryPrice, setDeliveryPrice] = useState(props.deliveryPrice);
    const [deliveryOrderId, setDeliveryOrderId] = useState(props.deliveryOrderId);

    const handleSubmit = async (event) => {
        event.preventDefault();

        const updatedDelivery = {
            deliveryMethod,
            deliveryAddress,
            // deliveryCity,
            deliveryPrice,
            deliveryOrderId
        };

        try {
            await axios.put(`http://localhost:3000/delivery/${props.deliveryId}`, updatedDelivery);
            // Handle successful update (e.g., close the modal, refresh the data)
        } catch (exception) {
            console.log("exception:", exception);
        }
    };

    return (
        <form onSubmit={handleSubmit}>
            {/* <div className="mb-3">
                <label className="form-label">Delivery Method</label>
                <select className="form-select" value={deliveryMethod} onChange={(e) => setDeliveryMethod(e.target.value)}>
                    <option value={deliveryMethod} onChange = { (e) => setDeliveryMethod("STORE")} >STORE</option>
                    <option  value={deliveryMethod} onChange = { (e) => setDeliveryMethod("HOME_DELIVERY")} >HOME</option>
                    <option value={deliveryMethod} onChange = { (e) => setDeliveryMethod("DELIVERY_POINT")} >DELIVERY_POINT</option>
                </select>
            </div> */}
            <div className="mb-3">
                <label className="form-label">Delivery Method</label>
                <input
                    type="text"
                    className="form-control"
                    value={deliveryMethod}
                    onChange={(e) => setDeliveryMethod(e.target.value)}
                />
            </div>
            <div className="mb-3">
                <label className="form-label">Delivery Address</label>
                <input
                    type="text"
                    className="form-control"
                    value={deliveryAddress}
                    onChange={(e) => setDeliveryAddress(e.target.value)}
                />
            </div>
            {/* <div className="mb-3">
                <label className="form-label">Delivery City</label>
                <input
                    type="text"
                    className="form-control"
                    value={deliveryCity}
                    onChange={(e) => setDeliveryCity(e.target.value)}
                />
            </div> */}
            <div className="mb-3">
                <label className="form-label">Delivery Price</label>
                <input
                    type="text"
                    className="form-control"
                    value={deliveryPrice}
                    onChange={(e) => setDeliveryPrice(e.target.value)}
                />
            </div>
            <div className="mb-3">
                <label className="form-label">Order ID</label>
                <input
                    type="text"
                    className="form-control"
                    value={deliveryOrderId}
                    onChange={(e) => setDeliveryOrderId(e.target.value)}
                />
            </div>
            <button type="submit" className="btn btn-primary">Save</button>
        </form>
    );
};

export default EditDeliveryForm;
