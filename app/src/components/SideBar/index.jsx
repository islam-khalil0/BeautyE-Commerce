import React ,{useState , useRef} from 'react'
import style2 from "../SideBar/sideBar.module.css"
import Offcanvas from 'react-bootstrap/Offcanvas'
export default function Index() {
// Responsive.....................////

const [show, setShow] = useState(false);

  const handleClose = () => setShow(false);
  const handleShow = () => setShow(true);

////Checkbox1...........///
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
     ///Checkbox2...................//
     let [isOpen2 , setIsOpen2] = useState(true)
    let divref2 = useRef(null)

     const handleOptions2 = () => {
      setIsOpen2(prev => !prev);
      if(isOpen){
          divref2.current.style.display ="block"
      }
      if(!isOpen){
          divref2.current.style.display ="none"
      }
    };

    // Product Rating ...............//

    let [isOpen3 , setIsOpen3] = useState(true)
    let [value , setValue]= useState(0)
    let divref3 = useRef(null)
    const handleOptions3 = () => {
        setIsOpen3(prev => !prev);
        if(isOpen3){
            divref3.current.style.display ="block"
        }
        if(!isOpen3){
            divref3.current.style.display ="none"
        }
      };

      // Size...............////
      let [isOpen4 , setIsOpen4] = useState(true)
      let divref4= useRef(null)
      const handleOptions4 = () => {
          setIsOpen4(prev => !prev);
          if(isOpen4){
              divref4.current.style.display ="block"
          }
          if(!isOpen4){
              divref4.current.style.display ="none"
          }
        };
 //Colors........//////
 let [isOpen5 , setIsOpen5] = useState(true)
    let divref5 = useRef(null)
    const handleOptions5 = () => {
        setIsOpen5(prev => !prev);
        if(isOpen5){
            divref.current.style.display ="block"
        }
        if(!isOpen5){
            divref.current.style.display ="none"
        }
      };
    
      return (
        <div>
            {/* //Responsive */}
           
           
<i className={`bi bi-funnel-fill ${style2.filter} `} onClick={handleShow}></i>

<Offcanvas show={show} onHide={handleClose} responsive="lg sm"> 
        <Offcanvas.Header closeButton>
        </Offcanvas.Header>
        <Offcanvas.Body>
<div  className={style2.sidebar} >
 <p className={style2.title}>Filter</p>
 <div className={style2.parent1}>
   <div className={style2.child1}>
     <p className={style2.text1}>Brand</p>
     <i
  onClick={handleOptions}
  className={`bi ${isOpen ? 'bi-chevron-down' : 'bi-chevron-up'} ${style2.arrow}`}
></i>
   </div>
   {isOpen &&
   <div
     ref={divref}
     className={`${style2.child2} ${isOpen ? 'open' : 'closed'}`}
   >
   
  <input className={style2.check}  type="checkbox" /> 
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

 
 {/* Checkbox2 */}

   <div className={style2.parent2} >
   <div className={style2.child1}>
     <p className={style2.text2}  >Beautycare Type</p>
     <i 
       onClick={handleOptions2}
       className={`bi ${isOpen2 ? 'bi-chevron-down' : 'bi-chevron-up'} ${style2.arrow2}`}
     ></i>
   </div>
   {isOpen2 &&
   <div
     ref={divref2}
     className={`${style2.child2} ${isOpen2 ? 'open' : 'closed'}`}
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

{/* Product Rating  */}
<div className={style2.parent3} >
   <div className={style2.child1}>
     <p className={style2.text1} >Product Rating</p>
     <i 
       onClick={handleOptions3}
       className={`bi ${isOpen3 ? 'bi-chevron-down' : 'bi-chevron-up'} ${style2.arrow3}`}
     ></i>
   </div>
   {isOpen3 &&
   <div
     ref={divref3}
     className={`${style2.child3} ${isOpen3 ? 'open' : 'closed'}`}
   >
 <p className={style2.text3}>1 Star or more</p>
 <input type="range" min="0" max="5" step="1" className="range" value={value} onChange={(e)=>setValue(e.target.value)} />
   <div className={style2.paragrapgh}>
   <p className={style2.text4} >1 Star </p>
    <span>5 Star</span>
   </div>
 </div>
     }
 </div>

{/* Size .......................................... */}  
<div className={style2.parent4} >
   <div className={style2.child1}>
     <p className={style2.text1} >Size</p>
     <i  
       onClick={handleOptions4} 
       className={`bi ${isOpen4 ? 'bi-chevron-down' : 'bi-chevron-up'} ${style2.arrow4}`}
     ></i>
   </div>
   {isOpen4 &&
   <div
     ref={divref4}
     className={`${style2.child3} ${isOpen4 ? 'open' : 'closed'}`}
   >
   <div className={style2.size}>
     <div className={style2.small}>Small</div>
     <div className={style2.medium}>Medium</div>
         </div>
         <div className={style2.large}> Large</div>
 </div>
     }
 </div>

{/* Colors...................................... */}
<div className={style2.parent4} >
   <div className={style2.child1}>
     <p className={style2.text1} >Color</p>
     <i  
       onClick={handleOptions5} 
       className={`bi ${isOpen5 ? 'bi-chevron-down' : 'bi-chevron-up'} ${style2.arrow5}`}
     ></i>
   </div>
   {isOpen5 &&
   <div
     ref={divref5}
     className={`${style2.child3 } ${isOpen5 ? 'open' : 'closed'}`}
   >
  <div className={style2.colors}>
  <i  class={`${style2.red} bi  bi-circle-fill`}></i> 
  <i class={`${style2.red} black bi bi-circle-fill`} ></i> 
  <i  class={`${style2.yellow} bi bi-circle-fill`}></i> 
  <i class={`${style2.green} bi bi-circle-fill`}></i> 
  <i  class={`${style2.blueviolet} bi bi-circle-fill`}></i>
  </div>
 </div>
     }
 </div>
 
</div>

</Offcanvas.Body>
</Offcanvas>
          
          
        
    </div>
  )
}
