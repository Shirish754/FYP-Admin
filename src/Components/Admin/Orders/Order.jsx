import React,{useState,useEffect} from 'react'
import { Table } from 'reactstrap';
import DeleteOrders from '../Delete/DeleteOrders';
import { baseUrl } from "../../baseUrl";
import EditOrders from '../Edit/EditOrders';
import swal from 'sweetalert'; 
export default function Order() {

    const [orders,setOrders] = useState([]);
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
            .catch((e) => 
            swal("Error", "Something went wrong", "error"));
            // alert('Something went wrong!'));
     }

     const filterOrder = (orders, search) =>{
         var ord = [];

         for(var i = 0; i<orders.length; i++){



            if(orders[i].UserName.toLowerCase().includes(search.toLowerCase()) || checkOrderItems(orders[i].orderItems, search)){
                ord.push(orders[i]);
            }
         }

         return ord;

     }

     const checkOrderItems = (orderItems, search) =>{
         var istrue = false;
        for(var i = 0; i<orderItems.length; i++){
            if(orderItems[i].ProductName.toLowerCase().includes(search.toLowerCase())){
                istrue = true;
                break;
            }
        }
        return istrue;
     }
    
    return (
        <div>

                <div className="pt-4 pe-4">
                    <input value={search} onChange={(e)=>{setSearch(e.target.value)}} placeholder="Search Product and Users . . ." className="form-control ms-2" />
                </div>

                {orders && 
                
                    search.length>0?
                    filterOrder(orders, search).reverse().map((order,index) => {
                        return(
                            <OrderCard order={order} fetchOrders={()=>{fetchOrdersAPI();}}/>
                        )
                    })
                    :
                    orders.reverse().map((order,index) => {
                    return(
                        <OrderCard order={order} fetchOrders={()=>{fetchOrdersAPI();}}/>
                    )
                })}
 
        </div>
    )
}


const OrderCard = ({order, fetchOrders})=>{

    const [deleteOrder,setDeleteOrder] = useState(false);
    const [editOrder,setEditOrder] = useState(false);
    const [orders,setOrders] = useState([]);

    
    return(
        
        <section style={{background:"#FFFFFF" }} className='m-3 p-3'>
                       <div className="d-flex flex-column border-bottom">
                           <div className='d-flex justify-content-center'>
                               <p><b>OrderNo:#{order.OrderId}</b></p>
                           </div>
                           <div className='d-flex justify-content-around flex-wrap'>
                               <p><b>UserName: </b>{order.UserName}</p>
                                <p><b>Address: </b>{order.Address}</p>
                                <p><b>Order Date: </b>{order.OrderDate}</p>
                           </div>
                           {order.status=="pending"?
                           <div className='d-flex justify-content-center '>
                                <button className="btn btn-danger m-1" onClick={() => { setDeleteOrder(true); }}>Delete Order</button>
                                <button className="btn btn-primary m-1" onClick={() => {setEditOrder(true);}}>Edit Order</button>
                                <EditOrders order={order} onSuccess={()=>{fetchOrders();}} open={editOrder} onClose={()=>{setEditOrder(false)}}/>
                            
                                <DeleteOrders order={order} open={deleteOrder} onSuccess={()=>{fetchOrders();}} onClose={() => {setDeleteOrder(false)}}/>
                            </div>:
                            
                        <div></div>}
                            
                    </div>

                    <section >
                        <Table hover borderless responsive>
                            <thead style={{lineHeight:"50px"}}className='mt-12'>
                            <tr className='border-bottom m-12 text-center align-middle'>
                                <th>S.N</th>
                                <th>Image</th>
                                <th>Category</th>
                                <th>Product</th>
                                <th>Quantity</th>
                                <th>Price</th>
                                <th>Line Total</th>
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
                                        <td>{orderItems.LineTotal}</td>
                                    </tr>
                                )
                            })}
                            
                            </tbody>
                        </Table>
                    </section>

                    <div className='d-flex justify-content-between ps-4 pe-4'>
                        <p><b>Delivery Status:</b> {order.status}</p>
                        <p><b>Payment Status: </b>{order.isPaid===0?'Pending':'Paid'}</p>
                       <p><b>Total:</b>Rs.{order.orderItems.length > 0 ? order.orderItems.length ===1 ?parseInt(order.orderItems[0].LineTotal): order.orderItems.reduce((a,b)=>a+parseInt(b.LineTotal),0):""}</p>
                    
                    </div>
                </section>
            
    );
                        
}