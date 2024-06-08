import React, { useState } from "react";
import axios from "axios";

const AddProductForm = ({ onClose }) => {
    const [productName, setProductName] = useState("");
    const [productDescription, setProductDescription] = useState("");
    const [productBrand, setProductBrand] = useState("");
    const [subcategoryId, setSubcategoryId] = useState("");

    const addProduct = () => {
        const data = {
            productName,
            productDescription,
            productBrand,
            subcategoryId
        };
        const dataFetch = async () => {
            // await axios.post("https://musefrill-ailon4.stormkit.dev/product", data);
            await axios.post("https://musefrill-ailon4.stormkit.dev/product", data);
            // https://musefrill-ailon4.stormkit.dev/
            // delivery
        };
        try {
            if (data.productName === "") {
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
                <div className="editForm-container">
                    <label className="form__label" htmlFor="productName">Product Name</label>
                    <input className="form__input" type="text" value={productName} onChange={(e) => setProductName(e.target.value)} id="productName" placeholder="Product Name" />
                </div>
                <div className="editForm-container">
                    <label className="form__label" htmlFor="productDescription">Product Description</label>
                    <input className="form__input" type="text" value={productDescription} onChange={(e) => setProductDescription(e.target.value)} id="productDescription" placeholder="Product Description" />
                </div>
                <div className="editForm-container">
                    <label className="form__label" htmlFor="productBrand">Product Brand</label>
                    <input className="form__input" type="text" value={productBrand} onChange={(e) => setProductBrand(e.target.value)} id="productBrand" placeholder="Product Brand" />
                </div>
                <div className="editForm-container">
                    <label className="form__label" htmlFor="subcategoryId">Subcategory ID</label>
                    <input className="form__input" type="text" value={subcategoryId} onChange={(e) => setSubcategoryId(e.target.value)} id="subcategoryId" placeholder="Subcategory ID" />
                </div>
                <div className="footer">
                    <button type="button" className="btn btn-secondary" onClick={onClose}>Close</button>
                    <button onClick={addProduct} type="submit" className="btn btn-primary">Add Product</button>
                </div>
            </div>
        </div>
    );
};

export default AddProductForm;
