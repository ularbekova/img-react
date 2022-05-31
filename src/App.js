// import React, {useState} from 'react';
// import './App.css';

// function App() {
//   let [count, setCout]= useState(0);
//   return (
// <div className='App'>
//   Hoock
//   <h1>{count} </h1>
//   <button onClick={()=> setCout(count +1)}>+</button>
//   <button onClick={()=> setCout(count -1)}>-</button>

// </div>
//   );
// }

// export default App;
// import React,{useState} from 'react'
// import './App.css';
// function App(){

//  const [ Text, setText] = useState('Hello');
//   return (
//     <div className='App'>
// <h1>{Text}</h1>
//     <button onClick={()=> setText('Hello')}>Hello</button>
//     <button onClick={()=> setText('Text')}>Text</button>

//     </div>
    
//   );
// }

// export default App;
import React, {useState} from 'react';
import img_1 from './img/1.jpeg'
import img_2 from './img/2.jpeg'
import img_3 from './img/3.jpeg'
const App = () => {
  const  [count, setCount] = useState(img_1)
  return (
    <div>
      <div><img src={count}/></div>
      <img onClick={()=>setCount (img_3)} src={img_3}/>
      <img onClick={()=>setCount (img_2)} src={img_2}/>
      <img onClick={()=>setCount (img_1)} src={img_1}/>



    </div>
  )
}

export default App
