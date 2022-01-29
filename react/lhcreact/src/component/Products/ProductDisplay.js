import React from 'react';
import './product.css';
import {Link} from 'react-router-dom';


const ProductDisplay=(props)=>{
    
    const renderProduct=({prodData})=>{
        if(prodData){
            if(prodData.length>0){
                return prodData.map((item)=>{
                    return(
                        <> 
                            <div className="card" data-bs-toggle="tooltip" title={item.category}>
                                <img src={item.Image} alt={item.product_name} className="cardImage"/>
                                <center>
                                    <h4>{item.product_name}</h4> From {item.origin}
                                    <p>Size:{item.dimenssion} , {item.color}</p>
                                    <p>{item.piece} For Rs.<span>{item.price}</span></p>
                                    <Link className="btn btn-warning" to={`/purchase/${item.id}`}>Purchase</Link>
                                </center>
                            </div>
                        </>
                    )
                })
            }else{
                return(
                    <h3>Product not available</h3>
                )
            }
        }
    }    
        return(
            <>
                {renderProduct(props)}  
            </>
        )
    
}

export default ProductDisplay;