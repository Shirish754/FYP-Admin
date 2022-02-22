import React from 'react'
import { Modal } from 'react-bootstrap'
import { baseUrl } from '../../baseUrl'

export default function DeleteProduct(props) {


    const deleteProduct=async(e)=>{
        e.preventDefault();
        var formdata = new FormData();
        formdata.append("id", props.id);
        formdata.append("customerId", JSON.parse(localStorage.getItem('hamrovet-admin-token')).customerId);
        await fetch(baseUrl+'products/deleteProducts.php',{
            method:'POST',
            body:formdata,
        })
        .then(res=>res.json())
        .then(res=>{
            if(res){

                alert('Product Deleted Successfully');
                window.location.reload(true);
            }else{
                alert('Something went wrong');
            }
        })
        .catch(e=>alert('Something went wrong!'))
    }

    return (
        <div>
            <Modal show={props.open} onHide={() => { props.onClose() }} centered>
            <Modal.Header closeButton>
                <Modal.Title>Delete Product?</Modal.Title>
            </Modal.Header>
            <Modal.Body>
            <form onSubmit={deleteProduct}>
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
