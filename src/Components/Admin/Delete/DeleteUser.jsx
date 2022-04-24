import React from 'react'
import { Modal } from 'react-bootstrap'
import swal from 'sweetalert';
import { baseUrl } from '../../baseUrl';

export default function DeleteUser(props) {

  const deleteUser=async(e)=>{
    e.preventDefault();
    var formData = new FormData();
    formData.append('customerId',props.id);
    // formData.append('customerId',JSON.parse(localStorage.getItem('hamrovet-admin-token')).customerId);
    await fetch(baseUrl+'user/deleteUser.php',{
      method:'POST',
      body:formData,
    })
    .then(res=>res.json())
    .then(res=>{
      if(res){
        swal("Customer Deleted Successfully", "", "success").then(()=>{
          window.location.reload(true);
        });
        // alert('User Deleted Successfully');
        // window.location.reload(true);
      }else{
        swal("Something went wrong", "", "error");
        // alert('Something went wrong');
      }
    }
    )
    .catch(e=>
      swal("Something went wrong", "", "error"))
      
      // alert('Something went wrong!'))
  }

  return (
    <div>
        <Modal show={props.open} onHide={() => { props.onClose() }} centered>
        <Modal.Header closeButton>
            <Modal.Title>Delete Customer?</Modal.Title>
        </Modal.Header>
        <Modal.Body>
        <form onSubmit={deleteUser}>
            <p>Are you sure?</p>
            <div className ="d-flex justify-content-between">
            <button className=" btn btn fw-bold  ms-2 bg-danger text-white">Cancel</button>
            <button type="submit" className=" btn btn fw-bold  ms-2 bg-primary text-white">Yes</button>
            </div>
            
        </form>
        </Modal.Body>

    </Modal>
    </div>
  )
}
