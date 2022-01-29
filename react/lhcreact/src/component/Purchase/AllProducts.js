import React,{Component} from 'react';
import './allproduct.css';
import {Link} from 'react-router-dom';

class AllProducts extends Component {
    
    renderCat=({quickData})=>{
        if(quickData){
            return quickData.map((item)=>{
                return(
                    
                        <div class="option">
                            <div class="tilecomponent">
                                <img src={item.Image} alt={item.product_name}/>
                                <div class="heading">
                                    <p>{item.product_name}</p>
                                    <p>Rs. {item.price}/-</p>
                                </div>
                                <center>
                                <Link className="btn btn-warning" to={`/selectone/${item.id}`}>Purchase</Link>
                                </center>
                            </div>
                            
                            <hr/>
                        </div>
                        
                )
            })
        }

    }
    render(){
        console.log(">>>>item",this.props)
        return(
            <div class="mainoptionblock">
                {this.renderCat(this.props)}     
            </div>                 
        )
    }
    
}
export default AllProducts;