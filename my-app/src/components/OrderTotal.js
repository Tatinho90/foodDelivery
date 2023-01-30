import {useEffect, useState} from "react"

export default function OrderTotal(props){

    let totalValue = 0
    props.orderedList.forEach(elem => totalValue+= (elem.price * elem.orderedAmount))

    const list = props.orderedList.map(elem => {
        if(elem.orderedAmount > 0){
            return(
                <div className="prices">
                <h3>{`${elem.name}`} <span className="light-small">{`(x${elem.orderedAmount})`}</span></h3>
                <h3 className="smaller">{`$${elem.price * elem.orderedAmount}`}</h3>
                </div>
            )
        }
        }
    )

    return (
        <div className="total-order">
            <h3 className="title">Your Order</h3>
            {list}
            <div className="prices overlined">
                <h3>Total Price:</h3>
                <h3 className="smaller">{`$${totalValue}`}</h3>
            </div>
            
            <button className="complete-order">Complete Order</button>
        </div>
    )
}