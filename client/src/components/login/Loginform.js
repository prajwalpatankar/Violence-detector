import React, { Component } from "react";
import { Button, FormGroup, Input} from "reactstrap";

class Loginform extends React.Component {


    state = {
        username: '',
        password: ''
    }


    handleChangeusername = (e) => {
        this.setState({
            username: e.target.value
        });
    };


    handleChangepassword = (e) => {
        this.setState({
            password: e.target.value
        });
    };

    handleSubmit = (e) => {
        e.preventDefault();
        console.log(this.state.username,this.state.password)
    };

    render() {
        return(
            <div className="app-content">
                <form onSubmit={this.handleSubmit}>
                    <FormGroup>
                        <label>Username</label>
                        <input type="text" placeholder="Username" onChange={this.handleChangeusername} required />
                    </FormGroup>
                    <FormGroup>
                        <label>Password</label>
                        <input type="password" placeholder="Password" onChange={this.handleChangepassword}  required />
                    </FormGroup>
                    <br />
                    <button type="submit" className="btn">Login</button>
                </form>


            </div>
        )
    }
}

export default Loginform;

