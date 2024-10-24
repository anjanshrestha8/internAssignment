import { useState } from "react";
import LeftInput from "./pages/LeftSide/LeftInput";
import RightInput from "./pages/RightSide/RightInput";
import { submitRequest } from "./api/api";
// import {ToastContainer,toast,Flip} from "react-toastify";
import "./assets/css/app.css";

function App() {
  //state declearation

  const [leftValue, setLeftValue] = useState("");
  const [rightValue, setRightValue] = useState("");

  // check weather the request is empty or not
  const handleCheckValue = (checkValue) => /^-?\d+$/.test(checkValue);

  // api call function for left input field
  const handleLeftSubmit = async () => {
    const result = handleCheckValue(leftValue)
    if (result) {
      const rightValue = await submitRequest(leftValue, "left");
      // console.log(rightValue)
      // console.log(rightValue.data.newValue)
      setRightValue(parseFloat(rightValue.data.newValue));
    } else console.log(result)
    
    
  };

  // api call function for right input field
  const handleRightSubmit = async () => {
    const result = handleCheckValue(rightValue)
    if (result) {
      const leftValue = await submitRequest(rightValue, "right");
      // console.log(rightValue)
      // console.log(rightValue.data.newValue)
      setLeftValue(parseFloat(leftValue.data.newValue));
    } else console.log(result)
    
    
  };

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
