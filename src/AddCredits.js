import { set, ref, onValue, update, get } from "firebase/database";
import { db } from "./firebase";
import { useState, useEffect } from "react";
import { useNavigate } from "react-router-dom";

const AddCredits = () => {
  // console.log(locData.locData);
  let [id0, setid0] = useState("");
  let [id1, setid1] = useState("");
  let [id2, setid2] = useState("");
  let [credit, setCredit] = useState();
  let fdrt = document.getElementById("finaldatadisplay");
  let fdrt2 = document.getElementById("finaldatadisplay2");
  // let {string,setstring} = useState("");
  let navigate = useNavigate();

  function AddCreditsToUser(data) {
    let fData = data + parseInt(id2);
    let finalURL3 = "users/" + id0;
    // console.log(sum)
    update(ref(db, finalURL3), {
      credit: fData
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

  function fetchUser() {
    let stringData = id0.replaceAll(".","");
    id0 = stringData.replaceAll("'","");
    let finalURL2 = "users/" + id0 + "/credit";
    // console.log({finalURL2});
    get(ref(db, finalURL2)).then(snapshot => {
      const data = snapshot.val()
      if (data !== null) {
        // setCredit(data);
        AddCreditsToUser(data);
      }
      else {
        fdrt2.classList.remove('finalData2')
        fdrt2.classList.add('finalData3');
        fdrt.classList.add('finalData1');
        setTimeout(() => {
          fdrt2.classList.remove('finalData3')
          fdrt2.classList.add('finalData2');
        }, 4000);
      }
    }).catch(error => console.error(error));
  }

  const handleToDoChange0 = (e) => {
    setid0(e.target.value);
  }
  const handleToDoChange1 = (e) => {
    setid1(e.target.value);
  }
  const handleToDoChange2 = (e) => {
    setid2(e.target.value);
  }

  function handleSubmit() {
    fetchUser();
  }


  return (
    <div className="dummyMainDiv">
      <div className="opacdiv1"></div>
      <div className="opacdiv2"></div>
      <div className="finalData1" id="finaldatadisplay"> {id2} Credits added to {id0}
        <div className="underlinediv"></div></div>
      <div className="finalData2" id="finaldatadisplay2"> Error No Username found
        <div className="underlinediv"></div></div>
      <div className="dummyAppBody">
        <div className="AppBody">
          <div className="AppbodyMain">
            <div className="App">
              <h1>Update Credits</h1>
              <h2>Enter student name: </h2>
              <input type="text" placeholder="Enter student name (as mentioned in google account)" value={id0} onChange={handleToDoChange0}></input>
              <h2>Enter student ID number: </h2>
              <input type="text" placeholder="Enter student ID number" value={id1} onChange={handleToDoChange1}></input>
              <h2>Enter added credits </h2>
              <input type="text" placeholder="Enter added credits" value={id2} onChange={handleToDoChange2}></input>


              <div className="button" onClick={handleSubmit}>Submit</div>
            </div>
          </div>
        </div>
      </div>

    </div>
  );

}

export default AddCredits;