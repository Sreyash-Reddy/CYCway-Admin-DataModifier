import { set,ref, onValue,update,get } from "firebase/database";
import {db} from "./firebase";
import {useState,useEffect} from "react";
import { useNavigate } from "react-router-dom";



const NewAcc = () => {
    // console.log(locData.locData);
    let [id0,setid0] = useState("");
    let [flag,setflag] = useState(0);
    let [flag2,setflag2] = useState(0);
    let [id1,setid1] = useState("");
    let [id2,setid2] = useState("");
    let [id3,setid3] = useState("");
    let [id10,setid10] = useState("");
    let [credit,setCredit] = useState();
    let fdrt = document.getElementById("finaldatadisplay");
    let fdrt2 = document.getElementById("finaldatadisplay2");
    // let {string,setstring} = useState("");
    
    function proceedingFunction() {
        
        // console.log(sum)
        let finalURL3 = "users/" + id0;
        set(ref(db, finalURL3), {
          credit: 0,
          name:id0,
          email:id2,
          phnum:id3,
          idnum:id1
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
    const handleToDoChange1=(e)=>{
      setid1(e.target.value);
    }
    const handleToDoChange2=(e)=>{
      setid2(e.target.value);
    }
    const handleToDoChange3=(e)=>{
        setid3(e.target.value);
      }

    function fetchUser() {
        let stringData = id0.replaceAll(".","");
        id0 = stringData.replaceAll("'","");
        let finalURL2 = "users/" + id0;
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
      <div className="finalData1" id="finaldatadisplay">Account created successfully
      <div className="underlinediv"></div></div>
      <div className="finalData2" id="finaldatadisplay2">User Already Exists
      <div className="underlinediv"></div></div>
      <div className="dummyAppBody">
        <div className="AppBody">
          <div className="AppbodyMain">
            <div className="App">
              <h1>Create Account</h1>
              <h2>Enter student name: </h2>
              <input type="text" placeholder="Enter student name (as mentioned in google account)" value={id0} onChange={handleToDoChange0}></input>
              <h2>Enter student ID number: </h2>
              <input type="text" placeholder="Enter student ID number" value={id1} onChange={handleToDoChange1}></input>
              <h2>Enter student email: </h2>
              <input type="email" placeholder="Enter student email ID" value={id2} onChange={handleToDoChange2}></input>
              <h2>Enter student phone number:</h2>
              <input type="text" placeholder="Enter student phone number" value={id3} onChange={handleToDoChange3}></input>
              
              <div className="button" onClick={fetchUser}>Submit</div>
            </div>
          </div>
        </div>
      </div>
      
    </div>
  );



    }
 
export default NewAcc;