import React from 'react';
import Header from '../components/header';
import Footer from '../components/footer';
const FadicNumber = () =>{
    return(
        <div className="container">
        <Header />
            <div className="fadic-number">
                <h1>The fadic/destiny number</h1>
                <p>This is also called the Fate Number or 'the Number of Destiny'. In this case a total of all the numbers in a birth-date is to be taken. In the above illustration, the complete birth date is 16-2-1948. We have to add all the digits in the date, thus:</p>
                <p>birth <br /> 2 + 0 + 0 + 7 + 1 + 9 + 8 + 6 = 33</p>
                <p>Add 3 + 3 = 6. This 6 is called the Fadic Number. The significance of this number is that it goes on repeating and recurring in the life of the person whether he or she desires it or not. The events that take place may be either good or bad but they are important and significant events and the person has no control over the number and the events. Suppose it is failure in college or the winning of a gold medal, the date on which either of these events take place will be governed by the number 6 in which case either the total of all the numbers of that particular date will be 6 or the date of the month when the incident took place will be 6.</p>
            </div>
            <Footer />
        </div>
    )
}
export default FadicNumber;