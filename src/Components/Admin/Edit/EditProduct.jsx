import React, { useEffect, useState } from 'react'
import { Modal } from 'react-bootstrap'
import swal from 'sweetalert';
import { baseUrl } from '../../baseUrl';

export default function EditProduct(props) {
    const [name, setName] = useState('');
    const [description, setdescription] = useState('');
    const [price, setPrice] = useState('');
    const [category, setCategory] = useState('');
    const [status, setStatus] = useState('Available');
    const [image, setImage] = useState("");
    const [productFile, setProductFile] = useState("");
    const [productDefaultFile, setProductDefaultFile] = useState("");

    useEffect(() => {
        setName(props.product.name);
        setdescription(props.product.description);
        setPrice(props.product.price);
        setCategory(props.product.catId);
        setStatus(props.product.status);
        setImage(props.product.image);
    }, [props.product])

    const editProduct = async(e) => {
        e.preventDefault();
        var bodyFormData = new FormData();

        if (productFile !== "" || productDefaultFile !== "") {
            bodyFormData.append('image', productFile, productFile.name);
        }
        bodyFormData.append('id', props.product.id);
        bodyFormData.append('customerId', JSON.parse(localStorage.getItem('hamrovet-admin-token')).customerId);
        bodyFormData.append('name', name);
        bodyFormData.append('description', description);
        bodyFormData.append('catId', category);
        bodyFormData.append('price', price);
        bodyFormData.append('status', status);

        fetch(baseUrl + 'products/editProducts.php', {
            method: "POST",
            body: bodyFormData
        })
            .then((res) => res.json())
            .then((res) => {
                if (res === true) {
                    swal("Product Edited Successfully", "", "success").then(() => {
                        window.location.reload(true);
                    });
                    // alert('Product Successfully Updated!');
                    // window.location.reload();
                }
                else {
                    swal("Something went wrong", "", "error");
                    // alert('Something went wrong!');
                }
            })
            .catch(e => {
                swal("Something went wrong", "", "error");
                // alert('Something went wrong!');
            })
    }

    return (
        <div>
            <Modal show={props.open} onHide={() => { props.onClose() }} centered>
                <Modal.Header closeButton>
                    <Modal.Title>Edit Product</Modal.Title>
                </Modal.Header>
                <Modal.Body>
                    <form onSubmit={editProduct}>
                        <div>
                            <div className="mb-3">
                                <label className="form-label">Product Name</label>
                                <input required value={name} onChange={(e) => { setName(e.target.value) }} type="text" className="form-control" />
                            </div>
                            <div className="mb-3">
                                <label className="form-label">Description</label>
                                <input required value={description} onChange={(e) => { setdescription(e.target.value) }} type="text" className="form-control" />
                            </div>
                            <div className="mb-3">
                                <label className="form-label">Price</label>
                                <input required value={price} onChange={(e) => { setPrice(e.target.value) }} type="text" className="form-control" />
                            </div>
                            <div className="mb-3">
                                <label className="form-label">Select Category</label>
                                <select required value={category} onChange={(e) => { setCategory(e.target.value) }} className="form-control" >
                                    <option value="">Please select a category</option>
                                    {props.categories.map((category, index) => {
                                        return (
                                            <option key={index} value={category.id}>{category.name}</option>
                                        );
                                    })}
                                </select>
                            </div>

                            <div className="mb-3">
                                <label className="form-label ">Status</label>
                                <select required value={status} onChange={(e) => { setStatus(e.target.value) }} className="ms-2 form-control">
                                    <option value="Available">Available</option>
                                    <option value="Not Available">Not Available</option>
                                </select>
                            </div>
                            <div className="form-group">
                                <label className="form-label">Product Image:</label>
                                <input   multiple={false} className="form-control" type="file" onChange={e => { setProductFile(e.target.files[0]); setProductDefaultFile(URL.createObjectURL(e.target.files[0])) }} />
                            </div>

                            <button
                                style={{
                                    background: "#2F80ED",
                                    color: "#FFFFFF"
                                }} className="btn btn fw-bold  ms-2 mt-3 mb-2"
                            >Add</button>
                            {productDefaultFile || productFile ?
                                <img alt="" src={productDefaultFile} style={{ width: "100%", height: "85%", objectFit: 'cover' }} />
                                :
                                <img alt="" src={`${baseUrl}${image}`} style={{ width: "100%", height: "85%", objectFit: 'cover' }} />
                            }
                        </div>
                    </form>
                </Modal.Body>
            </Modal>
        </div>
    )
}
