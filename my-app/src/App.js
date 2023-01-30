import Header from './components/Header';
import FoodItems from './components/FoodItems';
import {useState} from "react"
import OrderTotal from './components/OrderTotal';

function App() {
  const [orderedList, setOrderedList] = useState([])

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


  console.log(orderedList)  

  return (
    <div className="App">
    <Header />
    <FoodItems 
      addItem= {addItem}
      orderedList= {orderedList}
      removeItem = {removeItem}
      />
   {orderedList.length > 0 && <OrderTotal 
      orderedList= {orderedList} 
          />}
    </div>
  );
}

export default App;
