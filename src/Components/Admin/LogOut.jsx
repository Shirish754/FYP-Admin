import React from 'react'
import { Modal } from "react-bootstrap";

export default function LogOut(props) {
    
    return (
        <div>
            <div>
                <Modal show={props.open} onHide={() => { props.onClose() }} centered>
            <Modal.Header closeButton>
                <Modal.Title>LogOut</Modal.Title>
            </Modal.Header>
            <Modal.Body>
            <form >
                <p>Are you sure?</p>
                <div className ="d-flex justify-content-between">
                <button className=" btn btn fw-bold  ms-2 bg-danger text-white">Cancel</button>
                <button className=" btn btn fw-bold  ms-2 bg-primary text-white" onClick={() => { localStorage.removeItem('hamrovet-admin-token'); window.location.reload(true); } }>Yes</button>
                </div>
                
            </form>
            </Modal.Body>

        </Modal>
            </div>
            

        </div>
    )
}
