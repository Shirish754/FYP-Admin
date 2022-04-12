import React,{useState,useEffect} from 'react'
import { Table } from 'reactstrap';
import DeleteOrders from '../Delete/DeleteOrders';
import { baseUrl } from "../../baseUrl";
import EditOrders from '../Edit/EditOrders';

export default function Order() {
    const [deleteOrder,setDeleteOrder] = useState(false);
    const [editOrder,setEditOrder] = useState(false);
    const [orders,setOrders] = useState([]);
    const [order,setOrder] = useState({});
    const [search,setSearch] = useState("");

    useEffect(() => {
        fetchOrdersAPI();
    }, [])

     const fetchOrdersAPI = async () => {
        await fetch(baseUrl + 'orders/getAllOrders.php')
            .then((res) => res.json())
            .then((res) => {
                setOrders(res);
                console.log(res);
            }
            )
            .catch((e) => alert('Something went wrong!'));
     }
    
    return (
        <div>

                <div className="pt-4 pe-4">
                    <input value={search} onChange={(e)=>{setSearch(e.target.value)}} placeholder="Search Product and Users . . ." className="form-control ms-2" />
                </div>

                {orders && orders.reverse().map((order,index) => {
                    return(
                        <section style={{background:"#FFFFFF" }} className='m-3 p-3'>
                       <div className="d-flex flex-column border-bottom">
                           <div className='d-flex justify-content-around'>
                               <p><b>UserName: </b>{order.UserName}</p>
                                <p><b>Address: </b>{order.Address}</p>
                                <p><b>Order Date: </b>{order.OrderDate}</p>
                           </div>

                           <div className='d-flex justify-content-center '>
                                <button className="btn btn-danger m-1" onClick={() => { setDeleteOrder(true); }}>Delete Order</button>
                                <button className="btn btn-primary m-1" onClick={() => {setEditOrder(true);}}>Edit Order</button>
                                <EditOrders order={orders} open={editOrder} onClose={()=>{setEditOrder(false)}}/>
                            
                                <DeleteOrders open={deleteOrder} onClose={() => {setDeleteOrder(false)}}/>
                            </div>
                            
                    </div>

                    <section >
                        <Table hover borderless>
                            <thead style={{lineHeight:"50px"}}className='mt-12'>
                            <tr className='border-bottom m-12 text-center align-middle'>
                                <th>S.N</th>
                                <th>Image</th>
                                <th>Category</th>
                                <th>Product</th>
                                <th>Quantity</th>
                                <th>Price</th>
                            </tr>
                            </thead>
                            <tbody>
                            {order.orderItems.map((orderItems,index) => {
                                return(
                                    <tr className='border-bottom text-center align-middle'>
                                        <th scope="row">{index+1}</th>
                                        <td><img src={baseUrl+orderItems.Image} alt="Product image" style={{ height: "60px", width: "60px", objectFit:"cover" }}/></td>
                                        <td>{orderItems.CatName}</td>
                                        <td>{orderItems.ProductName}</td>
                                        <td>{orderItems.Quantity}</td>
                                        <td>{orderItems.Price}</td>
                                    </tr>
                                )
                            })}
                            
                            </tbody>
                        </Table>
                    </section>

                    <div className='d-flex justify-content-between ps-4 pe-4'>


                    <p>Line Total:</p>
                    
                    </div>
                </section>
                    )
                })}
                
                
                
        </div>
    )
}
