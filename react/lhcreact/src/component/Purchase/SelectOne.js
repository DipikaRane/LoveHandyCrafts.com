import React,{Component} from 'react';
import './purchase.css';
import './allproduct.css';
import axios from 'axios';
import ItemDisplay from './ItemDisplay';
import {Link} from 'react-router-dom';
import Header from '../Header';

const itemUrl="https://lovehandicrafts.herokuapp.com/hcproduct";

class SelectOne extends Component{
    constructor(props){
        super(props);
        this.state={
            items:'',
            userItem:'',
            product:''
        }
    }
    addItems=(data)=>{this.setState({userItem:data})}
    
    proceed=()=>{
        sessionStorage.setItem('item',this.state.userItem);
        this.props.history.push(`/placeorder/${this.state.items.product_name}`)
    }
    render(){
        return(
            <>
                <Header/>
                <ItemDisplay itemData={this.state.product} finalOrder={(data)=>{this.addItems(data)}}/>
            <center>
                <Link className="btn btn-success" to={`/searchall`}>Go Back</Link>&nbsp;&nbsp;
                <button className="btn btn-success" onClick={this.proceed}>Proceed</button>
            </center>
            </>
        )
    }
    async componentDidMount(){
        const itemId=this.props.match.params.id;
        const response=await axios.get(`${itemUrl}/${itemId}`)
        const itemsResponse=await axios.get(`${itemUrl}/${itemId}`)
        this.setState({items:response.data[0],product:itemsResponse.data})
    }
}
export default SelectOne