import "../App.css";
import React, { setState, useState, useEffect } from "react";
import UserRow from "../components/userRow";
import axios from "axios";


const Admin = () => {

    const localCurrentUserId = window.localStorage.getItem("userId")
    const localCurrentRole = window.localStorage.getItem("role")
    const [rows, setRows] = useState([])
    const [row, setRow] = useState({})
    const [showRowView, setShowRowView] = useState(false)

    useEffect(() => {
        const dataFetch = async () => {
            const result = await axios("http://localhost:3000/user");
            console.log(result)
            setRows(result.data);
        };
        try {
            dataFetch();
        } catch (exeption) {
            console.log("exeption:", exeption);
        }
        // dataFetch();
    }, []);

    const handleRow = (row) => {
        setRow(row)
        setShowRowView(true)
        console.log(row)
        // ...other logic here
    }

    const listItems = rows.map((user) => (
        // Correct! Key should be specified inside the array.
        <UserRow key={user.userId} {...user} onClick={handleRow} setRows={setRows} />
      ));

      console.log(listItems)

    return (
        <div className="admin-container">
            
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
                    {listItems}
                </tbody>
                {showRowView ? <RowView row={row} setShowRowView={setShowRowView} /> : null}
            </table>
            
        </div>

    )
};

function RowView(props) {
    return (
        <>
            access with props
            <span onClick={props.setShowRowView(false)}></span>
            <h2>{props.table.tableTitle}</h2>
            ... whatever here
        </>
    )
}

export default Admin;
