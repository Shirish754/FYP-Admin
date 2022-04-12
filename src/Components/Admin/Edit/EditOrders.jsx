
import React from 'react'
import { Modal } from 'react-bootstrap'

export default function EditOrders(props) {


  return (
    <div>
        <Modal show={props.open} onHide={() => { props.onClose() }} centered>
            <Modal.Header closeButton>
                <Modal.Title>Edit Orders</Modal.Title>
            </Modal.Header>
           
            <Modal.Body>
            <form className=''>

                <div class="form-group mb-1">
                <label class="mr-sm-2" for="inlineFormCustomSelect">Status</label>
                <select value={props.order.status} class="custom-select mr-sm-2" id="inlineFormCustomSelect">
                    <option value="pending">Pending</option>
                    <option value="delivered">Delivered</option>
                    
                </select>
                    
                </div>

                <div class="form-group mb-1">
                    <label for="exampleInputEmail1">isPaid</label>
                    <select value={props.order.isPaid}class="custom-select mr-sm-2" id="inlineFormCustomSelect">
                        <option value="paid">Paid</option>
                        <option value="pending">Pending</option>  
                   </select>
                    
                </div>

               
                <button type="submit" class="btn btn-primary">Submit</button>
                </form>
            </Modal.Body>

        </Modal>
    </div>
  )
}
