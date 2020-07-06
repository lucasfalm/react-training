import React from 'react'
import productsData from './data/products'
import './Products.css'

export default _ => { 
    const products = productsData.map((product) => {
        return (
            <tr key= { product.id } >
                <td>{ product.id }</td>
                <td>{ product.name }</td>
                <td>{ product.price }</td>
            </tr>
        )})

    return( 
        <table width="100%">  
            <tr>
                <th> ID </th>
                <th> Description </th>
                <th> Price </th>
            </tr>

            { products }
        
        </table>
    )
}