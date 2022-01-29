import React,{Fragment,Component} from 'react';
import {Link} from 'react-router-dom';
import './header.css';


class HeaderRout extends Component{
    constructor(props){
        super(props)

        this.state={
            title:"LOVE HANDI CRAFTS",
        }
    }
    handleChange=(event)=>{
        console.log(event.target.value)
        this.props.userInput(event.target.value)
    }
    render(){
        return(
            <>
                <Fragment> 
                        <header>
                        <div className="heading">
                            &hearts; {this.state.title} &hearts;
                        </div>
                        </header>
                        <nav className="navbar navbar-inverse">
                <div className="container-fluid">
                    <div className="navbar-header">
                        <button type="button" className="navbar-toggle" data-toggle="collapse" data-target="#firstnav">
                            <span className="icon-bar"></span>
                            <span className="icon-bar"></span>
                            <span className="icon-bar"></span>
                        </button>
                        <Link className="navbar-brand">
                            <span classNameName="glyphicon glyphicon-tree-conifer">Welcome</span>
                        </Link>
                    </div>
                    <div class="navbar-collapse collapse" id="firstnav">
                        <ul class="nav navbar-nav">
                            <li><Link to='/' className="glyphicon glyphicon-tree-conifer">Home</Link></li>
                            <li><Link to='/about' className="glyphicon glyphicon-tree-conifer">About</Link></li> 
                            <li><Link to="/product" className="glyphicon glyphicon-tree-conifer">Product</Link></li>
                            <center>
                                <input className="searchbar" type="text" placeholder="Search..." onChange={this.handleChange}/>    
                            </center>
                        </ul>
                    </div>
                </div>
                </nav>
                </Fragment>
            </>
        )
    }
    
}

export default HeaderRout;