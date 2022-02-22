import React from 'react'
import {
    Link
} from "react-router-dom";
import * as FaIcons from 'react-icons/fa';

export default function Order() {
    return (
        <div>
            <div>
            
            </div>
                <section>
                    <div>
                        <div className="d-flex flex-wrap justify-content-between">
                        <p>All Users</p>
                        <button>Create</button>
                    </div>

                    </div>
                    <div>
                <table class="table">
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
