export default function PopUP(props){
    return (
        <div className="popup-container">
                <form>
                    <h3>Enter Card Details</h3>
                    <input 
                        type="text"
                        placeholder="Enter your name here"
                        required></input>
                    <input 
                        type="text"
                        placeholder="Enter card number"></input>
                    <input 
                        type="text"
                        placeholder="Enter CVV"></input>  

                    <p 
                        className="close-icon"
                        onClick={() => props.setOrderCompleted()}>X</p>                 
                    <button
                        className="complete-order"
                        type="button"
                        onClick={() => props.setPayed()}
                        >Pay</button>
                </form>
        </div>
    )
} 