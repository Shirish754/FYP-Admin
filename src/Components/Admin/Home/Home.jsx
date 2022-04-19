import React from "react";
import * as FaIcons from 'react-icons/fa';


function Home(props){
        return (
            <section>
                <div className="d-flex flex-wrap justify-content-center p-4" style={{background:"#FFFFFF" }}>
                       <div className="d-flex">
                            <h4>Home</h4>
                        </div> 
                </div>

                <div className="d-flex flex-wrap justify-content-between mt-4 mb-4 bg-white p-4 col col-sm-6 col-md-12 col-lg-12">
                <div className="p-3" style={{margin: "5px 30px", borderRadius: "10px",cursor: "pointer",boxShadow: "0px 0px 15px -10px rgba(0, 0, 0, 0.75)"}}>
                    <span><h4>No of Users</h4></span>
                    <div className="" style={{margin: "10px 0px"}}>
                    <span style={{fontSize:"30px", fontWeight:"600"}}>12</span>
                    </div>
                    <span style={{fontSize:"15px", color:"grey"}}>Total No of users in the system</span>
                </div>
                <div className="p-3" style={{margin: "0px 30px", borderRadius: "10px",cursor: "pointer",boxShadow: "0px 0px 15px -10px rgba(0, 0, 0, 0.75)"}}>
                    <span><h4>No of Products</h4></span>
                    <div className="" style={{margin: "10px 0px"}}>
                    <span style={{fontSize:"30px", fontWeight:"600"}}>38</span>
                    </div>
                    <span style={{fontSize:"15px", color:"grey"}}>Total Type of Products in the system</span>
                </div>
                <div className="p-3" style={{margin: "0px 30px", borderRadius: "10px",cursor: "pointer",boxShadow: "0px 0px 15px -10px rgba(0, 0, 0, 0.75)"}}>
                    <span><h4>No of Pending Order</h4></span>
                    <div className="" style={{margin: "10px 0px"}}>
                    <span style={{fontSize:"30px", fontWeight:"600"}}>2</span>
                    </div>
                    <span style={{fontSize:"15px", color:"grey"}}>Total no of Pending Orders</span>
                </div>
                </div>
  

            </section>
        );
    }
export default Home;