
import React from 'react'
import { Modal } from 'react-bootstrap'

export default function EditUser(props) {
  return (
    <div>
        <Modal show={props.open} onHide={() => { props.onClose() }} centered>
            <Modal.Header closeButton>
                <Modal.Title>Edit Users</Modal.Title>
            </Modal.Header>
           
            <Modal.Body>
            <form className=''>
                <div class="form-group mb-1">
                    <label for="exampleInputEmail1">User Name</label>
                    <input type="email" class="form-control" placeholder="Enter email"/>
                    
                </div>

                <div class="form-group mb-1">
                    <label for="exampleInputEmail1">Contact</label>
                    <input type="email" class="form-control" placeholder="Enter email"/>
                    
                </div>

                <div class="form-group mb-1">
                    <label for="exampleInputEmail1">Address</label>
                    <input type="email" class="form-control" placeholder="Enter email"/>
                    
                </div>

                <div class="form-group mb-1">
                    <label for="exampleInputEmail1">Email</label>
                    <input type="email" class="form-control" placeholder="Enter email"/>
                </div>

                <div class="form-group mb-1">
                    <label for="exampleInputEmail1">Password</label>
                    <input type="boolean" class="form-control" placeholder="Enter email"/>
                </div>

                <div class="form-group mb-1">
                    <label for="exampleInputEmail1">Role</label>
                    <select value={props.user.role} class="custom-select mr-sm-2" id="inlineFormCustomSelect" className="ms-2 form-control">
                        <option value="customer">Customer</option>
                        <option value="admin">Admin</option>  
                   </select>
                </div>

                
               
                <button type="submit" class="btn btn-primary">Submit</button>
                </form>
            </Modal.Body>

        </Modal>
    </div>
  )
}
