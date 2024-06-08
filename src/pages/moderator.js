
import "../App.css";
import React, { useState, useEffect } from "react";
import UserRow from "../components/userRow";
import OrderRow from "../components/orderRow";
import axios from "axios";

const Moderator = () => {
    const [users, setUsers] = useState([]);
    const [orders, setOrders] = useState([]);
    const [selectedRow, setSelectedRow] = useState({});
    const [showRowView, setShowRowView] = useState(false);

    useEffect(() => {
        const fetchUsers = async () => {
            try {
                const result = await axios.get("https://gainful-judicious-uncle.glitch.me/user");
                setUsers(result.data);
            } catch (exception) {
                console.log("Exception fetching users:", exception);
            }
        };

        const fetchOrders = async () => {
            try {
                const result = await axios.get("https://gainful-judicious-uncle.glitch.me/order");
                setOrders(result.data);
            } catch (exception) {
                console.log("Exception fetching orders:", exception);
            }
        };

        fetchUsers();
        fetchOrders();
    }, []);

    const handleRow = (row) => {
        setSelectedRow(row);
        setShowRowView(true);
    };

    return (
        <div className="admin-container">
            <div className="admin-container-entity">
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
                {/* <div className="admin-container-button">
                    <button type="button" className="btn btn-success">Add order</button>
                </div> */}
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
                        </tr>
                    </thead>
                    <tbody>
                        {orders.map((order) => (
                            <OrderRow key={order.orderId} {...order} onClick={handleRow} />
                        ))}
                    </tbody>
                </table>
            </div>

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

export default Moderator;

