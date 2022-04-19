import React from "react";


export default function Top() {
    return (
        <div>
            <section  style ={{width:"100% " ,margin:"5px 100px 5px 5px" }}className="d-flex flex-wrap justify-content-between ">
                <div>
                    <h2 >HamroVet</h2>
                </div>
                <div className="d-flex flex-wrap "  style={{textSizeAdjust:"80%"}}>
                    <div className="ms-3">
                        {/* <FaIcons.FaSearch/> */}
                    </div>
                    
                    <div className="d-flex flex-wrap ">
                        
                    <p className=" " style={{fontSize:"25px"}}>
                    <img className="p-1 rounded-circle w-25" src={`https://ui-avatars.com/api/?background=ffffff&color=000000&name=${JSON.parse(localStorage.getItem('hamrovet-admin-token')).userName}`}/>
                        {JSON.parse(localStorage.getItem('hamrovet-admin-token')).userName }
                    </p>
                    </div>

                </div>
            </section>
        </div>
    )
}
