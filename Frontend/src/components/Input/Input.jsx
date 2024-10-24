/* eslint-disable react/prop-types */

import '../../assets/css/components/input.css'
function Input({ value, onChange, onSubmit}) {
  return (
    <>
      <div className="input-container">
        <input
          type="number"
          value={value}
          onChange={onChange}
          className='input-container-input'
          
        />
        <br />
        <br />
        <button className='input-container-input' onClick={onSubmit}> Submit</button>
      </div>
    </>
  );
}

export default Input;
