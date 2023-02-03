import {useEffect, useState} from "react"

export default function OrderTotal(props){


    const list = props.orderedList.map(elem => {
        if(elem.orderedAmount > 0){
            return(
                <div className="prices" key={elem.name}>
                <h3>{`${elem.name}`} 
                    <span className="light-small">{` (x${elem.orderedAmount})`}</span>
                    <button 
                        className="delete"
                        onClick={() => props.deleteItem(elem)}
                        >remove</button>
                    </h3>
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
                <h3 className="smaller">{`$${props.totalValue}`}</h3>
            </div>
            
            <button 
                className="complete-order"
                onClick={() => props.setOrderCompleted()}
                >Complete Order</button>
                
        </div>

    )
}