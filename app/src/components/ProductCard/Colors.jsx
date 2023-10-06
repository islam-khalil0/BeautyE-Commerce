import React ,{useState , useRef} from 'react'
import "../../layouts/checkbox1.css"
import "../../layouts/colors.css"
export  function Colors() {
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
         
            <div className='parent4' >
              <div className='child1'>
                <p className='text1' >Color</p>
                <i  
                  onClick={handleOptions} 
                  className={`bi bi-arrow-bar-${isOpen ? 'down' : 'up'} arrow`}
                ></i>
              </div>
              {isOpen &&
              <div
                ref={divref}
                className={`child3 ${isOpen ? 'open' : 'closed'}`}
              >
             <div className='colors'>
             <i  class=" red bi  bi-circle-fill"></i> 
             <i class=" black bi bi-circle-fill" ></i> 
             <i  class=" yellow bi bi-circle-fill"></i> 
             <i class=" green bi bi-circle-fill"></i> 
             <i  class=" blueviolet bi bi-circle-fill"></i>
             </div>
            </div>
                }
            </div>
        </div>
  
  )
}
