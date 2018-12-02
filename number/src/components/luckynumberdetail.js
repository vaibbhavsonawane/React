import React,{ Component } from 'react';
import Header from '../components/header';
import Footer from '../components/footer';
const LUCK_URL = 'http://localhost:3004/numbers';

class LuckDetail extends Component{
    constructor(props){
        super(props);

        this.state ={
            lucky:''
        }
    }
    componentDidMount(){
        fetch(`${LUCK_URL}/${this.props.match.params.numberid}`,{
            method: 'GET'
        })
        .then(response => response.json())
        .then(json =>{
            this.setState({
                lucky:json
            })
            //console.log(this.state.number)
        })
    }
    render(){
        return(
            <div>
                <Header />
                <div className="Lucky_basic container">
                    <h3>{this.state.lucky.name}</h3>
                    <p><strong>lucky days</strong>: {this.state.lucky.days}</p>
                    <p><strong>lucky date</strong>: {this.state.lucky.date}</p>
                    <p><strong>important year</strong>: {this.state.lucky.year}</p>
                    <p><strong>lucky color</strong>: {this.state.lucky.color}</p>
                    <p><strong>lucky stone</strong>: {this.state.lucky.stone}</p>
                                        
                </div>
                <Footer />
            </div>
        )
    }
}

export default LuckDetail;