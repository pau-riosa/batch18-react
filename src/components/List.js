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
        <form onSubmit={(event) => submitUpdate(event, updateItem, index)}>
          <input
            type="text"
            value={updateItem}
            onChange={updateChangeHandler}
          />
          <button type="submit">Update</button>
          <button onClick={() => setIsUpdating(false)}>Cancel</button>
        </form>
      ) : (
        <>
          <p>{item}</p>
          <button onClick={() => remove(index)}>Delete</button>
          <button onClick={() => update(index)}>Update</button>
        </>
      )}
    </div>
  );
};

const List = (props) => {
  return props.items.map((item, index) => (
    <div key={index}>
      <Item
        item={item}
        index={index}
        update={props.update}
        delete={props.delete}
      />
    </div>
  ));
};

export default List;
