import { useState } from 'react'
import { Modal } from "react-bootstrap";
import Tab from 'react-bootstrap/Tab'
import Tabs from 'react-bootstrap/Tabs'
import { FaIcons } from 'react-icons/fa';
import { baseUrl } from '../../baseUrl';


export default function NewProduct(props) {

    const [name, setName] = useState('');
    const [description, setdescription] = useState('');
    const [price, setPrice] = useState('');
    const [category, setCategory] = useState('');
    const [status, setStatus] = useState('Available');
    const [productFile, setProductFile] = useState("");
    const [productDefaultFile, setProductDefaultFile] = useState("");
    const [catName, setCatName] = useState('');
    const [catImage, setCatImage] = useState('');
    const [catDefaultImage, setDefaultCatImage] = useState('');


    const addCategory = async(e) => {
        e.preventDefault();
       var bodyFormData = new FormData();
       bodyFormData.append('catName', catName);
       bodyFormData.append('image', catImage, catImage.name);
       bodyFormData.append('customerId', JSON.parse(localStorage.getItem('hamrovet-admin-token')).customerId);

       await fetch(baseUrl + 'products/addCategory.php', {
              method: 'POST',
              body: bodyFormData
       })
         .then((res) => res.json())
         .then((res) => {
            if(res){
                alert('Category added successfully!');
                window.location.reload(true);
            }else{
                alert('Something went wrong!');
            }
         }
        )
    }


    const addProduct = async(e) => {
        e.preventDefault();
        var bodyFormData = new FormData();
        bodyFormData.append('image', productFile, productFile.name);
        bodyFormData.append('name', name);
        bodyFormData.append('price', price);
        bodyFormData.append('catId', category);
        bodyFormData.append('status', status);
        bodyFormData.append('description', description);
        bodyFormData.append('customerId', JSON.parse(localStorage.getItem('hamrovet-admin-token')).customerId);

        await fetch(baseUrl + 'products/addProducts.php', {
            method: 'POST',
            body: bodyFormData
        })
        .then(res => res.json())
        .then(res => {
            if (res === true) {
                alert('Product Added Successfully');
                window.location.reload(true);
            }
            else {
                alert('Something went wrong');
            }
        }
        )
    }

    return (
        <div>
            <Modal show={props.open} onHide={props.onClose} centered>
                <Modal.Body>
                    <Tabs
                        defaultActiveKey="AddProducts"
                        transition={false}
                        id="noanim-tab-example"
                        className="mb-3 justify-content-center"
                    >
                        <Tab eventKey="AddCategory" title="Add Category">
                        <div>
                            <form onSubmit={addCategory}>
                            <div className="mb-3">
                                <label className="form-label">Category Name</label>
                                <input required value={catName} onChange={(e) => { setCatName(e.target.value) }} type="text" className="form-control"  />
                            </div>
                            <div className="mb-3">
                                <label className="form-label">Select Images</label>
                                <input required  multiple={false} className="form-control" type="file" onChange={e => { setCatImage(e.target.files[0]); setDefaultCatImage(URL.createObjectURL(e.target.files[0])) }} />
                            </div>
                            <button style={{
                                background:"#2F80ED" ,
                                color:"#FFFFFF"
                            }} className="btn btn fw-bold  ms-2 mb-1"
                            >Add</button>
                            </form>
                            <img alt="" className="mt-2" src={catDefaultImage} style={{ width: "100%", height: "85%", objectFit: 'cover', display: productDefaultFile ? "block" : 'none' }} />

                        </div>
                        </Tab>
                        <Tab eventKey="AddProducts" title="Add Products">
                            <form onSubmit={addProduct}>
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
                                                    <option  value="">Please select a category</option>
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
                                        <input required  multiple={false} className="form-control" type="file" onChange={e => { setProductFile(e.target.files[0]); setProductDefaultFile(URL.createObjectURL(e.target.files[0])) }} />
                                    </div>

                                    <button
                                        style={{
                                            background: "#2F80ED",
                                            color: "#FFFFFF"
                                        }} className="btn btn fw-bold  ms-2 mt-3 mb-3"
                                    >Add</button>
                                    <img alt="" className="mt-2" src={productDefaultFile} style={{ width: "100%", height: "85%", objectFit: 'cover', display: productDefaultFile ? "block" : 'none' }} />

                                </div>
                            </form>
                        </Tab>
                    </Tabs>

                </Modal.Body>

            </Modal>
        </div>
    )
}
