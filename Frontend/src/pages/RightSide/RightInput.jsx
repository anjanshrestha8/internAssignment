/* eslint-disable react/prop-types */
import Input from "../../components/Input/Input";
function RightInput({ value, onChange, onSubmit }) {
  return (
    <>
      <Input value={value} onChange={onChange} onSubmit={onSubmit} />
    </>
  );
}

export default RightInput;
