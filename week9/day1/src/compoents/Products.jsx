import React, { useEffect, useState } from 'react'
import { getAll, delOne } from '../API'
import Table from 'react-bootstrap/Table';


const Products = ({ products, setProducts }) => {

    const getProducts = () => {
        getAll("/product").then((res) => {
            setProducts(res.data)
        })
    }
    useEffect(() => {
        getProducts()
    }, []);

    return (

        <>

            <Table striped bordered hover  >
                <thead>
                    <tr>
                        <th>#</th>
                        <th> Name</th>
                        <th> price</th>
                        <th>Favorite</th>
                        <th>Delete</th>
                        <th>Update</th>
                    </tr>
                </thead>
                <tbody>
                    {products.map((el) =>
                        <tr key={el.id}>
                            <td>{el.id}</td>
                            <td>{el.name}</td>
                            <td>{el.price}</td>
                            <td><button>favorite</button></td>
                            <td><button onClick={
                                async () => {
                                    await delOne("/product", el.id)
                                    setProducts((products) => {
                                        return products.filter((x) => x.id != el.id);
                                    });

                                }} >Delete</button></td>
                            <td><button>Update</button></td>
                        </tr>

                    )
                    }
                </tbody>
            </Table>
        </>
    )
}

export default Products
