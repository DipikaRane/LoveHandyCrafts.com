import React,{Component} from 'react';
import SearchDisplay from './SearchDisplay';
import './Search.css';

const url="https://lovehandicrafts.herokuapp.com/categories";

class Search extends Component{
    constructor(props){
        super(props);
        this.state={
            category:''
        }
    }
    render(){
        return(
               <div id="QuickSearch">
                <span id="mainheading">
                Select the best beautiful souveniers of your choice
                </span>    
                <SearchDisplay quickData={this.state.category}/>         
            </div>      
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
export default Search;