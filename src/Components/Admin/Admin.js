import React from "react";
import {
    BrowserRouter,
    Switch,
    Route,
    Redirect
} from "react-router-dom";
//import { BrowserRouter, Switch, Route, Redirect } from "react-router-dom";
import Home from "./Home/Home";
import Order from "./Orders/Order";
import Products from "./Products/Products";
import ProductDesc from "./Products/ProductDesc";
import Sidebar from "./sidebar/Sidebar";
import Users from "./Users/Users";
import Top from "./Top/Top";


function Admin(props) {
    return (
        <div className=""
        
        style={{
            backgroundColor:"#F2F8FC"
        }}>
            <BrowserRouter>
                <div className="d-flex col-12">
                    <div className="col-2">
                        <Sidebar />
                        
                    </div>
                    <div className="col-10 ps-2 pe-2">
                    <Top/>
                        <Switch>
                            <Route exact path="/" component={Home}/>
                            <Route exact path="/products" component={()=> <Products/>}/>
                            <Route exact path="/products/:id" component={({match})=><ProductDesc id={match.params.id}/>} />
                            <Route exact path="/users" component={Users}/>
                            <Route exact path="/orders" component={Order}/>
                            <Redirect to="/"/>
                        </Switch>
                    </div>
                </div>
            </BrowserRouter>
        </div>
    );
}
export default Admin;