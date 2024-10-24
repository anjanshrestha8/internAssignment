/* eslint-disable react/prop-types */

import '../../assets/css/components/input.css'
function Input({ value, onChange, onSubmit,title}) {
  return (
    <>
      <div className="input-container">
        <h3 className='input-container-h3'>{title}</h3>
        <br />
        <input
          type="number"
          value={value}
          onChange={onChange}
          className='input-container-input'
          
        />
        <br />
        <br />
        <button className='input-container-button' onClick={onSubmit}> Submit</button>
      </div>
    </>
  );
}

export default Input;
