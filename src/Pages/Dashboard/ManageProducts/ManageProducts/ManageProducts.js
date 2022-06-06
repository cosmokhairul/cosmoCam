import { Paper, Table, TableBody, TableCell, TableContainer, TableHead, TableRow, Typography } from '@mui/material';
import React, { useEffect, useState } from 'react';

const ManageProducts = () => {

    const [products, setProducts] = useState([]);

    useEffect(() => {
        fetch("https://pacific-ridge-79259.herokuapp.com/products")
            .then(res => res.json())
            .then(data => setProducts(data));
    }, []);

    const handleDelete = id => {
        const proceed = window.confirm('Are you sure want to delete?');
        if (proceed) {
            fetch(`https://pacific-ridge-79259.herokuapp.com/deleteProduct/${id}`, {
                method: "DELETE",
            })
                .then((res) => res.json())
                .then((data) => {
                    if (data.deletedCount > 0) {
                        alert('Deleted Successfully!')
                        const remainingOrders = products.filter(service => service._id !== id);
                        setProducts(remainingOrders);
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
                }}>MANAGE EVERY PRODUCTS</Typography>

            <TableContainer component={Paper}>
                <Table aria-label="Appointments table">

                    <TableHead>
                        <TableRow>
                            <TableCell align="center">Product Name</TableCell>
                            <TableCell align="center">Description</TableCell>
                            <TableCell align="center">Price</TableCell>
                            <TableCell align="center">Action</TableCell>
                        </TableRow>
                    </TableHead>

                    <TableBody>
                        {products.map((row) => (
                            <TableRow
                                key={row._id}
                                sx={{ '&:last-child td, &:last-child th': { border: 0 } }}
                            >
                                <TableCell align="left">{row.productName}</TableCell>
                                <TableCell align="justify">{row.description}</TableCell>
                                <TableCell align="center">$ {row.price}</TableCell>
                                <TableCell align="center">
                                    <button
                                        onClick={() => handleDelete(row._id)}
                                        className="action-btn-delete">Delete Item</button>
                                </TableCell>

                            </TableRow>
                        ))}
                    </TableBody>
                </Table>
            </TableContainer>
        </div>
    );
};

export default ManageProducts;


{/* <TableCell align="right">
                                    <button
                                        onClick={() => handleUpdate(row._id)}
                                        className="btn bg-success p-1 btn-sm text-white"
                                    >
                                        Update
                                    </button>
                                    <span> </span>
                                    <button
                                        onClick={() => handleDelete(row._id)}
                                        className="btn bg-danger p-1 btn-sm text-white">Delete</button>
                                </TableCell> */}