import React from 'react'
import { Modal } from 'react-bootstrap'
import { baseUrl } from '../../baseUrl';
import swal from 'sweetalert';

export default function DeleteOrders(props) {

  const deleteOrder =async(e)=>{
    e.preventDefault();
    var formData = new FormData();
    formData.append('orderId',props.order.OrderId);
    
    await fetch(baseUrl + 'orders/deleteOrder.php',{
        method:"POST",
        body:formData
    })
    .then(res=>res.json())
    .then((res)=>{
        if(res === true){
            swal("Order Deleted Successfully", "", "success");
            // alert('Order Deleted Successfully');
            props.onClose();
            props.onSuccess();
        }
        else{
            swal("Something went wrong", "", "error");
            // alert('Something went wrong');
        }
    })

}
  return (
    <div>
      <Modal show={props.open} onHide={() => { props.onClose() }} centered>
        <Modal.Header closeButton >
            <Modal.Title>Delete Orders</Modal.Title>
        </Modal.Header>
        <Modal.Body>
            <form onSubmit={deleteOrder}>
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
