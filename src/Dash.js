// import { useLocation } from "react-router-dom";
import { useNavigate } from "react-router-dom";

function Dash() {
    // const {state} = useLocation();
    // let locationVal = state.loc;
    let navigate = useNavigate();
    // let link1=document.getElementById("link1");
    let redirectedPage = ()=>{
        navigate("/36333732363536313734363534313465363537373431363336333666373536653734");
    }
    let redirectedPage2 = ()=>{
        navigate("/373537303634363137343635343436313734363134353665373437323739");
    }
    let redirectedPage3 = ()=>{
        navigate("/37353730363436313734363534333732363536343639373437333439366536363666");
    }
    return(
        <>
            <div className="dummyMainDiv">
            <div className="opacdiv1"></div>
            <div className="opacdiv2"></div>
            
            <div className="dummyAppBody">
            <div className="AppBody">
                <div className="AppbodyMain">
                <div className="App">
                <div className="link link1" onClick={redirectedPage}>
                    <h1>Create a new account</h1>
                </div>
                <div className="link link2" onClick={redirectedPage2}>
                    <h1>Update an account</h1>
                </div>
                <div className="link link3" onClick={redirectedPage3}>
                    <h1>Add Credits</h1>
                </div>
                </div>
                </div>
            </div>
            </div>
            
        </div>
       </>
     );
}
export default Dash;
