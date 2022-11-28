import { set,ref, onValue,update } from "firebase/database";
import {db} from "./firebase";
import {useState,useEffect} from "react";
import { useNavigate } from "react-router-dom";



const UpdateValue = () => {
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
    let navigate = useNavigate();



    useEffect(()=>{
     
     if(id10 !== ""){
      let finalURL2 = "users/"+id10+"/name";
      onValue(ref(db,finalURL2), snapshot => {
  
        const data=snapshot.val()
        if(data !== null){
          
          setCredit(data);
 
        }
        else{
          fdrt2.classList.remove('finalData2')
          fdrt2.classList.add('finalData3');
          fdrt.classList.add('finalData1');
          setTimeout(() => {
            fdrt2.classList.remove('finalData3')
            fdrt2.classList.add('finalData2');
      }, 4000);
        }
      });
    }
     }
        
      ,[flag2])
    
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
    let stringData = id0.replaceAll(".","");
    stringData = stringData.replaceAll("'","");
    setid10(stringData);
    setflag2(1);
    if(flag2===1){
        let data2 = flag+1;
        // console.log(data2);
        setflag(data2);
        // console.log(flag);
        if(data2 === 1){
        //   let sum = data + parseInt(id2);
          let finalURL3 = "users/"+id10;
        //   console.log(sum)
          update(ref(db , finalURL3),{
            idnum:id1,
            name:id0,
            email:id2,
            phnum:id3
          });
          
          navigate("/363337393633373736313739323037373635363236393734363532303732363536343639373236353633373436353634323037343666323036343631373336383632366636313732363432633230363936363230373436383639373332303631363436343732363537333733323036393733323036363666373536653634323036663735373432303734363836353665323036393734373332303631323036333666366437303732366636643639373336353230336132393362");
        }
    }
    else{
      fdrt.classList.remove('finalData1')
          fdrt.classList.add('finalData');
          setTimeout(() => {
            fdrt.classList.remove('finalData')
            fdrt.classList.add('finalData1');
      }, 4000);
    }
    
  }



    return (
        <div className="dummyMainDiv">
      <div className="opacdiv1"></div>
      <div className="opacdiv2"></div>
      <div className="finalData1" id="finaldatadisplay"> Fetching data from Database 
      <div className="underlinediv"></div></div>
      <div className="finalData2" id="finaldatadisplay2"> Error No Username found
      <div className="underlinediv"></div></div>
      <div className="dummyAppBody">
        <div className="AppBody">
          <div className="AppbodyMain">
            <div className="App">
              <h1>Update Account</h1>
              <h2>Enter student name: </h2>
              <input type="text" placeholder="Enter student name (as mentioned in google account)" value={id0} onChange={handleToDoChange0}></input>
              <h2>Enter student ID number: </h2>
              <input type="text" placeholder="Enter student ID number" value={id1} onChange={handleToDoChange1}></input>
              <h2>Enter student email: </h2>
              <input type="email" placeholder="Enter student email ID" value={id2} onChange={handleToDoChange2}></input>
              <h2>Enter student phone number:</h2>
              <input type="text" placeholder="Enter student phone number" value={id3} onChange={handleToDoChange3}></input>
              <p><i>Double press  after the data is fetched from database completely</i></p>
              
              <div className="button" onClick={redirectedPage}>Submit</div>
            </div>
          </div>
        </div>
      </div>
      
    </div>
  );
    
}
 
export default UpdateValue;