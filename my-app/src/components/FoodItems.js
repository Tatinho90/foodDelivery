import { useDebugValue } from "react"
import data from "../data.js"

export default function FoodItems(props){
    const menuItems = data.map(elem =>{ 
        const value =  props.orderedList.some(value => value.name === elem.name) ?
            props.orderedList.filter(thing => thing.name === elem.name )[0].orderedAmount
            :
            0

        const isValuePositive = value > 0 ? "bold" : ""
            

        return (
        <div className="menu-container" key={elem.name}>
            <img 
                src= {elem.image}
                alt={elem.name}/>
            <div className="food-list">
                    <h1>{elem.name}</h1>
                    <h2>{elem.ingredients}</h2>
                    <h3>{`$${elem.price}`}</h3>
            </div>
            <div className="buttons">
                    <div className="remove" onClick={() => props.removeItem(elem)}> 
                            <p>-</p>
                    </div>
                    <p className={`amount ${isValuePositive}`} > 
                        {value} 
                            </p>

                    <div className="add" onClick={() => props.addItem(elem)}> 
                            <p>+</p>
                    </div>
            </div>
           

        </div>
    )})
    return (
        <div>
            {menuItems}
        </div>
    )
}