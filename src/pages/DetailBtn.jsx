import React from "react";
import ReactDOM from 'react-dom';

import './../App.css'

class NewUser extends React.Component {
  constructor (props) {
    super();
    this.state = {
      name: "", email: "", body: "", id:"", user: [] 
    };
  }

  onInputChange = e => {
    //console.log(e.target.value);
    this.setState({ [e.target.name]: e.target.value });
  };


  handleUpdate = e => {
    e.preventDefault();
    const url = "https://jsonplaceholder.typicode.com/comments/" + this.props.id;
    const data = {
      name: this.state.name,
      email: this.state.email,
      body: this.state.body
    };
    // console.log(data.email);
    fetch(url, {
      method: "PUT",
      body: JSON.stringify(data),
      headers: { "Content-Type": "application/json" }
    })
      .then(res => res.json())
      .then(data => this.printFields(data))
      .catch(error => console.log("Error", error))
     .then(response => console.log("‘Success", response));
     //.then(user => this.setState({user}));
  };
  printFields = user => {
    //console.log(result);
    //const { name, email, password, mobile } = result;
    this.setState({ user });
    console.log(this.state.user);
  };




  handleSubmit = e => {
    e.preventDefault();
    const url = "https://jsonplaceholder.typicode.com/comments";
    const data = {
      name: this.state.name,
      email: this.state.email,
      body: this.state.body
    };
    // console.log(data.email);
    fetch(url, {
      method: "POST",
      body: JSON.stringify(data),
      headers: { "Content-Type": "application/json" }
    })
      .then(res => res.json())
      .then(data => this.printFields(data))
      .catch(error => console.log("Error", error))
     .then(response => console.log("‘Success", response));
  };


  
  render () {
    return (
      <>
        {this.props.aaa=='add new user' ? (


          <form className="form1" onSubmit={this.handleSubmit}>
    <div className="form-group">
    <label>New User name</label>
    <input type="text" className="form-control" id="exampleInputPassword1" placeholder="Enter name" name="name" onChange={this.onInputChange} />
  </div>
  <div className="form-group">
    <label>Email address</label>
    <input type="email" className="form-control" id="exampleInputEmail1" aria-describedby="emailHelp" name="email" placeholder="Enter email" onChange={this.onInputChange} />
  </div>
  <div className="form-group">
    <label>Body text</label>
    <input type="text" className="form-control" id="exampleInputPassword1" placeholder="Enter text" name="body" onChange={this.onInputChange} />
  </div>
 
  
  <button type="submit" className="btn btn-primary form-group">Submit</button>
</form>
) :  this.props.aaa == 'Edit' ? (
  
<form className="form1" onSubmit={this.handleUpdate}>
    <div className="form-group">
    <label>New User name</label>
    <input type="text" className="form-control" id="exampleInputPassword1"  name="name" defaultValue={this.props.name} onChange={this.onInputChange} />
  </div>
  <div className="form-group">
    <label>Email address</label>
    <input type="email" className="form-control" id="exampleInputEmail1" aria-describedby="emailHelp" name="email" defaultValue={this.props.email}  onChange={this.onInputChange} />
  </div>
  <div className="form-group">
    <label>Body text</label>
    <input type="text" className="form-control" id="exampleInputPassword1"  name="body" defaultValue={this.props.body} onChange={this.onInputChange} />
  </div>
   
  <button type="submit" className="btn btn-primary form-group">Submit</button>
</form>
) :
""
}
         
      
      </>
    );
  }
}


export default NewUser;
