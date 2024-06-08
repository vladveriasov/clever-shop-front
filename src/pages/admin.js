import "../App.css";
import React, { useState, useEffect } from "react";
import UserRow from "../components/userRow";
import OrderRow from "../components/orderRow";
import AddUserForm from "../components/addUserForm";
import ProductRow from "../components/productRow";
import AddProductForm from "../components/addProductForm";
// import AddDeliveryForm from "../components/addDeliveryForm";
// import DeliveryRow from "../components/deliveryRow";
import AddOrderForm from "../components/addOrderForm";

import axios from "axios";

const Admin = () => {
    const [users, setUsers] = useState([]);
    const [orders, setOrders] = useState([]);
    const [products, setProducts] = useState([]);
    const [selectedRow, setSelectedRow] = useState({});
    const [showRowView, setShowRowView] = useState(false);
    const [addShowForm, setAddShowForm] = useState(false);
    const [showAddProductForm, setShowAddProductForm] = useState(false);
    // const [showAddDeliveryForm, setShowAddDeliveryForm] = useState(false);
    const [showAddOrderForm, setShowAddOrderForm] = useState(false);
    // const [deliveries, setDeliveries] = useState([]);

    useEffect(() => {
        const fetchUsers = async () => {
            try {
                const result = await axios.get(`${process.env.REACT_APP_BACKEND_URL}/user`);
                setUsers(result.data);
            } catch (exception) {
                console.log("Exception fetching users:", exception);
            }
        };

        const fetchOrders = async () => {
            try {
                const result = await axios.get(`${process.env.REACT_APP_BACKEND_URL}/order`);
                setOrders(result.data);
            } catch (exception) {
                console.log("Exception fetching orders:", exception);
            }
        };

        const fetchProducts = async () => {
            try {
                const result = await axios.get(`${process.env.REACT_APP_BACKEND_URL}/product`);
                setProducts(result.data);
                console.log(result.data.productId)
            } catch (exception) {
                console.log("Exception fetching users:", exception);
            }
        };

        // const fetchDeliveries = async () => {
        //     try {
        //         const result = await axios.get(`${process.env.REACT_APP_BACKEND_URL}/delivery");
        //         setDeliveries(result.data);
        //     } catch (exception) {
        //         console.log("Exception fetching users:", exception);
        //     }
        // };

        fetchUsers();
        fetchOrders();
        fetchProducts();
        // fetchDeliveries();
    }, []);

    const handleRow = (row) => {
        setSelectedRow(row);
        setShowRowView(true);
    };

    const toggleAddUserForm = () => {
        setAddShowForm(!addShowForm);
    };

    const toggleAddProductForm = () => {
        setShowAddProductForm(!showAddProductForm);
    };

    // const toggleAddDeliveryForm = () => {
    //     setShowAddDeliveryForm(!showAddDeliveryForm);
    // }

    const toggleAddOrderForm = () => {
        setShowAddOrderForm(!showAddOrderForm);
    }

    return (
        <div className="admin-container">
            <div className="admin-container-entity">
                <div className="admin-container-button">
                    <button type="button" className="btn btn-success" onClick={toggleAddUserForm}>Add user</button>
                </div>
                {addShowForm && (
                    <div className="modal show" style={{ display: 'block', backgroundColor: 'rgba(0, 0, 0, 0.5)' }}>
                        <div className="modal-dialog" role="document">
                            <div className="modal-content">
                                <div className="modal-header">
                                    <h5 className="modal-title">Create User</h5>
                                    <button type="button" className="btn-close" onClick={toggleAddUserForm} ></button>
                                </div>
                                <div className="modal-body">
                                    <AddUserForm onClose={toggleAddUserForm} />
                                </div>
                            </div>
                        </div>
                    </div>
                )}
                {/* {addShowForm && <AddUserForm onClose={toggleAddUserForm} />} */}
                <table className="table custom-font-size">
                    <thead>
                        <tr>
                            <th scope="col">#</th>
                            <th scope="col">Email</th>
                            <th scope="col">Name</th>
                            <th scope="col">Password</th>
                            <th scope="col">PhoneNumber</th>
                            <th scope="col">BonusAccount</th>
                            <th scope="col">InterfaceLanguage</th>
                            <th scope="col">Notification</th>
                            <th scope="col">Role</th>
                            <th scope="col">Photo</th>
                            <th scope="col">Edit</th>
                            <th scope="col">Delete</th>
                        </tr>
                    </thead>
                    <tbody>
                        {users.map((user) => (
                            <UserRow key={user.userId} {...user} onClick={handleRow} />
                        ))}
                    </tbody>
                </table>
            </div>

            <div className="admin-container-entity">
                <div className="admin-container-button">
                    <button className="btn btn-primary" onClick={toggleAddOrderForm}>Add order</button>
                </div>
                {showAddOrderForm && (
                    <div className="modal show" style={{ display: 'block', backgroundColor: 'rgba(0, 0, 0, 0.5)' }}>
                        <div className="modal-dialog" role="document">
                            <div className="modal-content">
                                <div className="modal-header">
                                    <h5 className="modal-title">Add Order</h5>
                                    <button type="button" className="btn-close" onClick={toggleAddOrderForm}></button>
                                </div>
                                <div className="modal-body">
                                    <AddOrderForm onClose={toggleAddOrderForm} />
                                </div>
                            </div>
                        </div>
                    </div>
                )}
                <table className="table custom-font-size">
                    <thead>
                        <tr>
                            <th scope="col">#</th>
                            <th scope="col">userOrderId</th>
                            <th scope="col">orderDate</th>
                            <th scope="col">receiver</th>
                            <th scope="col">receiverPhone</th>
                            <th scope="col">paymentMethod</th>
                            {/* <th scope="col">delivery</th> */}
                            <th scope="col">Edit</th>
                            <th scope="col">Delete</th>
                        </tr>
                    </thead>
                    <tbody>
                        {orders.map((order) => (
                            <OrderRow key={order.orderId} {...order} onClick={handleRow} />
                        ))}
                    </tbody>
                </table>
            </div>

            <div className="admin-container-entity">
                <div className="admin-container-button">
                    <button className="btn btn-primary" onClick={toggleAddProductForm}>Add Product</button>
                </div>

                {showAddProductForm && (
                    <div className="modal show" style={{ display: 'block', backgroundColor: 'rgba(0, 0, 0, 0.5)' }}>
                        <div className="modal-dialog" role="document">
                            <div className="modal-content">
                                <div className="modal-header">
                                    <h5 className="modal-title">Add Product</h5>
                                    <button type="button" className="btn-close" onClick={toggleAddProductForm}></button>
                                </div>
                                <div className="modal-body">
                                    <AddProductForm onClose={toggleAddProductForm} />
                                </div>
                            </div>
                        </div>
                    </div>
                )}
                <table className="table custom-font-size">
                    <thead>
                        <tr>
                            <th scope="col">#</th>
                            <th scope="col">Product Name</th>
                            <th scope="col">Description</th>
                            <th scope="col">Brand</th>
                            <th scope="col">Subcategory ID</th>
                            <th scope="col">Actions</th>
                            <th scope="col">Delete</th>
                        </tr>
                    </thead>
                    <tbody>
                        {products.map((product) => (
                            <ProductRow key={product.productId} {...product} onClick={handleRow} />
                        ))}
                    </tbody>
                </table>
            </div>

            {/* <div className="admin-container-entity">
                <div className="admin-container-button">
                    <button className="btn btn-primary" onClick={toggleAddDeliveryForm}>Add Delivery</button>
                </div>

                {showAddDeliveryForm && (
                    <div className="modal show" style={{ display: 'block', backgroundColor: 'rgba(0, 0, 0, 0.5)' }}>
                        <div className="modal-dialog" role="document">
                            <div className="modal-content">
                                <div className="modal-header">
                                    <h5 className="modal-title">Add Delivery</h5>
                                    <button type="button" className="btn-close" onClick={toggleAddDeliveryForm}></button>
                                </div>
                                <div className="modal-body">
                                    <AddDeliveryForm onClose={toggleAddDeliveryForm} />
                                </div>
                            </div>
                        </div>
                    </div>
                )}
                <table className="table custom-font-size">
                    <thead>
                        <tr>
                            <th scope="col">#</th>
                            <th scope="col">Method</th>
                            <th scope="col">Address</th>
                            <th scope="col">City</th>
                            <th scope="col">Price</th>
                            <th scope="col">Order ID</th>
                            <th scope="col">Edit</th>
                            <th scope="col">Delete</th>
                        </tr>
                    </thead>
                    <tbody>
                        {deliveries.map((delivery) => (
                            <DeliveryRow key={delivery.deliveryId} {...delivery} onClick={handleRow} />
                        ))}
                    </tbody>
                </table>
            </div> */}

            {showRowView && <RowView row={selectedRow} setShowRowView={setShowRowView} />}
        </div>
    );
};

function RowView({ row, setShowRowView }) {
    return (
        <div>
            <button onClick={() => setShowRowView(false)}>Close</button>
            <h2>{row.tableTitle}</h2>
            {/* Display the details of the selected row */}
            <pre>{JSON.stringify(row, null, 2)}</pre>
        </div>
    );
}

export default Admin;

