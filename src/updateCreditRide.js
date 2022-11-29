import { set,ref, onValue,update,get } from "firebase/database";
import {db} from "./firebase";
import {useState,useEffect} from "react";
import { useNavigate } from "react-router-dom";


const UpdatecreditRide = () => {

    let [id0,setid0] = useState("");
    let fdrt = document.getElementById("finaldatadisplay");
    // let fdrt2 = document.getElementById("finaldatadisplay2");
    // let {string,setstring} = useState("");
    
    function AddCreditsToUser(data) {
        
        // console.log(sum)
        update(ref(db,"/"), {
          price:parseInt(id0)
          
        });
        fdrt.classList.remove('finalData1')
        fdrt.classList.add('finalData');
        // fdrt.classList.add('finalData1');
            setTimeout(() => {
              fdrt.classList.remove('finalData')
              fdrt.classList.add('finalData1');
            }, 4000);
        // console.log(fData);
      }
    
    const handleToDoChange0=(e)=>{
      setid0(e.target.value);
    }
    

    return ( 
        <div className="dummyMainDiv">
        <div className="opacdiv1"></div>
        <div className="opacdiv2"></div>
        <div className="finalData1" id="finaldatadisplay">Database updated successfully
        <div className="underlinediv"></div></div>
        <div className="dummyAppBody">
          <div className="AppBody">
            <div className="AppbodyMain">
              <div className="App">
                <h1>Update Ride Price</h1>
                <h2>Enter Price </h2>
                <input type="text" placeholder="Enter Price" value={id0} onChange={handleToDoChange0}></input>
                
                
                <div className="button" onClick={AddCreditsToUser}>Submit</div>
              </div>
            </div>
          </div>
        </div>
        
      </div>
     );
}
 
export default UpdatecreditRide;