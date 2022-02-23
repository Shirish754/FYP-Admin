import React, { useEffect, useState } from "react";
import {
    Link
} from "react-router-dom";
import * as FaIcons from 'react-icons/fa';

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
                
                <div className>
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
                    
                </div>
            </section>
            
        </div>
    )
}
