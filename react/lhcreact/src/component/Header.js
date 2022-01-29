import React,{Fragment,Component} from 'react';
import {Link} from 'react-router-dom';
import './header.css';

const LoginUrl="https://myfirstzomatologin.herokuapp.com/api/auth/Login";
const url="https://myfirstzomatologin.herokuapp.com/api/auth/userInfo";

class Header extends Component{
    
    constructor(props){
        super(props)

        this.state={
            email:'',
            password:'',
            message:'',
            userdata:''
        }
    }
    handleChange=(event)=>{
        this.setState({[event.target.name]:event.target.value})
    }
    handleSubmit=()=>{
        fetch(LoginUrl,{
            method:'POST',
            headers:{
                'accept':'application/json',
                'content-type':'application/json'
            },
            body:JSON.stringify(this.state)
        })
        .then((res)=>res.json())
        .then((data)=>{
            if(data.auth === false){
                this.setState({message:data.token});
                document.getElementById('signin').style.display='none'
            }else{
                localStorage.setItem('ltk',data.token)
                //this.props.history.push('/')
            }
        })
    }
    handleLogout=()=>{
        this.setState({userdata:''})
        localStorage.removeItem('userdata')
        localStorage.removeItem('ltk')
        //this.props.history.push('/')
    }
    conditionalHeader=()=>{
        if(this.state.userdata.name){
            let data=this.state.userdata;
            let logArray=[data.name,data.email,data.phone,data.role]
            localStorage.setItem('userdata',logArray)
            return(
                <>
                <div class="userlog">
                    <p className="hello">Hello! {logArray[0]}   
                    <button className="btn btn-warning" onClick={this.handleLogout}>SIGN-OUT</button></p> 
                </div>
                </>
            )
        }else{
            return(
                <><span>Welcome To</span></>
            )
            }  
        }
    render(){
        return(
            <>
                <Fragment> 
                <div id="header">
                    <div id="heading">
                    <span class="ch">{this.conditionalHeader()}</span>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;
                        <span>&hearts; LOVE HANDI CRAFTS &hearts;</span>
                        <div className="socialI">
                            <a href="www.facebook.com">
                                <img src="https://i.ibb.co/wyH9JxS/facebook.png" className="socialIcon" alt="facebook"/>
                            </a>
                            <a href="www.instagram.com">
                                <img src="https://i.ibb.co/w0kZ5Hf/insta.png" className="socialIcon" alt="Insta"/>
                            </a>
                            <a href="www.youtube.com">
                                <img src="https://i.ibb.co/8gws83f/youtube.jpg"  className="socialIcon" alt="YouTube"/>
                            </a>
                        </div>
                    </div>
                </div>
                    <nav className="navbar navbar-inverse">
                        <div className="container-fluid">
                            <div className="navbar-header">
                                <button type="button" className="navbar-toggle" data-toggle="collapse" data-target="#firstnav">
                                    <span className="icon-bar"></span>
                                    <span className="icon-bar"></span>
                                    <span className="icon-bar"></span>
                                </button>
                            </div>
                            <div className="navbar-collapse collapse" id="firstnav">
                                <ul className="nav navbar-nav">
                                    <li><Link to='/' className="glyphicon glyphicon-home">Home</Link></li>
                                    <li><span className="glyphicon glyphicon-book" data-toggle="modal" data-target="#About">About</span></li>
                                        <div id="About" className="modal" role="dialog">
                                        <div className="modal-dialog">
                                            <div className="modal-content">    
                                                <button type="button" className="close" data-dismiss="modal">&times;</button>
                                                <center><h3>Love Handi-Crafts.Com</h3></center>
                                            <div className="modal-body">
                                                <div id="about">
                                                    <span>&hearts;Love Handi-crafts.com is a website who provides you different kind of souveniors on your doorstep. Here you can see, 
                                                    choose and buy all you like for your home, garden, office etc. 
                                                    Also you will find the website is best place to buy gifts for your loved ones.&hearts;</span>
                                                </div>
                                            </div>
                                            </div>
                                        </div>
                                        </div> 
                                    <li><span className="glyphicon glyphicon-earphone" data-toggle="modal" data-target="#Contact">Contact</span></li>
                                        <div id="Contact" className="modal" role="dialog">
                                        <div className="modal-dialog">
                                            <div className="modal-content">    
                                                <button type="button" className="close" data-dismiss="modal">&times;</button>
                                                <center><h3>Love Handi-Crafts.Com</h3></center>  
                                            <div className="modal-body">
                                                <div id="contact">
                                                    <center></center>
                                                    <div className="info">
                                                        <div className="contactno">
                                                            <p style={{color:'yellow'}}>Contact Us <span class="glyphicon glyphicon-hand-down"></span></p>
                                                            <p>Contact Details : +91 9168273999</p>
                                                            <p>Contact Details : +91 2222444413</p>
                                                            <p>Contact Outlet  : +91 2222444413</p>
                                                        </div>
                                                        <div className="addr">
                                                            <p style={{color:'yellow'}}>Visite us here <span class="glyphicon glyphicon-hand-down"></span></p>
                                                            <p>Outlet Address: #1198, Phase IV</p>
                                                            <p> HMEL Township, Bathinda</p>
                                                            <p>Punjab-151301</p>
                                                        </div>  
                                                    </div>   
                                                </div>
                                            </div>
                                            </div>
                                        </div>
                                    </div>
                                    <li><Link to='/searchall' className="glyphicon glyphicon-gift">ShopMore</Link></li>
                                </ul>
                                <ul className="nav navbar-nav navbar-right" id="signin">
                                <li><span className="glyphicon glyphicon-log-in" data-toggle="modal" data-target="#Login">Sign-In</span></li>
                                    <div id="Login" className="modal fade" role="dialog">
                                        <div className="modal-dialog">
                                            <div className="modal-content">    
                                                <button type="button" className="close" data-dismiss="modal">&times;</button>
                                                <center><h3>Love Handi-Crafts.Com </h3></center>
                                            <div className="modal-body">
                                                <div id="loginhere">
                                                    <center><span className="loghead" text-align="center">Login</span>
                                                    <div className="logindetails">
                                                    <br/>
                                                        <p>Email Id!</p>
                                                        <input placeholder="User Name" className="form-control" name="email" value={this.state.email} onChange={this.handleChange}/>
                                                        <p>Password</p>
                                                        <input placeholder="Password" className="form-control" type="password" name="password" value={this.state.password} onChange={this.handleChange}/>
                                                        <br/>
                                                    </div>
                                                    <button type="button" className="btn btn-warning btn-block" onClick={this.handleSubmit}>Submit</button>   
                                                    
                                                    </center>
                                                </div>
                                                <div id="mySlider" className="carousel slide" data-ride="carousel">
                                                    <ol className="carousel-indicators">
                                                        <li data-target="#mySlider" data-slide-to="0"></li>
                                                        <li data-target="#mySlider" data-slide-to="1"></li>
                                                        <li data-target="#mySlider" data-slide-to="2"></li>
                                                        <li data-target="#mySlider" data-slide-to="3"></li>
                                                        <li data-target="#mySlider" data-slide-to="4"></li>
                                                        <li data-target="#mySlider" data-slide-to="5"></li>
                                                        <li data-target="#mySlider" data-slide-to="6"></li>
                                                    </ol>
                                                    <div className="carousel-inner">
                                                        <div className="item active">
                                                            <img src="https://i.ibb.co/48LwqDz/planter16.webp" className="craftimage" alt=""/>
                                                        </div>
                                                        <div className="item">
                                                            <img src="https://i.ibb.co/MNdVZyc/planter5.webp" className="craftimage" alt=""/>
                                                        </div>
                                                        <div className="item">
                                                            <img src="https://i.ibb.co/Lh6gNxX/unique2.jpg" className="craftimage" alt=""/>
                                                        </div>
                                                        <div className="item">
                                                            <img src="https://i.ibb.co/tDkw8nW/hanging1.jpg" className="craftimage" alt=""/>
                                                        </div>
                                                        <div className="item">
                                                            <img src="https://i.ibb.co/tmGx3yV/girls.jpg" className="craftimage" alt=""/>
                                                        </div>
                                                        <div className="item">
                                                            <img src="https://i.ibb.co/zHR53F2/planter12.webp" className="craftimage" alt=""/>
                                                        </div>
                                                        <div className="item">
                                                            <img src="https://i.ibb.co/2kMH6Xz/sparow.jpg" className="craftimage" alt=""/>
                                                        </div>
                                                    </div>
                                                    <a className="left carousel-control" href="#mySlider" data-slide="prev">
                                                        <span className="glyphicon glyphicon-chevron-left"></span>
                                                    </a>
                                                    <a className="right carousel-control" href="#mySlider" data-slide="next">
                                                        <span className="glyphicon glyphicon-chevron-right"></span>
                                                    </a>
                                                </div>
                                            </div>
                                            </div>
                                        </div>
                                    </div>
                                
                                <li><Link to="/register" className="glyphicon glyphicon-user">Sign-Up</Link></li>
                                </ul>
                                <ul><center>
                                <li><input className="searchbar" type="text" placeholder="Search..." /></li>
                                </center></ul>
                            </div>
                        </div>
                    </nav>
                </Fragment>
            </>
        )
    }
    componentDidMount(){
        fetch(url,{
            method:'GET',
            headers:{
                'x-access-token':localStorage.getItem('ltk')
            }
        })
        .then((res)=>res.json())
        .then((data)=>{
            this.setState({
                userdata:data
            })
        })
    }
}

export default Header;