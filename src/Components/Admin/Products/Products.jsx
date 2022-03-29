import React, { useEffect, useState } from "react";
import { baseUrl } from "../../baseUrl";
import EditProduct from "../Edit/EditProduct";
import NewProduct from "../NewProducts/NewProduct";
import CollapsibleUI from "./CollapsibleUI";
import * as FaIcons from 'react-icons/fa';
import { Link } from "react-router-dom";
import DeleteProduct from "../Delete/DeleteProduct";



export default function Products() {
    const [searchQuery, setSearchQuery] = useState("");
    const [categories, setCategories] = useState([]);
    const [products, setProducts] = useState([]);
    const [newProductOpen, setNewProductOpen] = useState(false);

 
    const [product, setProduct] = useState({});
    const [isEditProduct, setIsEditProduct] = useState(false);
    const [isDeleteProduct, setIsDeleteProduct] = useState(false);

    useEffect(() => {
       fetchCatAPI();
    }, [])


    const fetchCatAPI = async () => {
        await fetch(baseUrl + 'products/getAllCategories.php')
            .then((res) => res.json())
            .then((res) => {
                setCategories(res);
                console.log(res);
            })
            .catch((e) => alert('Something went wrong!'));

    }


    useEffect(() => {
        fetchProductAPI();
        
    }, [])

    const fetchProductAPI = async () => {
        await fetch(baseUrl + 'products/getAllProducts.php')
            .then((res) => res.json())
            .then((res) => {
                setProducts(res);
            })
            .catch((e) => alert('Something went wrong!'));



    }
    
    return (
        <div className="">
            
            <section>
                <div>
                    <div className="d-flex flex-wrap justify-content-between p-4" style={{background:"#FFFFFF" }}>
                       <div className="d-flex">
                            <h4>Product</h4>
                            
                        </div> 
                        <div>
                            <button onClick={() => { setNewProductOpen(true); }}className="btn btn fw-bold  ms-2" style={{background:"#2F80ED" ,color:"#FFFFFF"}}>Create</button> 
                            <NewProduct categories={categories} open={newProductOpen} onClose={() => { setNewProductOpen(false) }} onSignupClick={() => { setNewProductOpen(false); setNewProductOpen(true); }} />
                        </div> 
                        

                    </div>
                    <div className="pt-4 pe-4">
                    <input onChange={(e)=>{setSearchQuery(e.target.value);}} value={searchQuery} placeholder="Search Products . . ." className="form-control ms-2"/>
                    </div>
                </div>
                <div className="my-2 pt-2">
                <div className="container">
                    {searchQuery.length <= 0 ?
                        <div>
                            {categories.map((cat, index) => {
                                return (

                                    <CollapsibleUI categories = {categories} 
                                    onEditProduct={(p)=>{setIsEditProduct(true); setProduct(p)}}
                                    onDeleteProduct={(p)=>{setIsDeleteProduct(true); setProduct(p)}}
                                     index={index} cat={cat} product={products.filter((m, index) => m.catId == cat.id)} />
                                );
                            }
                            )}
                        </div>
                        :

                        <>
                            <div className="col-12 d-flex flex-wrap">
                            {[...products.filter((p)=>p.name.toLowerCase().includes(searchQuery.toLowerCase()))].map((m, index) => {
                                return (

                                    <div className="col-12 col-sm-2 col-md-4 col-lg-3 p-2 " key={index}>
                                <div className="col-12 bg-white shadow rounded p-2">
                                    <div>
                                        <img style={{ height: 200, width: "100%", objectFit: "cover" }} src={baseUrl + m.image} />
                                    </div>
                                    <div className="d-flex justify-content-between">
                                        <p className="lead my-auto">Rs.{m.price}</p>
                                        <div className="d-flex p-2">
                                            <FaIcons.FaEdit product={m} onClick={() => { setIsEditProduct(true); setProduct(m); }} />
                                            <FaIcons.FaTrashAlt onClick={() => { 
                                               setIsDeleteProduct(true); setProduct(m)
                                            }}
                                                className="ms-1" />
                                        </div>

                                    </div>
                                    <p className="fs-5 fw-bold">{m.name}</p>
                                    <div>
                                        <Link to={`/products/${m.id}`}>View Details</Link>
                                    </div>
                                </div>
                            </div>
                                );
                            }
                            )}
                            </div>
                        </>
                    }
                </div>
                <EditProduct categories={categories} product={product}  open={isEditProduct} onClose={() => { setIsEditProduct(false) }} />
                <DeleteProduct id={product.id} open={isDeleteProduct} onClose={() => { setIsDeleteProduct(false) }} />
                </div>

            </section>

            
        </div>
    )
}
