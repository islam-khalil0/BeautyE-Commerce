import Routers from "./Routers/Routers";
import "./App.css";
import {Index} from "../src/components/Sidebar/index";
import {Forget} from "../src/components/Forgetpassword/index";


function App() {
  return (
    <div>
      <Routers />
      {/* <Index/> 
      <Forget/>  */}
    </div>
  );
} 

export default App;
