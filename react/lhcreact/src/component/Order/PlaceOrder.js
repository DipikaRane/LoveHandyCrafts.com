import React,{Component} from 'react';
import './order.css';

const prodUrl="https://lovehandicrafts.herokuapp.com/selected";
const plcOrdUrl="https://lovehandicrafts.herokuapp.com/placeOrder";

class PlaceOrder extends Component{
    constructor(props){
        super(props);
        this.state={
            id:Math.floor(Math.random()*100000),
            product_name:this.props.match.params.proName,
            name:'Deepika',
            email:'deepika@gmail.com',
            phone:'8552049777',
            address:'#1198',
            price:0,
            items:'',
        }
    }
    handleSubmit=()=>{
        /*var obj=this.state;
        obj.items=sessionStorage.getItem('item');
        delete obj.items;
        console.log(obj);*/

        fetch(plcOrdUrl,{
            method:'POST',
            headers:{
                'accept':'application/json',
                'content-type':'application/json'
            },
            body:JSON.stringify(this.state)
        })
        //.then(this.props.history.push('/ViewBooking'))
        .then(console.log('going for payment'))
    }
    renderItems=(data)=>{
        if(data){
            return data.map((items,index)=>{
                return(
                    <>
                    <div class="card" key={index}>
                    <img src={items.Image} alt={items.product_name}/>
                    <h3>{items.color} {items.product_name}</h3><h4> From {items.origin} </h4>
                    </div>
                    </>
                )
            })
        }
        
    }
    handleChange=(event)=>{
        this.setState({[event.target.name]:event.target.value})
    }
    render(){
        return(
            <><Header/>
                    <div class="panel panel-info">
                        <div class="panel-heading">
                            <span>Place Order</span>
                        </div>
                        <div class="panel-body">
                            <form method="POST" action="http://localhost:4100/paynow">
                                <div className="row">
                                <div className="col-md-12">
                                    <div className="col-md-6">
                                        <div class="form-group">
                                            <label for="firstname">Name</label>
                                            <input class="form-control" name="name" value={this.state.name} onChange={this.handleChange} type="text"/>
                                        </div>  
                                    </div>
                                    <div className="col-md-6">
                                        <div class="form-group">
                                            <label>Email Id</label>
                                            <input class="form-control" type="email" name="email" value={this.state.email} onChange={this.handleChange} required/>
                                        </div>  
                                    </div>
                                    <div className="col-md-6">
                                        <div class="form-group">
                                            <label>Mobile No. :</label>                       
                                            <input class="form-control" name="phone" value={this.state.phone} onChange={this.handleChange} required/>
                                        </div>  
                                    </div>
                                    <div className="col-md-6">
                                        <div class="form-group">
                                        <label>Address</label>
                                            <input className="form-control" name="address" value={this.state.address} onChange={this.handleChange}/>  
                                        </div>  
                                    </div>
                                </div>
                                {this.renderItems(this.state.items)}
                                <input type="hidden" name="price" value={this.state.price}/>
                                <input type="hidden" name="id" value={this.state.id}/>
                                <input type="hidden" name="product_name" value={this.state.product_name}/>
                                <div className="costrow">
                                    <div className="col-md-12">
                                        <h2>Total Cost is Rs.{this.state.price}</h2>
                                </div>
                                    </div>
                                <center>
                                <div className="col-md-12">
                                    <button className="btn btn-success"  onClick={this.handleSubmit} type="submit">
                                        Order Now
                                    </button>
                                </div>
                                </center>
                                
                                </div>
                            </form>
                        </div>  
                    </div>
            </>
        )
    }
    componentDidMount(){
        let ordItems=sessionStorage.getItem('item')
        let itemId=[]
        ordItems.split(',').map((item)=>{
            itemId.push(parseInt(item))
            return 'ok'
        })
        fetch(prodUrl,{
            method:'POST',
            headers:{
                'accept':'application/json',
                'content-type':'application/json'
            },
            body:JSON.stringify(itemId)
        })
        .then((res)=>res.json())
        .then((data)=>{
            let itemDetails = [];
            let totalPrice = 0;
            data.map((item) => {
                var myObj = {}
                totalPrice = totalPrice + parseInt(item.price)
                myObj.product_name = item.product_name;
                myObj.Image = item.Image;
                myObj.color=item.color;
                myObj.origin=item.origin;
                itemDetails.push(myObj);
                return 'ok'
            })
            this.setState({price:totalPrice,items:itemDetails})
        })
    }
}
export default PlaceOrder;