import { Paper, Table, TableBody, TableCell, TableContainer, TableHead, TableRow, Typography } from '@mui/material';
import React, { useEffect, useState } from 'react';
import './ManageAllOrders.css';

const ManageAllOrders = () => {

    const [orders, setOrders] = useState([]);

    const [changeStatus, setChangeStatus] = useState(false);

    useEffect(() => {
        fetch("http://localhost:5000/allOrders")
            .then(res => res.json())
            .then(data => setOrders(data));
    }, [changeStatus]);

    const handleUpdate = id => {
        const status = "Shipped";

        fetch(`http://localhost:5000/updateStatus/${id}`, {
            method: "PUT",
            headers: { "content-type": "application/json" },
            body: JSON.stringify({ status }),
        })
            .then(res => res.json())
            .then(data => data(setChangeStatus(!changeStatus)))
    };

    const handleDelete = id => {
        const proceed = window.confirm('Are you sure want to delete?');
        if (proceed) {
            fetch(`http://localhost:5000/deleteFinal/${id}`, {
                method: "DELETE",
            })
                .then((res) => res.json())
                .then((data) => {
                    if (data.deletedCount > 0) {
                        alert('Deleted Successfully!')
                        const remainingOrders = orders.filter(service => service._id !== id);
                        setOrders(remainingOrders);
                    }
                });
        }
    }

    return (
        <div>
            <Typography variant="h4" gutterBottom component="div"
                sx={{
                    py: 3,
                    color: 'black',
                    textAlign: "center",
                    fontWeight: 600,
                    fontFamily: 'tahoma'
                }}>MANAGE EVERY ORDERS</Typography>

            <TableContainer component={Paper}>
                <Table aria-label="Appointments table">

                    <TableHead>
                        <TableRow>
                            <TableCell align="center">Name</TableCell>
                            <TableCell align="center">Email</TableCell>
                            <TableCell align="center">Address</TableCell>
                            <TableCell align="center">Phone Number</TableCell>
                            <TableCell align="center">Product Name</TableCell>
                            <TableCell align="center">Status</TableCell>
                            <TableCell align="center">Action</TableCell>
                        </TableRow>
                    </TableHead>

                    <TableBody>
                        {orders.map((row) => (
                            <TableRow
                                key={row._id}
                                sx={{ '&:last-child td, &:last-child th': { border: 0 } }}
                            >
                                <TableCell align="left">{row.name}</TableCell>
                                <TableCell align="left">{row.email}</TableCell>
                                <TableCell align="left">{row.address}</TableCell>
                                <TableCell align="center">{row.phoneNumber}</TableCell>
                                <TableCell align="left">{row.productName}</TableCell>
                                <TableCell align="center">{row.status}</TableCell>

                                <TableCell align="left" style={{ display: 'flex' }} sx={{ py: 2, justifyContent: 'center' }}>
                                    <button
                                        onClick={() => handleUpdate(row._id)}
                                        className="action-btn">Update</button>

                                    <button
                                        onClick={() => handleDelete(row._id)}
                                        className="action-btn-delete">Delete</button>
                                </TableCell>

                            </TableRow>
                        ))}
                    </TableBody>
                </Table>
            </TableContainer>
        </div>
    );
};

export default ManageAllOrders;


