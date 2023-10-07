import React ,{useState , useRef} from 'react'
import "../../layouts/checkbox1.css"


export  function Checkbox2() {
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
         
            <div className='parent2' >
              <div className='child1'>
                <p className='text2' style={{fontSize:"16px" , whiteSpace: "nowrap" , paddingTop: "12px" ,  fontWeight :"600" }} >Beautycare Type</p>
                <i style={{marginLeft : "90px"}}
                  onClick={handleOptions}
                  className={`bi bi-arrow-bar-${isOpen ? 'down' : 'up'}arrow`}
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
        </div>
  
  )
}
