// import "../App.css";
// import React, { setState, useState, useEffect } from "react";
// import UserRow from "../components/userRow";
// import OrderRow from "../components/orderRow";
// import axios from "axios";


// const Admin = () => {
//     const [rows, setRows] = useState([])
//     const [row, setRow] = useState({})
//     const [showRowView, setShowRowView] = useState(false)

//     useEffect(() => {
//         const dataFetch = async () => {
//             const result = await axios("http://localhost:3000/user");
//             console.log(result)
//             setRows(result.data);
//         };
//         try {
//             dataFetch();
//         } catch (exeption) {
//             console.log("exeption:", exeption);
//         }


//         const dataFetchOrder = async () => {
//             const resultOrder = await axios("http://localhost:3000/order");
//             console.log("resultOrder====>>",resultOrder)
//             setRows(resultOrder.data);
//         };
//         try {
//             dataFetchOrder();
//         } catch (exeption) {
//             console.log("exeption:", exeption);
//         }
//     }, []);





//     const handleRow = (row) => {
//         setRow(row)
//         setShowRowView(true)
//         console.log(row)
//         // ...other logic here
//     }

//     const listItemsUser = rows.map((user) => (
//         // Correct! Key should be specified inside the array.
//         <UserRow key={user.userId} {...user} onClick={handleRow} setRows={setRows} />
//     ));

//     const listItemsOrder = rows.map((order) => (
//         // Correct! Key should be specified inside the array.
//         <OrderRow key={order.orderId} {...order} onClick={handleRow} setRows={setRows} />
//     ));

//     console.log(listItemsUser)

//     return (
//         <div className="admin-container">
//             <div className="admin-container-entity">
//                 <div className="admin-container-button">
//                     <button type="button" class="btn btn-success">Add user</button>
//                 </div>
//                 <table className="table custom-font-size">
//                     <thead>
//                         <tr>
//                             <th scope="col">#</th>
//                             <th scope="col">Email</th>
//                             <th scope="col">Name</th>
//                             <th scope="col">Password</th>
//                             <th scope="col">PhoneNumber</th>
//                             <th scope="col">BonusAccount</th>
//                             <th scope="col">InterfaceLanguage</th>
//                             <th scope="col">Notification</th>
//                             <th scope="col">Role</th>
//                             <th scope="col">Photo</th>
//                             <th scope="col">Edit</th>
//                             <th scope="col">Delete</th>
//                         </tr>
//                     </thead>
//                     <tbody>
//                         {listItemsUser}
//                     </tbody>
//                     {/* {showRowView ? <RowView row={row} setShowRowView={setShowRowView} /> : null} */}
//                 </table>
//             </div>

//             <div className="admin-container-entity">
//                 <div className="admin-container-button">
//                     <button type="button" class="btn btn-success">Add order</button>
//                 </div>
//                 <table className="table custom-font-size">
//                     <thead>
//                         <tr>
//                             <th scope="col">#</th>
//                             <th scope="col">userOrderId</th>
//                             <th scope="col">orderDate</th>
//                             <th scope="col">receiver</th>
//                             <th scope="col">receiverPhone</th>
//                             <th scope="col">paymentMethod</th>
//                             <th scope="col">delivery</th>
//                             <th scope="col">Edit</th>
//                             <th scope="col">Delete</th>
//                         </tr>
//                     </thead>
//                     <tbody>
//                         {listItemsOrder}
//                     </tbody>
//                     {/* {showRowView ? <RowView row={row} setShowRowView={setShowRowView} /> : null} */}
//                 </table>
//             </div>
//             {showRowView ? <RowView row={row} setShowRowView={setShowRowView} /> : null}
//         </div>

//     )
// };

// function RowView(props) {
//     return (
//         <>
//             access with props
//             <span onClick={props.setShowRowView(false)}></span>
//             <h2>{props.table.tableTitle}</h2>
//             ... whatever here
//         </>
//     )
// }

// export default Admin;


import "../App.css";
import React, { useState, useEffect } from "react";
import UserRow from "../components/userRow";
import OrderRow from "../components/orderRow";
import AddUserForm from "../components/addUserForm";
import axios from "axios";

const Admin = () => {
    const [users, setUsers] = useState([]);
    const [orders, setOrders] = useState([]);
    const [selectedRow, setSelectedRow] = useState({});
    const [showRowView, setShowRowView] = useState(false);
    const [addShowForm, setAddShowForm] = useState(false);

    useEffect(() => {
        const fetchUsers = async () => {
            try {
                const result = await axios.get("http://localhost:3000/user");
                setUsers(result.data);
            } catch (exception) {
                console.log("Exception fetching users:", exception);
            }
        };

        const fetchOrders = async () => {
            try {
                const result = await axios.get("http://localhost:3000/order");
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

    const toggleAddUserForm = () => {
        setAddShowForm(!addShowForm);
    };

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
                                    <button type="button" className="btn-close"  onClick={toggleAddUserForm} ></button>
                                </div>
                                <div className="modal-body">
                                    <AddUserForm onClose={toggleAddUserForm}/>
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
                    <button type="button" className="btn btn-success">Add order</button>
                </div>
                <table className="table custom-font-size">
                    <thead>
                        <tr>
                            <th scope="col">#</th>
                            <th scope="col">userOrderId</th>
                            <th scope="col">orderDate</th>
                            <th scope="col">receiver</th>
                            <th scope="col">receiverPhone</th>
                            <th scope="col">paymentMethod</th>
                            <th scope="col">delivery</th>
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

