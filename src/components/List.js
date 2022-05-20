const List = (props) => {
  const remove = (index) => props.delete(index);

  return props.items.map((item, index) => (
    <div
      key={index}
      style={{
        display: "flex",
        justifyContent: "center",
        alignContent: "center",
      }}
    >
      <h1>{item}</h1>
      <button onClick={() => remove(index)}>Delete</button>
    </div>
  ));
};

export default List;
