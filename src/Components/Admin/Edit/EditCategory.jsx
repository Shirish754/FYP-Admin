import { useEffect, useState } from 'react';
import { Modal } from 'react-bootstrap'
import { baseUrl } from '../../baseUrl';

export default function EditCategory(props) {

    const [catName, setCatName] = useState('');
    const [image, setImage] = useState('');
    const [catImage, setCatImage] = useState('');
    const [catDefaultImage, setDefaultCatImage] = useState('');

    useEffect(() => {
        setCatName(props.cat.name);
        setImage(props.cat.image);
    },[])

    const editCategory = async(e) => {
        e.preventDefault();

        var bodyFormData = new FormData();
        if (catImage !== "" || catDefaultImage !== "") {
            bodyFormData.append('image', catImage, catImage.name);
        }
        bodyFormData.append('id', props.cat.id);
        bodyFormData.append('customerId', JSON.parse(localStorage.getItem('hamrovet-admin-token')).customerId);
        bodyFormData.append('name', catName);

         await fetch(baseUrl + 'products/editCategory.php', {
            method: "POST",
            body: bodyFormData
        })
            .then((res) => res.json())
            .then((res) => {
                if (res === true) {
                    alert('Successfully updated!');
                    window.location.reload(true);
                }
                else {
                    alert('Something went wrong!');
                }
            })
            .catch(e => {
                alert('Something went wrong!');
            })
    }

    const reset = () =>{
        setCatName('');
        setDefaultCatImage('');
        setCatImage('');
    }



    return (
        <div>
            <Modal show={props.open} onHide={() => { reset();props.onClose();  }} centered>
                <Modal.Header closeButton>
                    <Modal.Title>Edit</Modal.Title>
                </Modal.Header>
                <Modal.Body>
                        <div>
                            <form onSubmit={editCategory}>
                                <div className="mb-3">
                                    <label className="form-label">Category Name</label>
                                    <input required value={catName} onChange={(e) => { setCatName(e.target.value) }} type="text" className="form-control" />
                                </div>
                                <div className="mb-3">
                                    <label className="form-label">Select Images</label>
                                    <input   multiple={false} className="form-control" type="file" onChange={e => { setCatImage(e.target.files[0]); setDefaultCatImage(URL.createObjectURL(e.target.files[0])) }} />
                                </div>
                                <button type='submit' style={{
                                    background: "#2F80ED",
                                    color: "#FFFFFF"
                                }} className="btn btn fw-bold  ms-2 mb-2"
                                >Edit</button>
                            </form>
                            {catDefaultImage || catImage ?
                                <img alt="" src={catDefaultImage} style={{ width: "100%", height: "85%", objectFit: 'cover' }} />
                                :
                                <img alt="" src={`${baseUrl}${image}`} style={{ width: "100%", height: "85%", objectFit: 'cover' }} />
                            }
                        </div>
                </Modal.Body>

            </Modal>

        </div>
    )
}
