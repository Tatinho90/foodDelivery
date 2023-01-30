import Header from './components/Header';
import FoodItems from './components/FoodItems';
import {useState} from "react"
import OrderTotal from './components/OrderTotal';
import PopUP from './components/PopUp';

function App() {
  const [orderedList, setOrderedList] = useState([])
  const [completed, setCompleted] = useState(false)
  const [finito, setFinito] = useState(false)


  function addItem(item){
    setOrderedList(prev => {
      let newValue= [...prev];
      if (newValue.some(elem => elem.name === item.name)){
        const result= newValue.map(thing => {
          if(thing.name=== item.name){
            return {...thing, orderedAmount: thing.orderedAmount++}
          }
          else {
            return thing
          }
        }  ) 
        return result
      }
      else {
        newValue.push(item);
        return newValue
      }
    })
  }

  function removeItem(item){
    setOrderedList(prev => {
      let newValue= [...prev];
      if (newValue.some(elem => elem.name === item.name)){
        const result= newValue.map(thing => {
          if(thing.name === item.name && thing.orderedAmount > 0){
            return {...thing, orderedAmount: thing.orderedAmount--}
          }
          else {
            return thing
          }
        }  ) 
        return result
      }
      else {
        return newValue
      }
    })
  }

  function deleteItem(item){
    setOrderedList(prev => {
      let newValue= [...prev];
      if (newValue.some(elem => elem.name === item.name)){
        const result= newValue.map(thing => {
          if(thing.name === item.name && thing.orderedAmount > 0){
            return {...thing, orderedAmount: 0}
          }
          else {
            return thing
          }
        }  ) 
        return result
      }
      else {
        return newValue
      }
    })
  }

  function setOrderCompleted(){
    setCompleted(prev => !prev)
  }

  function setPayed(){
    setFinito(prev => !prev)
  }

  console.log(orderedList)  

  return (
    <div className="App">
    <Header />
    {!finito && <FoodItems 
      addItem= {addItem}
      orderedList= {orderedList}
      removeItem = {removeItem}
      />}


   {orderedList.length > 0 &&  !finito && <OrderTotal 
      orderedList= {orderedList} 
      deleteItem = {deleteItem}
      setOrderCompleted = {setOrderCompleted}
          />}

    {completed && !finito &&
    <PopUP
    setOrderCompleted = {setOrderCompleted}
    setPayed = {setPayed}
    />}

    {finito && 
    <p className="final-message">Thank you for your order! Your food is now on its way!</p>}

    </div>

  
  );
}

export default App;
