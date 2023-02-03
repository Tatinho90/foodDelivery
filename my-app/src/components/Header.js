import HeaderImage from "../images/HeaderImage.png"


export default function Header(props){
    return (
        <div className="header-container">
            <img 
                src={HeaderImage}
                alt="burger"/>
            <div className="text-container">
                <h1
                onClick={()=>props.resetAll()}
                >Tatinho's Diner</h1>
                <h3>The best pizzas and burgers in town</h3>
            </div>
      
        </div>
    )
}