
import React,{useState,useEffect} from "react";
import { OverlayTrigger,Modal } from "react-bootstrap";
import * as FaIcons from 'react-icons/fa';
import { Table } from "reactstrap";
import swal from 'sweetalert';
import { baseUrl } from "../../baseUrl";
import { Popover } from 'react-tiny-popover';



function Home(props){
    const [orders,setOrders] = useState([]);
    const [search,setSearch] = useState("");
    const [popoverOpen,setPopoverOpen] = useState(false);
    const [users, setUsers] = useState([]);
    const [categories, setCategories] = useState([]);
    const [pageSize, setPageSize]=useState(10);
    

    const [order, setOrder] = useState(null);

    useEffect(() => {
        fetchOrdersAPI();
        fetchUserAPI();
        fetchCatAPI();
        
    }, [])


     const fetchOrdersAPI = async () => {
        await fetch(baseUrl + 'orders/getAllOrders.php')
            .then((res) => res.json())
            .then((res) => {
                setOrders(res);
                console.log(res);
            }
            )
            .catch((e) => 
            swal("Error", "Something went wrong", "error"));
            // alert('Something went wrong!'));
     }

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

    const fetchCatAPI = async () => {
        await fetch(baseUrl + 'products/getAllCategories.php')
            .then((res) => res.json())
            .then((res) => {
                setCategories(res);
                console.log(res);
            })
            .catch((e) => 
            swal("Something went wrong!", "Please try again later", "error"));
            // alert('Something went wrong!'));

    }

   
        return (
            <section>
                <div className="d-flex flex-wrap justify-content-center p-4" style={{background:"#FFFFFF" }}>
                       <div className="d-flex">
                            <h4>Home</h4>
                        </div> 
                </div>

                <div className="d-flex flex-wrap justify-content-between mt-4 mb-4 bg-white p-4 col-12">
                    <div className="p-3  col-3" style={{margin: "5px 30px", borderRadius: "10px",cursor: "pointer",boxShadow: "0px 0px 15px -10px rgba(0, 0, 0, 0.75)"}}>
                        <span><h4>No of Users</h4></span>
                        <div className="" style={{margin: "10px 0px"}}>
                        <span style={{fontSize:"30px", fontWeight:"600"}}>{users.length}</span>
                        </div>
                        <span style={{fontSize:"15px", color:"grey"}}>Total No of users in the system</span>
                    </div>
                    <div className="p-3 col-3" style={{margin: "0px 30px", borderRadius: "10px",cursor: "pointer",boxShadow: "0px 0px 15px -10px rgba(0, 0, 0, 0.75)"}}>
                        <span><h4>No of Categories</h4></span>
                        <div className="" style={{margin: "10px 0px"}}>
                        <span style={{fontSize:"30px", fontWeight:"600"}}>{categories.length}</span>
                        </div>
                        <span style={{fontSize:"15px", color:"grey"}}>Total Type of Products in the system</span>
                    </div>
                    <div className="p-3  col-3" style={{margin: "0px 30px", borderRadius: "10px",cursor: "pointer",boxShadow: "0px 0px 15px -10px rgba(0, 0, 0, 0.75)"}}>
                        <span><h4>No of Pending Order</h4></span>
                        <div className="" style={{margin: "10px 0px"}}>
                        <span style={{fontSize:"30px", fontWeight:"600"}}>{orders.filter((e)=>e.status === 'pending').length}</span>
                        </div>
                        <span style={{fontSize:"15px", color:"grey"}}>Total no of Pending Orders</span>
                    </div>
                </div>

            

                <div className="bg-white">
                    <div className="d-flex justify-content-between pt-4 pb-2 border-bottom m-3">
                        <div className=""><p>Pending Delivery</p></div>
                        <div className="d-flex flex-row">
                            <p className="m-2">Search: </p>
                            <input type="number" value={pageSize} onChange={(e)=>{setPageSize(e.target.value)}}/>
                        </div>
                    </div>
                    <div className="m-3">
                        <Table borderless responsive >
                            <thead className="border-bottom">
                            <tr>
                                <th>S.N</th>
                                <th>C.Id</th>
                                <th>UserName</th>
                                <th>OrderDate</th>
                                <th>OrderNo</th>
                                <th>P.Status</th>
                                <th>Address</th>
                                <th>Order Items</th>

                            </tr>
                            </thead>
                            <tbody>
                            {orders.filter((e,index)=>e.status === 'pending' && index-1 < pageSize).reverse().map((order,index) => {
                                return (
                                    <tr key={index}>
                                        <td>{index+1}</td>
                                        <td>{order.id}</td>
                                        <td>{order.UserName}</td>
                                        <td>{order.OrderDate}</td>
                                        <td>{order.OrderId}</td>
                                        <td>{order.isPaid==="0"?'Pending':'Paid'}</td>
                                        <td>{order.Address}</td>
                                        <td>
                                        
                                            <button onClick={() => {setPopoverOpen(true); setOrder(order);}} className="btn btn-primary">Orders</button>
                                            
                                            </td>
                                    </tr>
                                )
                            })}
                           
                            </tbody>
                        </Table>
                    </div>
                
                </div>
                <OrderItems order={order} open={popoverOpen} onClose={() => {setPopoverOpen(false)}}/>

            </section>
  
        );
    }
export default Home;

const OrderItems = (props) => {
    return (
        
        <Modal show={props.open} onHide={() => { props.onClose() }} centered>
        <Modal.Body>
            {props.order && 
            <div>
                
                
                <p><b>Order Id: </b># {props.order.OrderId}</p>
                <p><b>Total: </b> {props.order.length > 0 ? props.order.length ===1 ?parseInt(props.order[0].LineTotal): props.order.reduce((a,b)=>a+parseInt(b.LineTotal),0):""}</p>
                <Table responsive borderless hover>
                    <thead className="border-bottom">
                        <tr>
                            <th>Product Name</th>
                            <th>Quantity</th>
                            <th>Price</th>
                            <th>Total</th>
                        </tr>
                    </thead>
                    <tbody>
                        {props.order.orderItems.map((item,index) => {
                            return (
                                <tr key={index}>
                                    <td>{item.ProductName}</td>
                                    <td>{item.Quantity}</td>
                                    <td className="text-success">{item.Price}</td>
                                    <td className="text-success">{item.LineTotal}</td>
                                </tr>
                            )
                        })}
                    </tbody>
                    
                </Table>
          </div>
          }
        </Modal.Body>

    </Modal>
    
      
    )
}




