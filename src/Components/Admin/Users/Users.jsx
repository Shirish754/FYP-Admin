import React, { useEffect, useState } from "react";
import {
    Link
} from "react-router-dom";
import { BsArrowLeft } from "react-icons/bs";
import { Table } from "reactstrap";
import CreateUser from "./CreateUser";
import DeleteUser from "../Delete/DeleteUser";
import { baseUrl } from "../../baseUrl";
import swal from 'sweetalert'; 

export default function Users() {

    const [editUser,setEditUser] = useState(false);
    const [createUser, setCreateUser] = useState(false);
    const [deleteUser,setDeleteUser] = useState(false);
    const [users, setUsers] = useState([]);
    const [search, setSearch] = useState("");
    

    useEffect(() => {
        fetchUserAPI();
    }, [])

    const fetchUserAPI = async () => {
        await fetch(baseUrl + 'user/getAllUsers.php')
            .then((res) => res.json())
            .then((res) => {
                setUsers(res);
                console.log(res);
            })
            .catch((e) => 
            swal("Something went wrong!", "Please try again later", "error"));
            // alert('Something went wrong!'));

    }
    return (
        <div>
            <section>
            
                    <div className="d-flex flex-wrap justify-content-between p-4" style={{background:"#FFFFFF" }}>
                       <div className="d-flex">
                            <h4>Customers</h4>
                            
                        </div> 
                        <div>
                            <button className="btn btn fw-bold  ms-2" style={{background:"#2F80ED" ,color:"#FFFFFF"}} onClick={() => { setCreateUser(true); }}>Create</button> 
                            <CreateUser open={createUser} onClose={() => { setCreateUser(false) }}/>
                        </div> 
                        
                    </div>

                    <div className="pt-4 pe-4">
                       <input value={search} onChange={(e)=>{setSearch(e.target.value)}} placeholder="Search Users . . ." className="form-control ms-2"/>
                    </div>

                    <section style={{background:"#FFFFFF" }} className='mt-4 p-3 m-2'>

                    <section className="m-2">
                        <Table hover borderless responsive>
                            <thead className=''>
                            <tr className='border-bottom m-4'>
                                <th >C.Id</th>
                                <th>UserName</th>
                                <th>Contact</th>
                                <th>Address</th>
                                <th>Email</th>
                                <th> Join TimeStamp</th>
                                <th>Role</th>
                                <th>Action</th>
                            </tr>
                            </thead>
                            <tbody>
                                {users && 
                                search.length>0?
                                users.filter((user)=>user.username.toLowerCase().includes(search.toLowerCase())).map((user, index) => { 
                                    return(
                                        <tr className='border-bottom '>
                                            <th scope="row">{user.id}</th>
                                            <td>{user.username}</td>
                                            <td>{user.contact}</td>
                                            <td>{user.address}</td>
                                            <td>{user.email}</td>
                                            <td>{user.join_date}</td>
                                            <td>{user.role}</td>
                                            <td >
                                                <div>
                                                <button className="btn btn-danger m-1" onClick={() => { setDeleteUser(true); }}>Del</button>
                                                {/* <button className="btn btn-warning m-1 text-white" onClick={() => { setEditUser(true); }}>Edit</button>
                                                <EditUser user={user} open={editUser} onClose={() => { setEditUser(false) }}/> */}
                                                <DeleteUser open={deleteUser} onClose={()=>{setDeleteUser(false)}}/>
                                                </div>
                                            </td>
                                        </tr>
                                    )
                                }):users.map((user, index) => { 
                                    return(
                                        <tr className='border-bottom '>
                                            <th scope="row">{user.id}</th>
                                            <td>{user.username}</td>
                                            <td>{user.contact}</td>
                                            <td>{user.address}</td>
                                            <td>{user.email}</td>
                                            <td>{user.join_date}</td>
                                            <td>{user.role}</td>
                                            <td >
                                                <div>
                                                <button className="btn btn-danger m-1" onClick={() => { setDeleteUser(true); }}>Del</button>
                                                {/* <button className="btn btn-warning m-1 text-white" onClick={() => { setEditUser(true); }}>Edit</button>
                                                <EditUser user={user} open={editUser} onClose={() => { setEditUser(false) }}/> */}
                                                <DeleteUser open={deleteUser} onClose={()=>{setDeleteUser(false)}}/>
                                                </div>
                                            </td>
                                        </tr>
                                    )
                                })}
                            
                            </tbody>
                        </Table>
                    </section>

                    <p><Link to='/orders' className='d-flex text-decoration-none text-black'> <BsArrowLeft className='d-flex mt-1'/>See Orders</Link></p>
                   


                </section>


            </section>
            
        </div>
    )
}
