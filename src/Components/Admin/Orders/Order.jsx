import React from 'react'
import {
    Link
} from "react-router-dom";
import * as FaIcons from 'react-icons/fa';
import { ListGroup } from 'react-bootstrap';
import { BsArrowLeft } from "react-icons/bs";
import { Table } from 'reactstrap';

export default function Order() {
    return (
        <div>
            <div>
            
            </div>
                <section>
                <div className="d-flex flex-wrap justify-content-between p-4" style={{background:"#FFFFFF" }}>
                       <div className="d-flex">
                            <h4>Orders</h4>
                            
                        </div> 
                        <div>
                            <button className="btn btn fw-bold  ms-2" style={{background:"#2F80ED" ,color:"#FFFFFF"}}>Create</button> 
                        </div> 
                        
                    </div>
                    <section className='d-flex justify-content-center align-items-center'
                        style={{
                            height: 'auto',
                            fontFamily: 'sans-serif',
                        }}>
                        <div className='d-flex align-items-center justify-content-center p-5'
                            style={{
                            marginTop: '20px',

                            }}>
                            <div className='d-flex justify-content-center col-12 col-sm-6 col-md-12 col-lg-12'>
                            <div className='col-md-12 border border-light p-4' style={{ backgroundColor: '#fff', borderRadius: "25px"}}>
                                <div className='d-flex justify-content-between pb-3'>
                                {/* <ListGroup horizontal className='border-bottom '>
                                        <ListGroup.Item style={{ width: '20%' }} className='border-0 '><p>Text</p></ListGroup.Item>
                                        <ListGroup.Item style={{ width: '25%' }} className='border-0 d-flex flex-column align-items-start '>
                                        <p className='mb-0 d-flex align-items-start'>Product Name</p>
                                        </ListGroup.Item>
                                        <ListGroup.Item style={{ width: '30%' }} className='border-0 d-block my-auto '>
                                        <div className='d-flex '>
                                            <p className='m-1 border p-2'>Quantity </p>
                                        </div>
                                        </ListGroup.Item>
                                        <ListGroup.Item style={{ width: '15%' }} className='border-0 d-flex align-items-center '>Rs. 100</ListGroup.Item> 
                                        <ListGroup.Item style={{ width: '30%' }} className='border-0 d-flex align-items-center '>Action</ListGroup.Item> 
                                        
                                    </ListGroup>  
                                </div>
                                <div className=''>
                                    <ListGroup horizontal className='border-bottom p-3'>
                                        <ListGroup.Item style={{ width: '20%' }} className='border-0 '> <img src="" alt="Product image" style={{ height: "50px", width: "50px", objectFit:"cover" }} /></ListGroup.Item>
                                        <ListGroup.Item style={{ width: '25%' }} className='border-0 d-flex flex-column align-items-start '>
                                        <p className='text-muted mb-0 d-flex align-items-start'><b>Category</b></p>
                                        <p className='mb-0 d-flex align-items-start'>Product Name</p>
                                        </ListGroup.Item>
                                        <ListGroup.Item style={{ width: '30%' }} className='border-0 d-block my-auto '>
                                        <div className='d-flex '>
                                            <p className='m-1 border p-2'>Quantity </p>
                                        </div>
                                        </ListGroup.Item>
                                        <ListGroup.Item style={{ width: '15%' }} className='border-0 d-flex align-items-center '>Rs. 100</ListGroup.Item> 
                                    </ListGroup> */}
                               <Table hover>
        <thead className=''>
          <tr>
            <th>#</th>
            <th>First Name</th>
            <th>Last Name</th>
            <th>Username</th>
          </tr>
        </thead>
        <tbody>
          <tr>
            <th scope="row">1</th>
            <td>Mark</td>
            <td>Otto</td>
            <td>@mdo</td>
          </tr>
          <tr>
            <th scope="row">2</th>
            <td>Jacob</td>
            <td>Thornton</td>
            <td>@fat</td>
          </tr>
          <tr>
            <th scope="row">3</th>
            <td>Larry</td>
            <td>the Bird</td>
            <td>@twitter</td>
          </tr>
        </tbody>
      </Table>

                                </div>
                                
                                <div className='pt-5'>
                                <p> <BsArrowLeft /> Back to Shop</p>
                                </div>
                            </div>

                            </div>
                        </div>
                        
                    </section>

                </section>
                
        </div>
    )
}
