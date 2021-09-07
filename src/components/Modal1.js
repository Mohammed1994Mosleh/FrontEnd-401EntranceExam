import React, { Component } from 'react';
import { withAuth0 } from '@auth0/auth0-react';
import Button from 'react-bootstrap/Button';
import Modal from 'react-bootstrap/Modal';


class Modal1 extends Component {
    constructor(props){
        super(props);
        this.state={
      
        }
      }

  



    render() {
        return (
            <div>
                 <Modal show={this.props.showMoadal} >
        <Modal.Header closeButton>
          <Modal.Title>Modal heading</Modal.Title>
        </Modal.Header>
        <Modal.Body>
             <form onSubmit={this.props.Update}>
                 <input type='text' name='title' placeholder='new title' />
                 <input type='text' name='image' placeholder='new title' />
                 <button type='submit' >Update</button>
             </form>


        </Modal.Body>
        <Modal.Footer>
         
          <Button variant="primary" onClick={this.props.closeMoadal}>
            Close
          </Button>
        </Modal.Footer>
      </Modal>
            </div>
        )
    }
}

export default withAuth0(Modal1);



