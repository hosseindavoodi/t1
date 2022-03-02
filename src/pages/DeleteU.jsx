
import React from "react";
import { Component } from "react";

class DeleteU extends Component {
  state = {  } 
  componentDelete(id) {
    fetch('https://jsonplaceholder.typicode.com/comments/' + id, { method: 'DELETE' })
    .then(() => this.setState({ }))
    .then(response => console.log("‘Success", id, response));
  }
 
  render() { 
    return (
      <button className="btn btn1 btn-primary" onClick={() => this.componentDelete(this.props.id)}>Delete</button>
    );
  }
}
 
export default DeleteU;
