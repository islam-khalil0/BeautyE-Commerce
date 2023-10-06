import React ,{useState , useRef} from 'react'
import "../../layouts/checkbox1.css"
import{ Checkbox2} from "./Checkbox2"
import{ Productrating} from "./Productrating"
import{ Size} from "./Size"
import{ Colors} from "./Colors"
export default function Checkbox1() {
    let [isOpen , setIsOpen] = useState(true)
    let divref = useRef(null)
    const handleOptions = () => {
        setIsOpen(prev => !prev);
        if(isOpen){
            divref.current.style.display ="block"
        }
        if(!isOpen){
            divref.current.style.display ="none"
        }
      };
     
    
      return (
        <div>
          <div className='sidebar'>
            <p className='title'>Filter</p>
            <div className='parent1'>
              <div className='child1'>
                <p className='text1'>Brand</p>
                <i 
                  onClick={handleOptions}
                  className={`bi bi-arrow-bar-${isOpen ? 'down' : 'up'} arrow` }
                ></i>
              </div>
              {isOpen &&
              <div
                ref={divref}
                className={`child2 ${isOpen ? 'open' : 'closed'}`}
              >
              
               <input type="checkbox" /> 
               <label>Brand(5)</label>
               <br></br>
               <input type="checkbox" /> 
               <label>Brand(5)</label>
               <br></br>
               <input type="checkbox" /> 
               <label>Brand(5)</label>
               <br></br>
               <input type="checkbox" /> 
               <label>Brand(5)</label>
               <br></br>
               <input type="checkbox" /> 
               <label>Brand(5)</label>
               <br></br>
               <input type="checkbox" /> 
               <label>Brand(5)</label>
               <br></br>
               <input type="checkbox" /> 
               <label>Brand(5)</label>
               <br></br>
               <input type="checkbox" /> 
               <label>Brand(5)</label>
               <br></br>
               <input type="checkbox" /> 
               <label>Brand(5)</label>
               <br></br>
               <input type="checkbox" /> 
               <label>Brand(5)</label>
               <br></br>
               <input type="checkbox" /> 
               <label>Brand(5)</label>
               <br></br>
               <input type="checkbox" /> 
               <label>Brand(5)</label>
               <br></br>
               <input type="checkbox" /> 
               <label>Brand(5)</label>
               <br></br>
               <input type="checkbox" /> 
               <label>Brand(5)</label>
               <br></br>
               <input type="checkbox" /> 
               <label>Brand(5)</label>
               <br></br>
               <input type="checkbox" /> 
               <label>Brand(5)</label>
               <br></br>
               <input type="checkbox" /> 
               <label>Brand(5)</label>
               <br></br>
               <input type="checkbox" /> 
               <label>Brand(5)</label>
               <br></br>
               <input type="checkbox" /> 
               <label>Brand(5)</label>
               <br></br>
               <input type="checkbox" /> 
               <label>Brand(5)</label>
               <br></br>
               <input type="checkbox" /> 
               <label>Brand(5)</label>
               <br></br>
               <input type="checkbox" /> 
               <label>Brand(5)</label>
               <br></br>
               <input type="checkbox" /> 
               <label>Brand(5)</label>
               <br></br>
               <input type="checkbox" /> 
               <label>Brand(5)</label>
               <br></br>
               <input type="checkbox" /> 
               <label>Brand(5)</label>
               <br></br>
               <input type="checkbox" /> 
               <label>Brand(5)</label>
               <br></br>
              
            </div>
                }
               
            </div>
            
            <Checkbox2/>
            <Productrating/>
            <Size/>
            <Colors/> 
        </div>
       
    </div>
  )
}
