import React, { useEffect, useState } from "react";
import { baseUrl } from "../../baseUrl";
import NewProduct from "../NewProducts/NewProduct";
import CollapsibleUI from "./CollapsibleUI";




export default function Products() {
    const [searchQuery, setSearchQuery] = useState("");
    const [categories, setCategories] = useState([]);
    const [products, setProducts] = useState([]);
    const [newProductOpen, setNewProductOpen] = useState(false);

 

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
                       <div className="">
                            <h4>Product</h4>
                        </div> 
                        <div>
                            <button onClick={() => { setNewProductOpen(true); }}className="btn btn fw-bold  ms-2" style={{background:"#2F80ED" ,color:"#FFFFFF"}}>Create</button> 
                            <NewProduct categories={categories} open={newProductOpen} onClose={() => { setNewProductOpen(false) }} onSignupClick={() => { setNewProductOpen(false); setNewProductOpen(true); }} />
                        </div> 

                    </div>
                    <div>
                        
                    </div>
                </div>
                <div className="my-2 pt-2">
                <div className="container">
                    {searchQuery.length <= 0 ?
                        <div>
                            {categories.map((cat, index) => {
                                return (

                                    <CollapsibleUI categories = {categories}  onCartClick={(menuId) => {
                                        // if (JSON.parse(localStorage.getItem("rms-token"))) {
                                        //     setCartOpen(true);
                                        //     setMenuId(menuId);
                                        // }
                                        // else {
                                        //     alert('Please login to add to cart!');
                                        // }
                                    }} index={index} cat={cat} product={products.filter((m, index) => m.catId == cat.id)} />
                                );
                            }
                            )}
                        </div>
                        :

                        <>
                            <div className="col-12 d-flex flex-wrap">
                            {categories.map((cat, index) => {
                                return (

                                    <CollapsibleUI categories = {categories} onCartClick={(menuId) => {
                                        // if (JSON.parse(localStorage.getItem("rms-token"))) {
                                        //     setCartOpen(true);
                                        //     setMenuId(menuId);
                                        // }
                                        // else {
                                        //     alert('Please login to add to cart!');
                                        // }
                                    }} index={index} cat={cat} product={products.filter((m, index) => m.catId == cat.id)} />
                                );
                            }
                            )}
                            </div>
                        </>
                    }
                </div>
                </div>

            </section>

            
        </div>
    )
}
