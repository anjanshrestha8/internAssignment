import { useState } from "react";
import LeftInput from "./pages/LeftSide/LeftInput";
import RightInput from "./pages/RightSide/RightInput";
import { submitRequest } from "./api/api";

import "./assets/css/app.css"

function App() {
    //state declearation
  const [leftValue, setLeftValue] = useState("");
  const [rightValue, setRightValue] = useState("");
    //

  // check weather the request is empty or not 

//   const handleCheckValue = (checkValue)=>{
//     if(checkValue === ""){
//         console.log("request is invalid")
//         return false;
//     }
//     else{
//         console.log("request is valid")
//     }
//   }

  // api call function for left input field
    const handleLeftSubmit = async ()=>{

        // handleCheckValue(leftValue)
        const rightValue = await submitRequest(leftValue,'left');
        // console.log(rightValue)
        // console.log(rightValue.data.newValue)
        setRightValue(rightValue.data.newValue)

    }
    // api call function for right input field
    const handleRightSubmit =  async ()=>{

        // handleCheckValue(rightValue)
        const leftValue = await submitRequest(rightValue,'right');
        // console.log(leftValue.data.newValue)
        setLeftValue(leftValue.data.newValue)
    }

  
  return (
    <>
    <div className="main-wrapper">
            <div className="component-wrapper">
            <LeftInput
                value={leftValue}
                onChange={(e) => setLeftValue(e.target.value)}
                onSubmit={handleLeftSubmit}
            />
            <RightInput
                value={rightValue}
                onChange={(e) => setRightValue(e.target.value)}
                onSubmit={handleRightSubmit}
            />
            </div>
        </div>
    </>
  );
}

export default App;
