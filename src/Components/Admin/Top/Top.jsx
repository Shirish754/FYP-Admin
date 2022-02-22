import React from 'react'
import * as FaIcons from 'react-icons/fa';

export default function Top() {
    return (
        <div>
            <section  style ={{width:"100% " ,margin:"5px 100px 5px 5px" }}className="d-flex flex-wrap justify-content-between ">
                <div>
                    <h2 >HamroVet</h2>
                </div>
                <div className="d-flex flex-wrap "  style={{textSizeAdjust:"80%"}}>
                    <div className="ms-3">
                        <FaIcons.FaSearch/>
                    </div>
                    
                    <div className="d-flex flex-wrap ">
                        <p className="ms-3">|</p>
                    <p className="ms-3">Shirish Pokhrel</p>
                    </div>
                    

                    <img src="https://media.istockphoto.com/photos/goat-picture-id165847424?b=1&k=20&m=165847424&s=170667a&w=0&h=KoBaytE8tzKB1JHbh9pJng5VjVrDi9vBPznLXC1VREg=" alt="admin image" className="border border-dark ms-3" style={{
                        height: "40px",
                        width: "40px",
                        borderRadius: "50%",
                        objectFit:"cover",
                        cursor:"pointer"

                    }}/>

                </div>
            </section>
        </div>
    )
}
