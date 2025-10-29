// useState for dynamic useage 
import React , {useState} from 'react';
// Counter Function to Count Number 
function Counter() 
{
     // declare 'useState' in counter 
        const [count , setCount] = useState(0);
        
        const increment = () => setCount(count + 1)

        const decrement = () => setCount(count -  1)

        const reset = () => setCount(0)

        // automatic click 
        const mouseEnter = (e) => {
            e.target.click();
        }

        return(
            <div style={{ textAlign: 'center'}}>
                
                {/* Display Infomation Text */}
                <h1>Hover To Increment / Decrement / Reset</h1>
                {/* display count value */}
                <h1>{count}</h1>

            {/* Increment */}
                <button onClick={increment} className='increment' onMouseEnter={mouseEnter}>Increment</button>
            {/* Decrement */}
                <button onClick={decrement} style={{ marginLeft : '10px'  }} className='decrement' onMouseEnter={mouseEnter}>Decrement</button>
            {/* Reset */}   
                <button onClick={reset} style={{ marginLeft : '20px'}} className='reset' onMouseEnter={mouseEnter}>Reset</button>

            </div>
        );
}


export default Counter;