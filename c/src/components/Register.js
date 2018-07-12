//Register.js
import React, { Component } from 'react'
import axios from 'axios';

export default class Register extends Component {
    constructor(props){
        super(props);
        this.state = {
            data:{
                name:'',
                email:'',
                password:'',
                con_password:'',
        
               
            },
            error:{
                email:'',
                password:'',
                con_password:'',
          
            },
            success: ''
        }
        this.handleChange = this.handleChange.bind(this);
        this.handleSubmit = this.handleSubmit.bind(this);
    }


    handleChange(element){
        var formData = this.state.data;
        formData[element.target.name] = element.target.value;
        this.setState({
            data : formData
        });
        if (this.state.data.email) {
            this.setState({
                errorEmail: ""
            });
        };
        if (this.state.data.name) {
            this.setState({
                errorName: ""
            });
        };
        if (this.state.data.password) {
            this.setState({
                errorPassword: ""
            });
        };
        if (this.state.data.con_password) {
            this.setState({
                errorCon_Password: ""
            });
        };
        if (this.state.data.con_password === this.state.data.password) {
            this.setState({
                errorPasswordMatch: ""
            });
        };
    }


handleSubmit(event){

     event.preventDefault();
     
//////////////////////
if (!this.state.data.email || !this.state.data.password || !this.state.data.name || !this.state.data.password || !this.state.data.con_password || (this.state.data.con_password !== this.state.data.password)) {
    if (!this.state.data.email) {
        this.setState({
            errorEmail: "email should not be empty"
        });
    };
    if (!this.state.data.name) {
        this.setState({
            errorName: "name should not be empty"
        });
    };
    if (!this.state.data.password) {
        this.setState({
            errorPassword: "password should not be empty"
        });
    };
    if (!this.state.data.con_password) {
        this.setState({
            errorCon_Password: "password should not be empty"
        });
    };
    
   if (this.state.data.con_password !== this.state.data.password) {
       this.setState({
                   errorPasswordMatch: "Password and password confirmation are not match"
     }
    );
    };
} else {
    this.setState({
        errorName: ""
    });
    this.setState({
        errorEmail: ""
    });
    this.setState({
        errorPassword: ""
    });
    this.setState({
        errorCon_Password: ""
    });
    this.setState({
        errorPasswordMatch: ""
    });
    this.setState({
        success: "Thank you for joining us"
    });
    window.location.href = "/home" //this is to forward to home page when register successfully
}
        console.log(this.state)
        let _this = this
        axios.post('http://localhost:8000/api/register', this.state.data)
        .then( res => {
            console.log('res', res);
        }).catch(error => { console.log(error)})
    }


    render() { 
        return ( 
            <div>
                <h1>Register</h1>
                <form onSubmit={this.handleSubmit}> 
                    <div className="form-group">
                        <label htmlFor="exampleInputname">Full Name</label>
                        <input type="text" name="name" value={this.state.data.name} onChange={this.handleChange} className="form-control" id="exampleInputname"  placeholder="Full Name" />
                      <h3 className="text-danger">{this.state.errorName}</h3>
                    </div>
                    <div className="form-group">
                        <label htmlFor="exampleInputEmail1">Email address</label>
                        <input type="text" name="email" value={this.state.data.email} onChange={this.handleChange} className="form-control" id="exampleInputEmail1" aria-describedby="emailHelp" placeholder="Enter email" />
                        <h3 className="text-danger">{this.state.errorEmail}</h3>
                    </div>
                    <div className="form-group">
                        <label htmlFor="exampleInputPassword1">Password</label>
                        <input type="password" name="password" value={this.state.data.password} onChange={this.handleChange} className="form-control" id="exampleInputPassword1" placeholder="Password" />
                        <h3 className="text-danger">{this.state.errorPassword}</h3>
                    </div>
                    <div className="form-group">
                        <label htmlFor="exampleInputConfirmationPassword">Confirm Password</label>
                        <input type="password" name="con_password" value={this.state.data.con_password} onChange={this.handleChange} className="form-control" id="exampleInputConfirmationPassword" placeholder="Confirm Password" />
                        <h3 className="text-danger">{this.state.errorCon_password}</h3>
                           <h3 className="text-danger">{this.state.errorPasswordMatch}</h3>
                    </div>
                    <button type="submit" className="btn btn-primary">Submit</button>
                </form>
        {this.state.success === '' ?<p></p> : <p className='text-success'>{this.state.success}</p> }
            </div>
         )
    }
}

















