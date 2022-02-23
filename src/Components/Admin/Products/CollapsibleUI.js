import React, { useEffect, useState } from "react";
import * as FaIcons from 'react-icons/fa';
import {
    Link
} from "react-router-dom";
import { baseUrl } from "../../baseUrl";
import DeleteCategory from "../Delete/DeleteCategory";
import EditCategory from "../Edit/EditCategory";
import DeleteProduct from "../Delete/DeleteProduct";
// import { baseUrl } from "../baseUrl";
//import { baseUrl } from "../../Shared/BaseUrl";

export default function CollapsibleUI(props) {

    const [isOpen, setIsOpen] = useState(false);
    const [isEditCategory, setIsEditCategory] = useState(false);
    const [isEditProduct, setIsEditProduct] = useState(false);
    const [isDeleteCategory, setIsDeleteCategory] = useState(false);




    return (
        <div>
            <p>
                <div className="col-12 bg-white shadow d-flex flex-wrap justify-content-between px-4 py-2" type="button" data-bs-toggle="collapse" data-bs-target={"#collapseExample" + props.index} aria-expanded="false" aria-controls="collapseExample">
                    <div className="d-flex">
                        <img style={{ height: 120, width: 120, objectFit: "cover" }} src={baseUrl + props.cat.image} />
                        <p className="fs-3 fw-bold my-auto ms-3">{props.cat.name}</p>
                    </div>
                    <div className="my-auto fs-2 d-flex ">
                        <div>
                            <FaIcons.FaEdit onClick={() => { setIsEditCategory(true); }}
                                style={{ cursor: "pointer", }} />
                            {props.product.length == 0 ?<FaIcons.FaTrashAlt onClick={() => { setIsDeleteCategory(true); }}
                                style={{ cursor: "pointer", }}
                                className="m-2 " />: null}
                            <EditCategory cat={props.cat} open={isEditCategory} onClose={() => { setIsEditCategory(false) }} />
                            
                                <DeleteCategory id={props.cat.id}  open={isDeleteCategory} onClose={() => { setIsDeleteCategory(false) }} /> 
                        </div>
                        &#9662;
                    </div>
                </div>
            </p>
            <div className="collapse" id={"collapseExample" + props.index}>
                <div className="col-12 d-flex flex-wrap">
                    {props.product.map((m, index) => {
                        return (

                            <div className="col-12 col-sm-2 col-md-4 col-lg-3 p-2 " key={index}>
                                <div className="col-12 bg-white shadow rounded p-2">
                                    <div>
                                        <img style={{ height: 200, width: "100%", objectFit: "cover" }} src={baseUrl + m.image} />
                                    </div>
                                    <div className="d-flex justify-content-between">
                                        <p className="lead my-auto">Rs.{m.price}</p>
                                        <div className="d-flex p-2">
                                            <FaIcons.FaEdit product={m} onClick={() => { props.onEditProduct(m); }} />
                                            <FaIcons.FaTrashAlt onClick={() => { props.onDeleteProduct(m); }}
                                                className="ms-1" />
                                        </div>
                                        {/* <EditProduct categories={props.categories} product={m}  open={isEditProduct} onClose={() => { setIsEditProduct(false) }} /> */}
                                        

                                    </div>
                                    <p className="fs-5 fw-bold">{m.name}</p>
                                    <div>
                                        <Link to={`/products/${m.id}`}>View Details</Link>
                                    </div>
                                </div>
                            </div>
                        );
                    })}
                </div>
                
            </div>
        </div>
    );
}