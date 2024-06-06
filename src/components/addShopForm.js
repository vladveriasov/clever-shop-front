import React, { useState } from "react";
import axios from "axios";

const AddShopForm = ({ onClose, onAdd }) => {
    const [shopAdress, setShopAdress] = useState("");
    const [shopOpen, setShopOpen] = useState("");
    const [shopClose, setShopClose] = useState("");
    const [shopType, setShopType] = useState("SUPERMARKET");

    const addShop = async () => {
        const data = {
            shopAdress,
            shopOpen: new Date(shopOpen).toISOString(),
            shopClose: new Date(shopClose).toISOString(),
            shopType
        };

        try {
            await axios.post("http://localhost:3000/shop", data);
            onAdd(); // Обновление данных после добавления
            onClose(); // Закрытие формы
        } catch (exception) {
            console.log("exception:", exception);
        }
    };

    return (
        <div className="form">
            <div className="form-body">
                <div className="editForm-container">
                    <label className="form__label" htmlFor="shopAdress">Shop Address</label>
                    <input
                        className="form__input"
                        type="text"
                        value={shopAdress}
                        onChange={(e) => setShopAdress(e.target.value)}
                        id="shopAdress"
                        placeholder="Shop Address"
                    />
                </div>
                <div className="editForm-container">
                    <label className="form__label" htmlFor="shopOpen">Shop Open</label>
                    <input
                        className="form__input"
                        type="datetime-local"
                        value={shopOpen}
                        onChange={(e) => setShopOpen(e.target.value)}
                        id="shopOpen"
                    />
                </div>
                <div className="editForm-container">
                    <label className="form__label" htmlFor="shopClose">Shop Close</label>
                    <input
                        className="form__input"
                        type="datetime-local"
                        value={shopClose}
                        onChange={(e) => setShopClose(e.target.value)}
                        id="shopClose"
                    />
                </div>
                <div className="editForm-container">
                    <label className="form__label" htmlFor="shopType">Shop Type</label>
                    <select
                        className="form__input"
                        value={shopType}
                        onChange={(e) => setShopType(e.target.value)}
                        id="shopType"
                    >
                        <option value="SUPERMARKET">Supermarket</option>
                        <option value="CONVENIENCE_STORE">Convenience Store</option>
                        <option value="HYPERMARKET">Hypermarket</option>
                    </select>
                </div>
                <div className="footer">
                    <button type="button" className="btn btn-secondary" onClick={onClose}>Close</button>
                    <button onClick={addShop} type="button" className="btn btn-primary">Add Shop</button>
                </div>
            </div>
        </div>
    );
};

export default AddShopForm;
