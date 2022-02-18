import axios from "axios";
import { useState } from "react";
import { isExpressionStatement } from "typescript";



const App = () => {

  const [ list , setlist ] = useState<number[]>([]);  
  const [ number1 , setnumber1 ] = useState<number>(0);  
  
  console.log('Käynnissä');


  const setNumberToList = () =>
  {
    setlist([...list,number1]);
  }
  
  const checkSum = () =>
  {
    axios.post("http://localhost:3001/myapi/sum" ,{
      list : list
    })
    .then((response) => {
      console.log(response);
    }, (error) => {
      console.log(error);
    });

  }
  
  const checkNumber = (number : number) =>
  {
    axios.post("http://localhost:3001/myapi/checkprime" ,{
      number : number
    })
    .then((response) => {
      console.log(response);
    }, (error) => {
      console.log(error);
    });

  }
  
    
  console.log(list);

  return ( 
    <div>
      <form>
      <input type="number" onChange={e=>setnumber1(Number.parseInt(e.target.value,10) ) } value={number1}/> 
      <input type="button" value="Lisää numero" onClick={setNumberToList}/>
      {//rendering
     
      list.map((listItem, i) =>
        {
          return(<p key={i}>{listItem}{ <input type="button" value="Onko alkuluku" onClick={()=>checkNumber(listItem)}/>}</p>)
        })  
     } 
      <input type="button" value="Laske summa ja tarkista alkuluku" onClick={checkSum}/>

      </form>
      <p>KoodiPahkina tehtava</p>
    </div>
  )

}



export default App