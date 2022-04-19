import React,{useState} from 'react'
import { Modal } from 'react-bootstrap'
import swal from 'sweetalert';
import { baseUrl } from '../../baseUrl';

export default function CreateUser(props) {

    const [userName, setUserName] = useState("");
    const [contact, setContact] = useState("");
    const [address, setAddress] = useState("");
    const [email, setEmail] = useState("");
    const [password, setPassword] = useState("");
    const [confirmPassword, setConfirmPassword] = useState("");
    const [role, setRole] = useState("");

    const reset = () =>{
        setUserName("");
        setContact("");
        setAddress("");
        setEmail("");
        setPassword("");
        setConfirmPassword("");
        setRole("");
    }

    const signIn = async(e) => {
        e.preventDefault();
        await fetch(baseUrl + 'user/AdminUserSignUp.php', {
            body: JSON.stringify({
                "username": userName,
                "contact": contact,
                "address": address,
                "email": email,
                "password": password,
                "role": role
            }),
            method: "POST",
        })
            .then((res) => res.json())
            .then((res) => {
                if (res.customer_registered === 'true') {
                    reset();
                    swal("User Created Successfully", "", "success").then(()=>{
                        window.location.reload(true);
                    });
                    // alert('Successfully created!');
                    // window.location.reload(true);
                }
                else {
                    swal("Something went wrong", "", "error");
                    // alert('Something went wrong!');
                }
            })
            .catch(e => {
                swal("Something went wrong", "", "error");
                // alert('Something went wrong!');
            }
        )
    }

  return (
    <div>
        <Modal show={props.open} onHide={() => { props.onClose() }} centered>
            <Modal.Header closeButton>
                <Modal.Title>Create User</Modal.Title>
            </Modal.Header>
           
            <Modal.Body>
            <form className='' onSubmit={signIn}>
                <div class="form-group mb-1">
                    <label for="exampleInputEmail1">User Name</label>
                    <input type="text" className="form-control" id="exampleInputEmail1" value={userName} onChange={(e) => { setUserName(e.target.value) }} aria-describedby="emailHelp" placeholder="Enter UserName"/>
                    
                </div>

                <div class="form-group mb-1">
                    <label for="exampleInputEmail1">Contact</label>
                    <input type="integer" className="form-control" id="exampleInputEmail1" value={contact} onChange={(e) => { setContact(e.target.value) }} aria-describedby="emailHelp" placeholder=" Enter Contact"/>
                    
                </div>

                <div class="form-group mb-1">
                    <label for="exampleInputEmail1">Address</label>
                    <input type="text" className="form-control" id="exampleInputEmail1" value={address} onChange={(e) => { setAddress(e.target.value) }}aria-describedby="emailHelp" placeholder="Enter Address"/>
                    
                </div>

                <div class="form-group mb-1">
                    <label for="exampleInputEmail1">Email</label>
                    <input type="email" className="form-control" id="exampleInputEmail1" value={email} onChange={(e) => { setEmail(e.target.value) }} aria-describedby="emailHelp" placeholder="Enter email"/>
                </div>

                <div class="form-group mb-1">
                    <label for="exampleInputEmail1">Password</label>
                    <input type="password" className="form-control" id="exampleInputEmail1" value={password} onChange={(e) => { setPassword(e.target.value) }} aria-describedby="emailHelp" placeholder="********"/>
                </div>

                <div class="form-group mb-1">
                    <label for="exampleInputEmail1"> Confirm Password</label>
                    <input type="password" className="form-control" id="exampleInputEmail1" value={confirmPassword} onChange={(e) => { setConfirmPassword(e.target.value) }} aria-describedby="emailHelp" placeholder="*******"/>
                    <p className={`small text-danger ${password !== "" && confirmPassword !== "" && password !== confirmPassword ? '' : 'd-none'}`}>Password doesn't match!</p>
                </div>

                <div class="form-group mb-1">
                    <label for="exampleInputEmail1">Role</label>
                    <select value={role} onChange={(e)=>{setRole(e.target.value);}} class="custom-select mr-sm-2" id="inlineFormCustomSelect" className="ms-2 form-control">
                    <option value="customer">Customer</option>
                    <option value="admin">Admin</option>
                     </select>
                </div>

                
               
                <button type="submit" className="btn btn-primary" disabled={email !== "" && address !== "" && contact !== "" && password !== "" && confirmPassword !== "" && role!=="" && password === confirmPassword ? false : true}>Submit</button>
                </form>
            </Modal.Body>

        </Modal>
    </div>
  )
}
