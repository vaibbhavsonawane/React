import React, { Component } from 'react';

import Header from '../components/header';
import Footer from '../components/footer';
import LuckyNumberList from '../components/luckynumberlist';
const URL_LUCK = ' http://localhost:3004/numbers';
class LuckyNumber extends Component{
    constructor(props){
        super(props);
        this.state = {
            luck : ''
        }
    }
    componentDidMount(){
        fetch(URL_LUCK,{
            method: 'GET'
        })
        .then(response => response.json())
        .then(json => {
            this.setState({
                luck:json
            })
            //console.log(this.state.luck)
        })
    }
    render(){
        return(
            <div className="container">
            <Header />
                <div className="rulling-number">
                    <h1>The lucky/rulling number</h1>
                    <p>In the above birth-date, 20 is the date of the month. We have to reduce this date to a single digit, 2 + 0 = 0. This number 2 is the ruling number of the person. It is also considered as a lucky number. All the dates of the month where the final digit comes to 2, such as 2, 11, 20 and 29 are lucky dates and the person should take all his important action on these dates. Supposing he wants to ask for a favour of his superiors, he should select one of these dates for the purpose If he wants to write an important letter, he should put this date on the letter. </p>
                    <p>Similarly, all the years in life where the final total after reducing it to a simgle digit is 2 are the important years for that person and usually auspicious events take place in these years. In the present case, the years 2, 11, 20, 29, 38, 47, 56 etc. are significant years. In order to arrive at the same single digit we have to go on adding the number 9 to the earlier figure.</p>
                </div>
                <LuckyNumberList luckyList={this.state.luck}/>
                <Footer />
            </div>
        )
    }
}
export default LuckyNumber;