import { useState } from "react";

const Item = (props) => {
  const { item, index } = props;
  const [updateItem, setUpdateItem] = useState("");
  const [isUpdating, setIsUpdating] = useState(false);

  const remove = (index) => props.delete(index);
  const update = (index) => setIsUpdating(true);

  const updateChangeHandler = (event) => {
    setUpdateItem(event.target.value);
  };

  const submitUpdate = (event, item, index) => {
    event.preventDefault();
    props.update(item, index);
    setUpdateItem("");
    setIsUpdating(false);
  };
  return (
    <div
      style={{
        display: "flex",
        justifyContent: "center",
        alignContent: "center",
        flexDirection: "row",
      }}
    >
      {isUpdating ? (
        <form
          className="Form"
          onSubmit={(event) => submitUpdate(event, updateItem, index)}
        >
          <input
            type="text"
            value={updateItem}
            onChange={updateChangeHandler}
          />
          <button className="Button Red" type="submit">
            Update
          </button>
          <button
            className="Button Purple"
            onClick={() => setIsUpdating(false)}
          >
            Cancel
          </button>
        </form>
      ) : (
        <div className="Item">
          <p>{item}</p>
          <button className="Button Red" onClick={() => remove(index)}>
            Delete
          </button>
          <button className="Button Purple" onClick={() => update(index)}>
            Update
          </button>
        </div>
      )}
    </div>
  );
};

export default Item;
