import './login.css';
import React from 'react';
import Card from '@mui/material/Card'
import CardActions from '@mui/material/CardActions';
import CardContent from '@mui/material/CardContent';
import Button from '@mui/material/Button';
import TextBox from '../../core/textField/textField';
import { Component } from 'react';
import axios from 'axios';
import * as AppCostants from '../../helpers/AppCostants'
import { Navigate } from 'react-router-dom';
import { Outlet, Link } from "react-router-dom";
// import Button from '../../core/button/button';



class Login extends Component {

  constructor(props){
      super(props);
      this.onChangeUsername= this.onChangeUsername.bind(this);
      this.onChangePassword= this.onChangePassword.bind(this)
      this.onSubmit = this.onSubmit.bind(this);
      
      this.state ={
        username: '',
        password:'',
      }
    }
      
    onChangeUsername(e){
      this.setState({
        username:e.target.value
      });
      console.log(this.state.username)
    }
      
    onChangePassword(e){
      this.setState({
        password:e.target.value
      });
    }

    onSubmit(e){
      e.preventDefault();
      const obj ={
        username:this.state.username,
        password:this.state.password,
      };
      console.log(obj);
      axios.post(AppCostants.BackendService + "/login-user.php", obj)
      .then(res=> console.log(res.data))
      .catch(error=> {
          console.log(error.response)
      });

      this.setState({
          username:"",
          password:'',
      })
      
    }

    render(){
      return (
        <div className="card">
        <Card className="cardStyle" >
          <CardContent>
            <div className="signupText">LOGIN</div>
      
            <TextBox label="Username" 
                    value={this.state.name} 
                    onChange={this.onChangeUsername}/>
                    
            <TextBox label="Password" 
                    value={this.state.password} 
                    onChange={this.onChangePassword}/>
            </CardContent>
      
          <CardActions className="CardActions" >
            <Button style={{background:'black',color:'white'}} onClick={this.onSubmit}> LOGIN</Button>
          </CardActions>

          <div>
          <CardActions className="CardActions" >
            <Link style={{background:'white',color:'black'}} to="/signup">SignUp</Link>
          </CardActions>
          </div>
        </Card>
        </div>
      );
  }
}

export default Login;