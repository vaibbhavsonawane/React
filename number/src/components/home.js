import React, { Component } from 'react';

import Header from '../components/header';
import Banner from '../components/banner';
import Footer from '../components/footer';
import NumberList from '../components/number_list';

const URL_NUMBER = 'http://localhost:3004/numbers';

class Home extends Component{
    constructor(props){
        super(props);
        this.state = {
            numbers:''
        }
    }
    componentDidMount(){
        fetch(URL_NUMBER,{
            method: 'GET'
        })
        .then(response => response.json())
        .then(json =>{
            this.setState({
                numbers:json
            })
            //console.log(this.state.numbers)
        })
    }
    render(){
        return(
            <div className="container">
                <Header />
                <Banner />
                <NumberList numberList={this.state.numbers}/>
                <Footer />
            </div>
        )
    }
}
export default Home;