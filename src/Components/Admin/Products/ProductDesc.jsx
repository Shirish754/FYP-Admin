import React, { useEffect, useState } from 'react'
import {
    Link
} from "react-router-dom";
// import { baseUrl } from "../baseUrl";
// import { baseUrl } from "../../baseUrl";
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
                            <div className="container col-12 d-flex flex-wrap">
                                <div className="col-12 col-md-4 d-flex justify-content-between">
                                    <div style={{height: 250 ,width:380, overflow:"hidden" ,borderRadius:"60px 60px 60px 0px" }}>
                                    <img style={{ height: "100%" ,width:"100%",objectFit:"cover",  objectPosition: "5% 100%",  transform:"scale(1.1) "}} src={baseUrl +product.image} alt="product"/>
                                    </div>
                                </div>
                                <div className="col-12 col-md-4 d-flex flex-column justify-content-center">
                                    <div>
                                        <p className="fs-2" style={{color:"#4caf50"}}> NRs {product.price}</p>
                                        <p className="fs-2 accent-color">{product.name}</p>
                                        <p>{product.description}</p>
                                        <button className="btn btn-primary" style ={{borderRadius:"60px"}}><FaIcons.FaCartPlus/> Add to Cart</button>
                                        
                                    </div>
                                </div>
                            </div>
                        </section>
        </div>
    )
}
