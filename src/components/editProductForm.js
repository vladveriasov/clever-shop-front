import React, { useState } from "react";
import axios from "axios";

const EditProductForm = (props) => {
    const [productName, setProductName] = useState(props.productName);
    const [productDescription, setProductDescription] = useState(props.productDescription);
    const [productBrand, setProductBrand] = useState(props.productBrand);
    const [subcategoryId, setSubcategoryId] = useState(props.subcategoryId);

    const handleSubmit = async (event) => {
        event.preventDefault();

        const updatedProduct = {
            productId: props.productId,
            productName,
            productDescription,
            productBrand,
            subcategoryId,
        };

        try {
            await axios.put(`http://localhost:3000/product/${props.productId}`, updatedProduct);
            // Handle successful update (e.g., close the modal, refresh the data)
        } catch (exception) {
            console.log("exception:", exception);
        }
    };

    return (
        <form onSubmit={handleSubmit}>
            <div className="mb-3">
                <label className="form-label">Product Name</label>
                <input
                    type="text"
                    className="form-control"
                    value={productName}
                    onChange={(e) => setProductName(e.target.value)}
                />
            </div>
            <div className="mb-3">
                <label className="form-label">Product Description</label>
                <textarea
                    className="form-control"
                    value={productDescription}
                    onChange={(e) => setProductDescription(e.target.value)}
                ></textarea>
            </div>
            <div className="mb-3">
                <label className="form-label">Product Brand</label>
                <input
                    type="text"
                    className="form-control"
                    value={productBrand}
                    onChange={(e) => setProductBrand(e.target.value)}
                />
            </div>
            <div className="mb-3">
                <label className="form-label">Subcategory ID</label>
                <input
                    type="text"
                    className="form-control"
                    value={subcategoryId}
                    onChange={(e) => setSubcategoryId(e.target.value)}
                />
            </div>
            <button type="submit" className="btn btn-primary">Save</button>
        </form>
    );
};

export default EditProductForm;
