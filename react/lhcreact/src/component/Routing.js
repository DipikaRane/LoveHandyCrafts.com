import React from 'react';
import {BrowserRouter,Route} from 'react-router-dom';
//import Header from './Header';
import Footer from './Footer';
import Home from './Home/Home';
import Products from './Products/Products';
import Purchase from './Purchase/Purchase';
import SearchAll from './Purchase/SearchAll';
import SelectOne from './Purchase/SelectOne';
import PlaceOrder from './Order/PlaceOrder';
import ViewApi from './Order/ViewApi';
import Register from './Login/Register';


const Routing=()=>{
    return(
        <BrowserRouter>
            
                <Route exact path="/" component={Home}/>
                <Route path="/products/:id" component={Products}/>
                <Route path="/purchase/:id" component={Purchase}/>
                <Route path="/selectone/:id" component={SelectOne}/>
                <Route path="/searchall" component={SearchAll}/>
                <Route path="/placeorder/:proName" component={PlaceOrder}/>
                <Route path="/ViewBooking" component={ViewApi}/>
                <Route path="/register" component={Register}/>
                
            <Footer/>
        </BrowserRouter>
    )
}

export default Routing;