import React from 'react'

export default function AddCategory() {

    

    return (
        <div>
            <div className="mb-3">
                <label className="form-label">Category Name</label>
                <input type="text" className="form-control"  />
            </div>
            <div className="mb-3">
                <label className="form-label">Select Images</label>
                <input type="file" className="form-control"  />
            </div>
            <button style={{
                background:"#2F80ED" ,
                color:"#FFFFFF"
            }} className="btn btn fw-bold  ms-2"
            >Add</button>
        </div>
    )
}
