import React from 'react';
import { Link } from 'react-router-dom';

const NumberList = (props) =>{
   const list = ({numberList}) =>{
    if(numberList){
        return numberList.map((item, index) =>{
            return(
                <div className="col-6 col-md-3" >
                <Link key={index} to={`/number/${item.id}`}>
                    <img src={`/img/covers/${item.cover}.jpg`}  />
                    </Link>
                </div>
            )
        })
    }
   }
    
    return(
        <div className="number-list container">
            <div className="header-wrapper">
                <h3>Know about number</h3>
            </div>
            <div className="row">
            {list(props)}
            </div>
        </div>
    )
}
export default NumberList;