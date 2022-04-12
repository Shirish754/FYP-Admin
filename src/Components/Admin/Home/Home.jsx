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

                <div className="d-flex justify-content-between mt-4 mb-4 bg-white p-4">
                <div className="p-3" style={{margin: "0px 30px", borderRadius: "10px",cursor: "pointer",boxShadow: "0px 0px 15px -10px rgba(0, 0, 0, 0.75)"}}>
                    <span><h4>No of Users</h4></span>
                    <div className="d-flex align-items-center justify-content-around" style={{margin: "10px 0px"}}>
                    <span style={{fontSize:"30px", fontWeight:"600"}}>$2,415</span>
                    <span className="d-flex align-items-center ml-5">
                        -11.4 <FaIcons.FaArrowDown  className="featuredIcon negative"/>
                    </span>
                    </div>
                    <span style={{fontSize:"15px", color:"grey"}}>Compared to last month</span>
                </div>
                <div className="p-3" style={{margin: "0px 30px", borderRadius: "10px",cursor: "pointer",boxShadow: "0px 0px 15px -10px rgba(0, 0, 0, 0.75)"}}>
                    <span><h4>Total Sales</h4></span>
                    <div className="d-flex align-items-center justify-content-between" style={{margin: "10px 0px"}}>
                    <span style={{fontSize:"30px", fontWeight:"600"}}>$4,415</span>
                    <span className="d-flex align-items-center ml-5">
                        -1.4 <FaIcons.FaArrowDown className="featuredIcon negative"/>
                    </span>
                    </div>
                    <span style={{fontSize:"15px", color:"grey"}}>Compared to last month</span>
                </div>
                <div className="p-3" style={{margin: "0px 30px", borderRadius: "10px",cursor: "pointer",boxShadow: "0px 0px 15px -10px rgba(0, 0, 0, 0.75)"}}>
                    <span><h4>No of Pending Order</h4></span>
                    <div className="d-flex align-items-center justify-content-between" style={{margin: "10px 0px"}}>
                    <span style={{fontSize:"30px", fontWeight:"600"}}>$2,225</span>
                    <span className="d-flex align-items-center ml-5">
                        +2.4 <FaIcons.FaArrowUp className="featuredIcon"/>
                    </span>
                    </div>
                    <span style={{fontSize:"15px", color:"grey"}}>Compared to last month</span>
                </div>
                </div>
  

            </section>
        );
    }
export default Home;