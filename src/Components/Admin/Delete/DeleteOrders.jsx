import React from 'react'
import { Modal } from 'react-bootstrap'

export default function DeleteOrders(props) {
  return (
    <div>
      <Modal show={props.open} onHide={() => { props.onClose() }} centered>
        <Modal.Header closeButton >
            <Modal.Title>Delete Orders</Modal.Title>
        </Modal.Header>
        <Modal.Body>
            <form>
                <p>Are you sure?</p>
                <div className ="d-flex justify-content-between">
                <button className=" btn btn fw-bold  ms-2 bg-danger text-white">Cancel</button>
                <button className=" btn btn fw-bold  ms-2 bg-primary text-white">Yes</button>
                </div>
                
            </form>
        </Modal.Body>
      </Modal>
    </div>
  )
}
