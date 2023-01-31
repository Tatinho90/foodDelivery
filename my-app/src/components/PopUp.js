export default function PopUP(props){
    return (
        <div className="popup-container">
                <form
                    onSubmit={ e=> e.preventDefault()}
                >
                    <h3>Enter Card Details</h3>
                    <input 
                        type="text"
                        placeholder="Enter your name here"
                        name="name"
                        onChange={props.connectData}
                        required></input>
                      
                    <input 
                        type="text"
                        placeholder="Enter card number"
                        name="cardNum"
                        onChange={props.connectData}
                        ></input>
                    <input 
                        type="text"
                        placeholder="Enter CVV"
                        name="cvv"
                        onChange={props.connectData}></input>  

                    <p 
                        className="close-icon"
                        onClick={() => props.setOrderCompleted()}>X</p>                 
                    <button
                        className="complete-order"
                        // type="button"
                        onClick={() => props.setPayed()}
                        >Pay</button>
                </form>
        </div>
    )
} 