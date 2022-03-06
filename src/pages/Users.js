import React from "react";
import ReactDOM from 'react-dom';
import ReactModal from 'react-modal';
import NewUser from "./DetailBtn";
import './../App.css'

class Users extends React.Component {
  constructor (props) {
    super();
    this.state = {
      showModal: false
    };
       
    this.handleOpenModal = this.handleOpenModal.bind(this);
    this.handleCloseModal = this.handleCloseModal.bind(this);
  }

 
  handleOpenModal () {
    this.setState({ showModal: true });
  }
  
  handleCloseModal () {
    this.setState({ showModal: false });
  }
  
  render () {
    return (
      <>
        <button className="btn btn1 btn-danger" onClick={this.handleOpenModal}>{this.props.btnname}</button>
        <ReactModal 
           isOpen={this.state.showModal}
           ariaHideApp={false}
           contentLabel="Minimal Modal Example"
        >
          <button className="btn btn1 btn-primary" onClick={this.handleCloseModal}>Close Modal</button>
       <NewUser aaa={this.props.btnname} name={this.props.name} email={this.props.email} body={this.props.body} id={this.props.id} />
         
        </ReactModal>
      </>
    );
  }
}


export default Users;
