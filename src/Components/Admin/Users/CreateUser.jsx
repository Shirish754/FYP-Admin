import React from 'react'
import { Modal } from 'react-bootstrap'

export default function CreateUser(props) {
  return (
    <div>
        <Modal show={props.open} onHide={() => { props.onClose() }} centered>
            <Modal.Header closeButton>
                <Modal.Title>Create Orders</Modal.Title>
            </Modal.Header>
           
            <Modal.Body>
            <form className=''>
                <div class="form-group mb-1">
                    <label for="exampleInputEmail1">User Name</label>
                    <input type="email" class="form-control" id="exampleInputEmail1" aria-describedby="emailHelp" placeholder="Enter email"/>
                    
                </div>

                <div class="form-group mb-1">
                    <label for="exampleInputEmail1">Contact</label>
                    <input type="email" class="form-control" id="exampleInputEmail1" aria-describedby="emailHelp" placeholder="Enter email"/>
                    
                </div>

                <div class="form-group mb-1">
                    <label for="exampleInputEmail1">Address</label>
                    <input type="email" class="form-control" id="exampleInputEmail1" aria-describedby="emailHelp" placeholder="Enter email"/>
                    
                </div>

                <div class="form-group mb-1">
                    <label for="exampleInputEmail1">Email</label>
                    <input type="email" class="form-control" id="exampleInputEmail1" aria-describedby="emailHelp" placeholder="Enter email"/>
                </div>

                <div class="form-group mb-1">
                    <label for="exampleInputEmail1">Password</label>
                    <input type="boolean" class="form-control" id="exampleInputEmail1" aria-describedby="emailHelp" placeholder="Enter email"/>
                </div>

                <div class="form-group mb-1">
                    <label for="exampleInputEmail1"> Confirm Password</label>
                    <input type="boolean" class="form-control" id="exampleInputEmail1" aria-describedby="emailHelp" placeholder="Enter email"/>
                </div>

                <div class="form-group mb-1">
                    <label for="exampleInputEmail1">Role</label>
                    <input type="boolean" class="form-control" id="exampleInputEmail1" aria-describedby="emailHelp" placeholder="Enter email"/>
                </div>

                
               
                <button type="submit" class="btn btn-primary">Submit</button>
                </form>
            </Modal.Body>

        </Modal>
    </div>
  )
}
