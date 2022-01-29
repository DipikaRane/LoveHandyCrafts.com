import React,{Component} from 'react';

const RegisterUrl="https://myfirstzomatologin.herokuapp.com/api/auth/Register";

class Register extends Component{
    constructor(props){
        super(props)
        this.state={
            name:'',
            phone:'',
            email:'',
            password:''
        }
    }

    handleSubmit=()=>{
        var num=document.getElementById('phnum').value;
        var fname=document.getElementById('fname').value;
        var emailId=document.getElementById('emailId').value;
        var pwd=document.getElementById('pwd').value;
        if(num.trim().length==10 && fname.trim().length!=0 && emailId.trim().length!=0 && pwd.trim().length!=0){
            fetch(RegisterUrl,{
                method:'POST',
                headers:{
                    'accept':'application/json',
                    'content-type':'application/json'
                },
                body:JSON.stringify(this.state)
            })
            .then(this.props.history.push('/'))
        }else{
            document.getElementById('fout').innerText="Please Fill-up Complete Form!";
            
        }
    }

    handleChange=(event)=>{
        this.setState({[event.target.name]:event.target.value})
    }
    render(){
        return(
            <>
               
                <div className="container">
                <div className="panel panel-primary">
                    <div className="panel-heading">
                        <span>Registration Form</span>
                    </div>
                    <div className="panel-body">
                    <div className="row">
                            <div className="col-md-12">
                                <div className="col-md-6">
                                        <div className="form-group">
                                            <label>Name</label>
                                            <input className="form-control" id="fname" name="name" value={this.state.name} onChange={this.handleChange} required/>
                                        </div>
                                    </div>
                                    <div className="col-md-6">
                                        <div className="form-group">
                                            <label>Email</label>
                                            <input className="form-control" type="email" id="emailId" name="email" value={this.state.email} onChange={this.handleChange} required/>
                                        </div>
                                    </div>
                                    <div className="col-md-6">
                                        <div className="form-group">
                                            <label>Phone</label>
                                            <input className="form-control" id="phnum" name="phone" value={this.state.phone} onChange={this.handleChange}/>
                                        </div>
                                    </div>
                                    <div className="col-md-6">
                                        <div className="form-group">
                                            <label>Password</label>
                                            <input className="form-control" id="pwd" name="password" value={this.state.password} onChange={this.handleChange} required/>
                                        </div>
                                    </div>
                                </div>
                                <center>
                                <button className="btn btn-warning" onClick={this.handleSubmit}>
                                    SIGN-UP
                                </button>
                                <p id="fout"></p>
                                </center>
                            </div>
                    </div>
                        
                    </div>
                </div>
            </>
        )
    }
}
export default Register;