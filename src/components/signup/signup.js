import './signup.css';
import React from 'react';
import Card from '@mui/material/Card'
import CardActions from '@mui/material/CardActions';
import CardContent from '@mui/material/CardContent';
import Button from '@mui/material/Button';
import TextBox from '../../core/textField/textField';
import { Component } from 'react';
import axios from 'axios';
import * as AppCostants from '../../helpers/AppCostants'


class Signup extends Component {

  constructor(props){
      super(props);
      this.onChangeUsername= this.onChangeUsername.bind(this);
      this.onChangeEmail= this.onChangeEmail.bind(this);
      this.onChangePassword= this.onChangePassword.bind(this);
      this.onChangepasswordConfirm= this.onChangepasswordConfirm.bind(this);
      this.onSubmit = this.onSubmit.bind(this);
      
      this.state ={
        username: '',
        email:'',
        password:'',
        passwordConfirm:'',
      }
    }
      
    onChangeUsername(e){
      this.setState({
        username:e.target.value
      });
      console.log(this.state.username)
    }
      
    onChangeEmail(e){
      this.setState({
        email:e.target.value
      });
    }
      
    onChangePassword(e){
      this.setState({
        password:e.target.value
      });
    }
      
    onChangepasswordConfirm(e){
      this.setState({
        passwordConfirm:e.target.value
      });
    }
      
    onSubmit(e){
      e.preventDefault();
      const obj ={
        username:this.state.username,
        email:this.state.email,
        password:this.state.password,
        passwordConfirm:this.state.passwordConfirm,
      };
      console.log(obj);
      axios.post(AppCostants.BackendService + "/insert-user.php", obj)
      .then(res=> console.log(res.data))
      .catch(error=> {
          console.log(error.response)
      });

      this.setState({
          username:"",
          email:"",
          password:'',
          passwordConfirm:'',
      })
      
    }

    render(){
      return (
        <div className="card">
        <Card className="cardStyle" >
          <CardContent>
            <div className="signupText">SIGNUP</div>
      
            <TextBox label="Username" 
                    value={this.state.name} 
                    onChange={this.onChangeUsername}/>
      
            <TextBox label="Email"  
                    value={this.state.email} 
                    onChange={this.onChangeEmail}/>
                    
            <TextBox label="Password" 
                    value={this.state.password} 
                    onChange={this.onChangePassword}/>
      
            <TextBox label="Confirm Password" 
                    value={this.state.passwordConfirm} 
                    required= {true}
                    onChange={this.onChangepasswordConfirm}/>
      
            </CardContent>
      
          <CardActions className="CardActions" >
            <Button style={{background:'black',color:'white'}} onClick={this.onSubmit}> SIGNUP</Button>
          </CardActions>
      
        </Card>
        </div>
      );
  }
}

export default Signup;