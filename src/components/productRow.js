import React, { useState } from "react";
import EditProductForm from "./editProductForm";
import axios from "axios";

const ProductRow = (props) => {
    const [showEditForm, setShowEditForm] = useState(false);
    const localCurrentRole = window.localStorage.getItem("Role")
    const handleRow = () => {
        console.log(props.productId);
        // Add logic here if needed
    };

    const editShowEditForm = () => {
        setShowEditForm(!showEditForm);
    };

    const deleteProduct = () => {
        const dataFetch = async () => {
            const result = await axios(`http://localhost:3000/product/${props.productId}`, { method: "DELETE" });
        };
        try {
            dataFetch();
        } catch (exception) {
            console.log("exception:", exception);
        }
    };

    return (
        <>
            <tr onClick={handleRow}>
                <th scope="row">{props.productId}</th>
                <td>{props.productName}</td>
                <td>{props.productDescription}</td>
                <td>{props.productBrand}</td>
                <td>{props.subcategoryId}</td>
                <td>
                    <button onClick={editShowEditForm} type="button" className="btn btn-warning">Edit</button>
                </td>
                <td>
                    <button type="button" className="btn btn-danger" onClick={deleteProduct}>Delete</button>
                </td>
            </tr>

            {showEditForm && (
                <div className="modal show" style={{ display: 'block', backgroundColor: 'rgba(0, 0, 0, 0.5)' }}>
                    <div className="modal-dialog" role="document">
                        <div className="modal-content">
                            <div className="modal-header">
                                <h5 className="modal-title">Edit Product</h5>
                                <button type="button" className="btn-close" onClick={editShowEditForm}></button>
                            </div>
                            <div className="modal-body">
                                <EditProductForm {...props} />
                            </div>
                        </div>
                    </div>
                </div>
            )}
        </>
    );
};

export default ProductRow;
