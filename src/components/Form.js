import { useState } from "react";

const Form = (props) => {
  const [item, setItem] = useState("");

  const itemChangedHandler = (event) => {
    setItem(event.target.value);
  };

  const submitHandler = (event) => {
    event.preventDefault();
    props.add(item);
  };

  return (
    <div>
      <form onSubmit={submitHandler}>
        <input type="text" value={item} onChange={itemChangedHandler} />
        <button type="submit">Add</button>
      </form>
    </div>
  );
};
export default Form;
