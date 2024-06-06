import React from "react";

const ShopRow = ({ shop, onEdit, onDelete }) => {
    return (
        <tr>
            <th scope="row">{shop.shopId}</th>
            <td>{shop.shopAdress}</td>
            <td>{new Date(shop.shopOpen).toLocaleString()}</td>
            <td>{new Date(shop.shopClose).toLocaleString()}</td>
            <td>{shop.shopType}</td>
            <td>
                <button className="btn btn-warning" onClick={() => onEdit(shop)}>Edit</button>
            </td>
            <td>
                <button className="btn btn-danger" onClick={() => onDelete(shop.shopId)}>Delete</button>
            </td>
        </tr>
    );
};

export default ShopRow;
