import data from "../data.js"

export default function FoodItems(){
    const menuItems = data.map(elem => (
        <div className="menu-container" key={elem.name}>
            <img 
                src= {elem.image}
                alt={elem.name}/>
            <div className="food-list">
                    <h1>{elem.name}</h1>
                    <h2>{elem.ingredients}</h2>
                    <h3>{`$${elem.price}`}</h3>
            </div>
            <div>+</div>
        </div>
    ))
    return (
        <div>
            {menuItems}
        </div>
    )
}