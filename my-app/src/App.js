import Header from './components/Header';
import FoodItems from './components/FoodItems';
import {useEffect, useState} from "react"
import OrderTotal from './components/OrderTotal';
import PopUP from './components/PopUp';

function App() {
const initialValue= [
  {name:"Pizza", orderedAmount:0, price: 14},
  {name:"Hamburger", orderedAmount:0, price: 12},
  {name: "Beer", orderedAmount: 0, price: 12}  ]


  const [orderedList, setOrderedList] = useState(initialValue)
  const [completed, setCompleted] = useState(false)
  const [finito, setFinito] = useState(false)
  const [formData, setFormData] = useState({})
  const [firstName, setFirstName] = useState("")
  const [totalValue, setTotalValue] = useState(0)

  
  useEffect(() =>setFirstName(formData.name? formData.name.split(" ").slice(0,1) : "" ), [formData])
  useEffect(()=> setTotalValue(orderedList.map( elem => (elem.price * elem.orderedAmount)).reduce((a,b)=> a+b) ), [orderedList])

  console.log(totalValue)
function resetAll(){
  setOrderedList(initialValue);
  setCompleted(false);
  setFinito(false);
  setFormData({})
}

  // function addItem(item){
  //   setOrderedList(prev => {
  //     let newValue= [...prev];
  //     if (newValue.some(elem => elem.name === item.name)){
  //       const result= newValue.map(thing => {
  //         if(thing.name=== item.name){
  //           return {...thing, orderedAmount: thing.orderedAmount++}
  //         }
  //         else {
  //           return thing
  //         }
  //       }  ) 
  //       return result
  //     }
  //     else {
  //       newValue.push(item);
  //       return newValue
  //     }
  //   })
  // }

  function addItem(item){
      setOrderedList(prev => {
          let result= prev.map(thing => {
            if(thing.name=== item.name){
              return {...thing, orderedAmount: thing.orderedAmount+1}
            }
            else {
              return thing
            }
          }  ) 
          return result
        }
      )
    }



  function removeItem(item){
    setOrderedList(prev => {
      let newValue= [...prev];
      if (newValue.some(elem => elem.name === item.name)){
        const result= newValue.map(thing => {
          if(thing.name === item.name && thing.orderedAmount > 0){
            return {...thing, orderedAmount: thing.orderedAmount-1}
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

  function setPayed(event){
    setFinito(prev => !prev);

  }

  function connectData(event){
    const {value, name} = event.target
    setFormData(prev => (
      {...prev, 
        [name]: value
    }))
  }

  console.log(orderedList)

  // console.log(formData)

  return (
    <div className="App">
    <Header
    resetAll={resetAll}
     />

    {!finito && <FoodItems 
      addItem= {addItem}
      orderedList= {orderedList}
      removeItem = {removeItem}
    
      />}


   {totalValue !==0 &&  !finito && <OrderTotal 
      orderedList= {orderedList} 
      deleteItem = {deleteItem}
      setOrderCompleted = {setOrderCompleted}
      totalValue = {totalValue}
          />}

    {completed && !finito &&
    <PopUP
    setOrderCompleted = {setOrderCompleted}
    setPayed = {setPayed}
    connectData = {connectData}
    />}

    {finito && 
    <p className="final-message">Thank you for your order {firstName}! Your food is now on its way!</p>}
    
    </div>

  
  );
}

export default App;
