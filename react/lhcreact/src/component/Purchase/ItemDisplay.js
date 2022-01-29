import React,{Component} from 'react';
//import AllProducts from './AllProducts';

class ItemDisplay extends Component{
    orderId=[];
    //proName=[];
    addItem=(id)=>{
        console.log(id);
        this.orderId.push(`${id}`)
        this.props.finalOrder(this.orderId)
        //this.proName.push(`${product_name}`)
        //this.props.finalOrder(this.proName)
        //this.setState({userItem:id})
        
    }
    removeItem=(id)=>{
        this.orderId.splice(this.orderId.indexOf(id.toString(),1))//this line help to remove
        this.orderId.push(`${id}`)
    }
    renderCart=(orders)=>{
        if(orders){
            return orders.map((item,index)=>{
                return(
                    <>
                    <span>is Product No.</span>
                    <b key={index}>{item}&nbsp;&nbsp;</b>
                    </>
                    
                )
            })
        }
    }
    renderItem=({itemData})=>{
        if(itemData){
            return itemData.map((items)=>{
                return(
                    <div key={items.id}>
                        <div class="maincontent">
                            <div className="itemselected">
                                <div className="card" data-bs-toggle="tooltip" title={items.category}>
                                    <center>
                                        <img src={items.Image} alt={items.product_name} className="cardImage"/>
                                        <h4>{items.product_name}</h4> From {items.origin}
                                        <p>Size:{items.dimenssion} , {items.color}</p>
                                        <p>{items.piece} For Rs.<span>{items.price}</span></p>
                                        <button className="btn btn-primary" onClick={()=>{this.addItem(items.id)}}>
                                        <span className="glyphicon glyphicon-shopping-cart"></span>
                                    </button>&nbsp;&nbsp;
                                    <button className="btn btn-primary" onClick={()=>{this.removeItem(items.id)}}>
                                        <span className="glyphicon glyphicon-trash"></span>
                                    </button>
                                    </center>
                                </div>
                            </div>
                        </div>
                    </div>
                )
            })
        }
    }
    render(){
        console.log(">>>>item",this.props)
        return(
            <>
                <div class="col-md-12">
                   <h3>Your Choice {this.renderCart(this.orderId)}</h3> 
                </div>
                <div class="col-md-12">
                   {this.renderItem(this.props)}
                </div>
                
            </>
        )
    }
}
export default ItemDisplay;