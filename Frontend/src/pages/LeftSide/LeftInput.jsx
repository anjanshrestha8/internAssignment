/* eslint-disable react/prop-types */
import Input from "../../components/Input/Input";
function LeftInput({ value, onChange, onSubmit}) {
  return (
    <>
      <Input
      title="Left Side: -"
        value={value}
        onChange={onChange}
        onSubmit={onSubmit}
        
      />
    </>
  );
}

export default LeftInput;
