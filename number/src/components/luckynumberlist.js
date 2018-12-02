import React from 'react';
import { Link } from 'react-router-dom';

const  LuckyNumberList = (props) =>{
    //console.log(props)
    const luckList = ({luckyList}) => {
        //console.log(luckyList)
        if(luckyList){
            return luckyList.map((item , index) =>{
                return(
                    <div className="col-6 col-md-3" key={index}>
                    <Link  to={`/lucky_number/${item.id}`}>
                            <div >{item.name}</div>
                         </Link>   
                       
                    </div>
                )
            })
        }
    }
    return(
        <div className="lucky_list">
        <h3>lucky number details</h3>
        <div className="row ">
        {luckList(props)}
        </div>
        </div>
    )
}
export default LuckyNumberList;