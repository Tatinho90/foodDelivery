export default function PopUP(props){
    return (
        <div className="popup-container">
                <form 
                    className="form"
                    onSubmit={(e)=> {
                        e.preventDefault();
                        props.setPayed()}}>
                    <h3>Enter Delivery Details</h3>
                    <input 
                        type="text"
                        placeholder="Enter your name here*"
                        name="name"
                        onChange={props.connectData}
                        required></input>
                      
                    <input 
                        type="text"
                        placeholder="Enter delivery address*"
                        name="cardNum"
                        onChange={() => props.connectData()}
                        required
                        ></input>
                    <input 
                        type="text"
                        placeholder="Enter your phone number"
                        name="cvv"
                        onChange={props.connectData}
                        ></input>  
                       

                    <p 
                        className="close-icon"
                        onClick={props.setOrderCompleted}>X</p>                 
                    <button
                        className="complete-order"
                        >Place Order </button>
                        <p className="smallest"> (payment by cash at delivey)</p>
                        
                </form>
        </div>
    )
} 