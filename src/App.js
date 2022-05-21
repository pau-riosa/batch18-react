import "./App.css";
import { useState } from "react";
import Form from "./components/Form.js";
import List from "./components/List.js";

function App() {
  const [items, setItems] = useState([]);

  // add item
  const addItem = (item) => {
    setItems((prevData) => {
      return [item, ...prevData];
    });
  };

  // delete item
  const deleteItem = (item) => {
    setItems((prevData) => prevData.filter((i, index) => index !== item));
  };

  const updateItem = (updateItem, position) => {
    setItems((prevData) => {
      return prevData.map((item, index) => {
        if (index === position) {
          item = updateItem;
        }

        return item;
      });
    });
  };

  return (
    <div className="App">
      <h1>Add a Todo</h1>
      <div>
        <Form add={addItem} />
      </div>
      <div>
        <List items={items} delete={deleteItem} update={updateItem} />
      </div>
    </div>
  );
}

export default App;
