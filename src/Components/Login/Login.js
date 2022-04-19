import React, { useState } from "react";
import { baseUrl } from "../baseUrl";
import swal from 'sweetalert'; 

function Login(props) {

    const [email, setEmail] = useState("");
    const [password, setPassword] = useState("");
    const [status, setStatus] = useState("");
    
    const login = async () => {
        await fetch(baseUrl + 'user/adminlogin.php', {
            body: JSON.stringify({
                "email": email,
                "password": password,
            }),
            method: "POST"
        })
            .then((res) => res.json())
            .then((res) => {
                if (res.Customer_found === 'true') {
                    localStorage.setItem('hamrovet-admin-token', JSON.stringify(res));
                    window.location.reload(true);
                }
                else {
                    swal("Oops!", "Invalid Email or Password", "error");
                    // alert('Login Unsuccess!');
                }
            })
            .catch(e => alert(e.message));

            
        }

    
    const onLogin = (e) =>{
        e.preventDefault();

        if(email==="" && password === ""){
            setStatus("Both email and password fields are required!");
        }else if(email===""){
            setStatus("Email field is required!");
        }else if(password===""){
            setStatus("Password field is required!");
        }else{
            setStatus("Successfull");
            //props.onLogin();
            login();
        }

        
    }
    
    return (
        <div className="d-flex flex-wrap justify-content-center align-items-center vh-100">
            <div className="shadow rounded py-4 px-4">
                <form onSubmit={onLogin}>
                    <div className="mb-3">
                        <label htmlFor="exampleInputEmail1" className="form-label">Email address</label>
                        <input value={email} onChange={(e)=>{setEmail(e.target.value)}} type="email" className="form-control" id="exampleInputEmail1" aria-describedby="emailHelp" />
                        <div id="emailHelp" className="form-text">We'll never share your email with anyone else.</div>
                    </div>
                    <div className="mb-3">
                        <label htmlFor="exampleInputPassword1" className="form-label">Password</label>
                        <input value={password} onChange={(e)=>{setPassword(e.target.value)}} type="password" className="form-control" id="exampleInputPassword1" />
                    </div>
                    <button type="submit" className="btn btn-primary">Login</button>
                    {status.length>0?
                    <p className={`small ${status==="Successfull"?"text-success":"text-danger"} text-left mt-3`}>{status}</p>:<></>}
                </form>
            </div>
        </div>
    );
}
export default Login;