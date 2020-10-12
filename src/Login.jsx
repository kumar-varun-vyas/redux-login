import React from 'react';
import {connect} from 'react-redux';
import './login.css';

class Login extends React.Component{

  handleSubmit =(e)=>{
    e.preventDefault();
    const loginEmail = this.getEmail.value;
    const loginPassword = this.getPassword.value;

    const data={loginEmail , loginPassword};
    console.log(data);

    // this.props.dispatch({type:'MATCH_DETAILS', data});
    // if(email === this.props.details.)
    console.log(this.props.details.map((detail)=>console.log(detail.email)));
    console.log(this.props.details.map((detail)=>console.log(detail.password)));
    // if((email==(this.props.details.map((detail)=>detail.email)))){
    //   alert('email match');
    //   if((password==(this.props.details.map((detail)=>detail.password)))){
    //     alert('password match')
    //   } else{
    //     alert('password not match')
    //   }
    // }
    // else{
    //   alert(' not match')
    // }
    var dtlEmail = this.props.details.find(detail=>detail.email === loginEmail);
    console.log(dtlEmail);
    var dtlPass = this.props.details.find(detail=>detail.password === loginPassword);
    console.log(dtlPass);

    if(dtlEmail&&dtlPass){
      alert(" match");
    }else{
      alert(" not match");
    }

  }

  render(){
    return(
      <React.Fragment>
      <div className="container">
        <div className ="main-div">
          <h1 className="heading">Login page</h1>
          <form onSubmit = {this.handleSubmit}>
           
            <input required type = 'text' ref= {(input) =>this.getEmail = input} placeholder ='enter your email'/>
            <br/>
            <br/>
            <input required type = 'text' ref= {(input) =>this.getPassword = input} placeholder ='enter your password'/>
            <br/>
            <br/>
            <button >Login </button>
            
          </form>
          </div>
          </div>
      </React.Fragment>
    );

  }
}
const mapStateToProps= (state)=>{
  return {
    details : state
  }
}

export default connect(mapStateToProps)(Login);