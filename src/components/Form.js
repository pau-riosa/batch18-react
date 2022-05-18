import { useState } from "react";
export default function Form(props) {
  const [name, setEnteredName] = useState("");
  const [mobile, setEnteredMobile] = useState("");

  const nameChangedHandler = (event) => {
    setEnteredName(event.target.value);
  };

  const mobileChangedHandler = (event) => {
    setEnteredMobile(event.target.value);
  };

  const submitHandler = (event) => {
    event.preventDefault();

    let data = {
      name: name,
      mobile: mobile,
    };

    props.addData(data);
  };

  return (
    <div>
      <form onSubmit={submitHandler}>
        <input type="text" value={name} onChange={nameChangedHandler} />
        <input type="number" value={mobile} onChange={mobileChangedHandler} />
        <button type="submit">Submit</button>
      </form>
    </div>
  );
}
