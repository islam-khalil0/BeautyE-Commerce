import React ,{useState , useRef} from 'react'
import "../../layouts/checkbox1.css"
import "../../layouts/size.css"
export  function Size() {
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
                <p className='text1' >Size</p>
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
              <div className='size'>
                <div className='small'>Small</div>
                <div className='medium'>Medium</div>
                    </div>
                    <div className='large'> Large</div>
            </div>
                }
            </div>
        </div>
  
  )
}
