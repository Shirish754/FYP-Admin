import React, { useEffect, useState } from 'react';
import * as FaIcons from 'react-icons/fa';
import { baseUrl } from '../../baseUrl';

export default function ProductDesc({id}) {

    const [product, setProduct] = useState({})

    useEffect(()=>{
        fetchProductAPI();
    },[])

    const fetchProductAPI = async () => {
        await fetch(baseUrl + 'products/getAllProducts.php')
            .then((res) => res.json())
            .then((res) => {
                var product = res.filter((p)=>p.id === id);
                setProduct(product[0]);
            })
            .catch((e) => alert('Something went wrong!'));



    }
    return (
            <div style={{ overflowX: "hidden" }}>
        
                
                <section className="my-3 py-5">
                            <div className="container col-12 d-flex flex-column justify-content-center align-items-center">
                                <div className="col-12 col-md-8 d-flex justify-content-center">
                                    <div style={{height: 280 ,width:420, overflow:"hidden" ,borderRadius:"60px 60px 60px 0px" }}>
                                    <img style={{ height: "100%" ,width:"100%",objectFit:"cover",  objectPosition: "5% 100%",  transform:"scale(1.1) "}} src={baseUrl +product.image} alt="product"/>
                                    </div>
                                </div>
                                <div className="col-12 col-md-10 text-justify d-flex flex-column justify-content-center align-items-center">
                                    <div>
                                        <div className='d-flex justify-content-evenly p-4 '>
                                        <p className="fs-2 text-center " style={{color:"#4caf50"}}> NRs {product.price}</p>
                                        <p className="fs-4 text-center">{product.status}</p>
                                        </div>
                                        
                                        <p className="fs-2 accent-color text-center">{product.name}</p>
                                        <p className="text-center text-wrap">{product.description}</p>
                                        
                                    </div>
                                </div>
                            </div>
                        </section>
        </div>
    )
}
