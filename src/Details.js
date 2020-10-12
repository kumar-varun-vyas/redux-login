import React from 'react';
import {connect} from 'react-redux';


class Details extends React.Component {

  render(){
    return(
      <div>
      {/* <h1>id -{this.props.detail.id}</h1> */}
      <h4>new entry</h4>
      <p>id -{this.props.detail.id.toDateString()}{this.props.detail.id.toTimeString()}</p>
     
      <p>First Name -{this.props.detail.firstName}</p>
      <p>Last Name -{this.props.detail.lastName}</p>
      <p>Email - {this.props.detail.email}</p>
      <p>password - {this.props.detail.password}</p>
      
      <button 
      onClick={()=>this.props.dispatch({type:'DELETE',id:this.props.detail.id})}>
      Delete</button>
      </div>
    )
  }

}
export default connect()(Details);