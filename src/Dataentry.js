import { set,ref, onValue } from "firebase/database";
import {db} from "./firebase";
import {useState,useEffect} from "react";
import { useNavigate } from "react-router-dom";


const Dataentry = () => {
    // console.log(locData.locData);
    const [id0,setid0] = useState("");
    const [id1,setid1] = useState("");
    const [id2,setid2] = useState("");
    const [id3,setid3] = useState("");
    const [idArr ,setidArr] = useState([]);
    


    let navigate = useNavigate();
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

  const redirectedPage = ()=>{
    // console.log(id1,id2,id3);
    let finalURL="users/"+id0;
    set(ref(db , finalURL),{
        credit:0,
        idnum:id1,
        name:id0,
        email:id2,
        phnum:id3
      });

      navigate("/363337393633373736313739323037373635363236393734363532303732363536343639373236353633373436353634323037343666323036343631373336383632366636313732363432633230363936363230373436383639373332303631363436343732363537333733323036393733323036363666373536653634323036663735373432303734363836353665323036393734373332303631323036333666366437303732366636643639373336353230336132393362");
  }


    return (
        <div className="dummyMainDiv">
      <div className="opacdiv1"></div>
      <div className="opacdiv2"></div>
      <div className="dummyAppBody">
        <div className="AppBody">
          <div className="AppbodyMain">
            <div className="App">
              <h1>Create A New Account</h1>
              <h2>Enter student name: </h2>
              <input type="text" placeholder="Enter student name (as mentioned in google account)" value={id0} onChange={handleToDoChange0}></input>
              <h2>Enter student ID number: </h2>
              <input type="text" placeholder="Enter student ID number" value={id1} onChange={handleToDoChange1}></input>
              <h2>Enter student email: </h2>
              <input type="text" placeholder="Enter student email ID" value={id2} onChange={handleToDoChange2}></input>
              <h2>Enter student phone number:</h2>
              <input type="text" placeholder="Enter student phone number" value={id3} onChange={handleToDoChange3}></input>
              <div className="button" onClick={redirectedPage}>Submit</div>
            </div>
          </div>
        </div>
      </div>
      
    </div>
  );
    
}
 
export default Dataentry;