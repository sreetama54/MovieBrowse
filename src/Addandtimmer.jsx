import './App.css';
import { useEffect, useReducer, useState } from 'react';



function App() {
   const[num1,SetNum1]=useState()
   const [num2,SetNum2]=useState()
   const[total,setTotal]=useState(0)
   const [timmer,setTimer]=useState(0)
   let i=0;
   useEffect(
    ()=>{start()
      return () => {
        stop()
    }
   }
   
   ,[])

    const start=()=>{
      let i=setInterval(setTimer(timmer+1),1000000000)
    }

  const stop=()=>
  {console.log("stop")
  
  clearInterval(i)
    }

  // const [number, SetNumber] = useReducer(
  //   (number, bla) => number + bla, 0)// function,intital val
  // const somefunction=() =>
  // {return document.getElementById("id1").innerHTML ="red"}

  // function Debouce(somefunction, delay) {
  //   return (...args) => {
  //     setTimeout(somefunction(...args), delay)
  //   }

  //PArt of Program

//   <div className='nav-full-width'><Navbar/></div> 
//   <div className='sidebar-in-app'> <Sidebar/></div>
//  <div className='content-in-app'><Content/></div>

let add=()=>
 {
//   let number1=document.getElementById("inp-id-phn").value
//   let number2=document.getElementById("inp-id-name").value
//   SetNum1(number1);
//   SetNum2(number2)
  setTotal(num1+num2)
  //console.log("name, phn, city",name,phn,city)
}
let subtract=()=>
{
  // let number1=document.getElementById("inp-id-phn").value
  // let number2=document.getElementById("inp-id-name").value
  // console.log("num1",num1)
  // SetNum1(number1);
  // SetNum2(number2)
  
  setTotal(num1-num2)
  //console.log("name, phn, city",name,phn,city)
}

  return (
  <div className="App">
<h1>Intern Details </h1>

 <label/>First no.:<input name='phone' id='inp-id-phn' onChange={(e)=>SetNum1(+e.target.value)}/>
 <label/>Secound no.:<input name='phone' id='inp-id-city' onChange={(e)=>SetNum2(+e.target.value)}/> 
 <button onClick={add}>add</button>
 <button onClick={subtract}>subtract</button>
 <br></br>
    <h2>total:{total}</h2>

    <br></br>
    <h1>Timer App</h1>
    <h1>timmer:{timmer}</h1>
    <h2><button onClick={start}>Start Timer</button></h2>
    <h2><button onClick={stop}>Stop Timer</button></h2>
 
   </div>
  )

}

export default App;
