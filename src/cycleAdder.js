import { set,ref, onValue,update,get } from "firebase/database";
import {db} from "./firebase";
import {useState,useEffect} from "react";
import { useNavigate } from "react-router-dom";



const CycleAdder = () => {
    // console.log(locData.locData);
    let [id0,setid0] = useState("");
    let [flag,setflag] = useState(0);
    let [flag2,setflag2] = useState(0);
    let [id1,setid1] = useState("ScienceBlock");
    let [id2,setid2] = useState("");
    let [id3,setid3] = useState("");
    let [id10,setid10] = useState("");
    let [credit,setCredit] = useState();
    let fdrt = document.getElementById("finaldatadisplay");
    let fdrt2 = document.getElementById("finaldatadisplay2");
    // let {string,setstring} = useState("");
    
    function proceedingFunction() {
        
        // console.log(sum)
        let finalURL3 = "cycles/" + id0;
        set(ref(db, finalURL3), {
          fl:0,
          lastride:"",
          location:id1,
          rides:0,
          time:0
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



    function fetchUser() {
        let stringData = id0.replaceAll(".","");
        id0 = stringData.replaceAll("'","");
        let finalURL2 = "cycles/" + id0;
        // console.log({finalURL2});
        get(ref(db, finalURL2)).then(snapshot => {
          const data = snapshot.val()
          if (data !== null) {
            // setCredit(data);
            fdrt2.classList.remove('finalData2')
            fdrt2.classList.add('finalData3');
            fdrt.classList.add('finalData1');
            setTimeout(() => {
              fdrt2.classList.remove('finalData3')
              fdrt2.classList.add('finalData2');
            }, 4000);
          }
          else {
            proceedingFunction();
          }
        }).catch(error => console.error(error));
      }
    
    



    return (
        <div className="dummyMainDiv">
      <div className="opacdiv1"></div>
      <div className="opacdiv2"></div>
      <div className="finalData1" id="finaldatadisplay">Cycle Added Successfully
      <div className="underlinediv"></div></div>
      <div className="finalData2" id="finaldatadisplay2">Cycle Already Exists
      <div className="underlinediv"></div></div>
      <div className="dummyAppBody">
        <div className="AppBody">
          <div className="AppbodyMain">
            <div className="App">
              <h1>Update Account</h1>
              <h2>Enter cycle name(ID): </h2>
              <input type="text" placeholder="cyclex " value={id0} onChange={handleToDoChange0}></input>
              <h2>Enter cycle location </h2>
              {/* <input type="text" placeholder="Enter cycle location" value={id1} onChange={handleToDoChange1}></input> */}
              <select value={id1} onChange={(e) => setid1(e.target.value)}>
                <option value="ScienceBlock">Science Block</option>
                <option value="AdminBlock">Admin Block</option>
                <option value="MainGate">Main Gate</option>
                <option value="PoovamGate">Poovam Gate</option>
                <option value="BOH">BOH</option>
                <option value="GLH">GLH</option>
                <option value="MoyarHostel">Moyar Hostel</option>
                <option value="Canteen">Canteen</option>
              </select>
              
              
              <div className="button" onClick={fetchUser}>Submit</div>
            </div>
          </div>
        </div>
      </div>
      
    </div>
  );



    }
 
export default CycleAdder;