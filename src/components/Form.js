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
      <form className="Form" onSubmit={submitHandler}>
        <input
          className="Input"
          type="text"
          value={item}
          onChange={itemChangedHandler}
        />
        <button className="Button" type="submit">
          Add
        </button>
      </form>
    </div>
  );
};
export default Form;
