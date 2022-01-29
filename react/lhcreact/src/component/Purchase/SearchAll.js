import React,{Component} from 'react';
import AllProducts from './AllProducts';
import './allproduct.css';
//import {Link} from 'react-router-dom';
import Header from '../Header';

const url="https://lovehandicrafts.herokuapp.com/hcproducts";

class SearchAll extends Component{
    constructor(props){
        super(props);
        this.state={
            category:'',
        }
    }

    render(){
        return(
            <>
            <Header/>
               <div id="QuickSearch">
                <span id="mainheading">
                Select the best beautiful souveniers of your choice
                </span><hr/>
                <AllProducts quickData={this.state.category} finalOrder={(data)=>{this.addItems(data)}}/>         
            </div>
            </>      
        )
    }      
    //call api for category
    componentDidMount() {
        fetch(url,{method:'GET'})
        .then((res)=>res.json())
        .then((data)=>{
            this.setState({category:data})
        })
    }
}
export default SearchAll;