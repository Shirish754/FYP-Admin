
import {useEffect, useState} from 'react'
import { Modal } from 'react-bootstrap'
import { baseUrl } from '../../baseUrl';
import swal from 'sweetalert'; 

export default function EditOrders(props) {

    const [status, setStatus] = useState();
    const [paid, setPaid] = useState();


    useEffect(()=>{
        setStatus(props.order.status);
        setPaid(props.order.isPaid);
    },[])


    const editOrder =async(e)=>{
        e.preventDefault();
        var formData = new FormData();
        formData.append('orderId',props.order.OrderId);
        formData.append('status',status);
        formData.append('paid', paid);
        
        await fetch(baseUrl + 'orders/editOrder.php',{
            method:"POST",
            body:formData
        })
        .then(res=>res.json())
        .then((res)=>{
            if(res === true){
                swal("Order Edited Successfully", "", "success");
                // alert('Order Updated Successfully');
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
            <Modal.Header closeButton>
                <Modal.Title>Edit Orders {status} {paid} {props.order.OrderId}</Modal.Title>
            </Modal.Header>
           
            <Modal.Body>
            <form className='' onSubmit={editOrder}>

                <div class="form-group mb-1">
                <label class="mr-sm-2" for="inlineFormCustomSelect">Status</label>
                <select value={status} onChange={(e)=>{setStatus(e.target.value);}} class="custom-select mr-sm-2" id="inlineFormCustomSelect" className="ms-2 form-control">
                    <option value="pending">Pending</option>
                    <option value="delivered">Delivered</option>
                    
                </select>
                    
                </div>

                <div class="form-group mb-1">
                    <label for="exampleInputEmail1">isPaid</label>
                    <select value={paid} onChange={(e)=>{setPaid(e.target.value);}} class="custom-select mr-sm-2" id="inlineFormCustomSelect" className="ms-2 form-control">
                        <option value="1">Paid</option>
                        <option value="0">Pending</option>  
                   </select>
                    
                </div>

               
                <button type="submit" class="btn btn-primary">Submit</button>
                </form>
            </Modal.Body>

        </Modal>
    </div>
  )
}
