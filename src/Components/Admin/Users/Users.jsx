import React, { useEffect, useState } from "react";
import {
    Link
} from "react-router-dom";
import * as FaIcons from 'react-icons/fa';
import { BsArrowLeft } from "react-icons/bs";
import { ListGroup } from "react-bootstrap";

export default function Users() {
    return (
        <div>
            <section>
            
                    <div className="d-flex flex-wrap justify-content-between p-4" style={{background:"#FFFFFF" }}>
                       <div className="d-flex">
                            <h4>Customers</h4>
                            
                        </div> 
                        <div>
                            <button className="btn btn fw-bold  ms-2" style={{background:"#2F80ED" ,color:"#FFFFFF"}}>Create</button> 
                        </div> 
                        
                    </div>
                
                {/* <div className ="mt-4 bg-white">
                    <table className="table">
                        <thead>
                        <tr>
                            <th scope="col">Customers</th>
                            <th scope="col">UserId</th>
                            <th scope="col">EmailId</th>
                            <th scope="col">Contacts</th>
                            <th scope="col">Address</th>
                            <th scope="col">Action</th>

                        </tr>
                        </thead>
                        <tbody>
                        <tr>
                            <th scope="row">1</th>
                            <td>Mark</td>
                            <td>Otto</td>
                            <td>@mdo</td>
                            <td>tcguy</td>
                            <td>tcguy</td>
                        </tr>
                        <tr>
                            <th scope="row">2</th>
                            <td>Jacob</td>
                            <td>Thornton</td>
                            <td>@fat</td>
                            <td>tcguy</td>
                            <td>tcguy</td>
                        </tr>
                        <tr>
                            <th scope="row">3</th>
                            <td>Larry</td>
                            <td>the Bird</td>
                            <td>@twitter</td>
                            <td>tcguy</td>
                            <td>tcguy</td>
                        </tr>
                        </tbody>
                    </table>
                    
                </div> */}

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
                            <div className='col-md-12 border border-light p-4 m-4' style={{ backgroundColor: '#fff', borderRadius: "25px"}}>
                                <div className='d-flex justify-content-between '>
                                <ListGroup horizontal className='border-bottom '>
                                        <ListGroup.Item style={{ width: '20%' }} className='border-0 d-flex align-items-center '><b>CustomerId</b></ListGroup.Item>
                                        <ListGroup.Item style={{ width: '25%' }} className='border-0 d-flex align-items-center '><b>UserName</b></ListGroup.Item>
                                        <ListGroup.Item style={{ width: '30%' }} className='border-0 d-flex align-items-center'><b>Contact </b></ListGroup.Item>
                                        <ListGroup.Item style={{ width: '15%' }} className='border-0 d-flex align-items-center'><b>Address</b></ListGroup.Item> 
                                        <ListGroup.Item style={{ width: '30%' }} className='border-0 d-flex align-items-center'><b>Email</b></ListGroup.Item> 
                                        <ListGroup.Item style={{ width: '30%' }} className='border-0 d-flex align-items-center '><b>Role</b></ListGroup.Item> 
                                        <ListGroup.Item style={{ width: '30%' }} className='border-0 d-flex align-items-center'><b>Action</b></ListGroup.Item> 
                                        
                                    </ListGroup>  
                                </div>
                                <div className=''>
                                    <ListGroup horizontal className='border-bottom'>
                                    <ListGroup.Item style={{ width: '20%' }} className='border-0 d-flex align-items-center'>CustomerId</ListGroup.Item>
                                        <ListGroup.Item style={{ width: '25%' }} className='border-0 d-flex align-items-center '>UserName</ListGroup.Item>
                                        <ListGroup.Item style={{ width: '30%' }} className='border-0 d-flex align-items-center'>Contact </ListGroup.Item>
                                        <ListGroup.Item style={{ width: '15%' }} className='border-0 d-flex align-items-center '>Address</ListGroup.Item> 
                                        <ListGroup.Item style={{ width: '30%' }} className='border-0 d-flex align-items-center '>Email</ListGroup.Item> 
                                        <ListGroup.Item style={{ width: '30%' }} className='border-0 d-flex align-items-center'>Role</ListGroup.Item> 
                                        <ListGroup.Item style={{ width: '30%' }} className='border-0 d-flex align-items-center'>
                                            <button className="btn btn-danger m-1">Del</button>
                                            <button className="btn btn-warning m-1 text-white">Edit</button>
                                            
                                        </ListGroup.Item> 
                                    </ListGroup>
                               

                                </div>
                                
                                <div className='pt-5'>
                                <p> <BsArrowLeft /> Back to Products</p>
                                </div>
                            </div>

                            </div>
                        </div>
                        
                    </section>


            </section>
            
        </div>
    )
}
