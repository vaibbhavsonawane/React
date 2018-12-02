import React from 'react';
import ReactDOM from 'react-dom';
import { BrowserRouter, Route } from 'react-router-dom';
import Home from './components/home';
import Number from './components/number';
import LuckDetail from './components/luckynumberdetail';
import AboutUs from './components/aboutus';
import ContactUs from './components/contactsus';
import LuckyNumber from './components/luckynumber';
import FadicNumber from './components/fadicnumber';
const App = () =>{
    return(
        <BrowserRouter>
            <div>
                <Route exact path="/" component={Home} />
                <Route path="/number/:numberid" component={Number} />
                <Route exact path="/lucky_number" component={LuckyNumber} />
                <Route path="/lucky_number/:numberid" component={LuckDetail} />
                <Route path="/fadic_number" component={FadicNumber} />
                <Route path="/about_us" component={AboutUs} />
                <Route path="/contact_us" component={ContactUs} />
            </div>
        </BrowserRouter>
    )
}
ReactDOM.render(<App />, document.getElementById('root'));