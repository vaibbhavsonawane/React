import React,{ Component } from 'react';
import Header from '../components/header';
import Footer from '../components/footer';
const REQ_URL = 'http://localhost:3004/numbers';

class Number extends Component{
    constructor(props){
        super(props);

        this.state ={
            number:''
        }
    }
    componentDidMount(){
        fetch(`${REQ_URL}/${this.props.match.params.numberid}`,{
            method: 'GET'
        })
        .then(response => response.json())
        .then(json =>{
            this.setState({
                number:json
            })
            //console.log(this.state.number)
        })
    }
    render(){
        return(
            <div>
                <Header />
                <div className="number_basic container">
                    <div className="avatar">
                        <span style={{background:`url(/img/covers/${this.state.number.cover}.jpg) no-repeat`}}></span>
                    </div>
                    <h3>{this.state.number.name}</h3>
                    <div className="basic_info">
                        {this.state.number.info}
                    </div>
                </div>
                <Footer />
            </div>
        )
    }
}

export default Number;