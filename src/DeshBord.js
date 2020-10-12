import React from 'react';
import {connect} from 'react-redux'
import Details from './Details'


class Deshbord extends React.Component{

  render(){
    return(
      <div style={{ background: "white" }} >
     
      <h1>Deshbord conponent</h1>
      {this.props.details.map((detail) => <Details key={detail.id} detail={detail} />)}
      </div>
      
    );
  }

}
const mapStateToProps = (state) => {
  return {
      details: state
  }
}
export default connect(mapStateToProps)(Deshbord);