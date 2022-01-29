import React,{Component} from 'react';
import ProductDisplay from './ProductDisplay';
import Header from '../Header';

import './product.css';
import axios from 'axios';

const url="https://lovehandicrafts.herokuapp.com/filter";

class Products extends Component{
    constructor(props){
        super(props);
        this.state={
            productlist:'',
        }
    }
    
    render(){
        return(
            <><Header/>
                <div id="maincontent">
                    <div className="content">
                        <h2>Explore your Search</h2>
                    </div>
                    
                    <ProductDisplay prodData={this.state.productlist}/>  
                </div>
            </>
        )
    }
    componentDidMount(){
        const catId=this.props.match.params.id;
        axios.get(`${url}/${catId}`)
        .then((res)=>{
            this.setState({productlist:res.data})
        })
    }
}

export default Products;