import React, { useState } from 'react'
import { addOne, getAll } from '../API'

const Form = ({ products, setProducts }) => {
    const [newProduct, setNewProduct] = useState({ name: "", price: "" });

    const getProducts = () => {
        getAll("/product").then((res) => {
            setProducts(res.data)
        })
    }

    return (
        <>
            <div className='mt-3 d-flex '>
                <input type="text" placeholder='name' className='form-control m-3'
                    value={newProduct.name}
                    onChange={(e) => {
                        setNewProduct({ ...newProduct, name: e.target.value });
                    }}

                />
                <input type="text" placeholder='price' className='form-control m-3'
                    value={newProduct.price}
                    onChange={(e) => {
                        setNewProduct({ ...newProduct, price: e.target.value });
                    }} />
                <button onClick={async () => {
                    await addOne("/product", {
                        id: newProduct.id,
                        name: newProduct.name,
                        price: newProduct.price
                    })
                    setProducts([...products, newProduct])

                }
                }>add</button></div>
        </>
    )
}

export default Form;
