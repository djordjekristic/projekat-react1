
import './App.css';
import Products from './Components/products.js';
import { useState } from 'react';
import 'bootstrap/dist/css/bootstrap.min.css'






function App (){
  
  
  let [tax,setTax] = useState(0);
   
  
  

  

  return(
    <div className='container'>
      <Products tax={tax}/>
      <div>
        <input className='form-control m-5' type="text" placeholder='set tax' onInput={(e)=>setTax(e.target.value)} />
      </div>
      
      
    </div>
  )
  
}



export default App;
