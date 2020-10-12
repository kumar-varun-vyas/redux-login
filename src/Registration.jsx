import React from 'react';
import {connect} from 'react-redux';
import './login.css';

class Registration extends React.Component{

  handleSubmit=(e)=>{

    e.preventDefault();
    const firstName = this.getFirstName.value;
    const lastName = this.getLastName.value;
    const email = this.getEmail.value;
    const password = this.getPassword.value;

    const data= {id: new Date(), firstName, lastName,email,password }
    console.log(data);

    this.props.dispatch({
      type:'ADD_DETAILS', data
    });
  this.getFirstName.value='';
  this.getLastName.value='';
  this.getEmail.value='';
  this.getPassword.value='';
  alert("submited");

  }


  render(){
    return(
      <React.Fragment>
      <div className="container">
      <div className="main-div">
          <h1>Registration page</h1>
          <form onSubmit={this.handleSubmit}>
            <input required type = 'text' ref={(input)=>{this.getFirstName = input}} placeholder ="enter your first name" />
            <br/>
            <br/>
            <input required type = 'text' ref={(input)=>{this.getLastName = input}} placeholder ="enter your last name" />
            <br/>
            <br/>
            <input required type = 'text'  ref={(input)=>{this.getEmail = input}} placeholder ='enter your email'/>
            <br/>
            <br/>
            <input required type = 'text'  ref={(input)=>{this.getPassword = input}} placeholder ='enter your password'/>
            <br/>
            <br/>
            <button>Registration </button>
           
          </form>
          </div>
          </div>
      </React.Fragment>
    );

  }
}

export default connect()(Registration);