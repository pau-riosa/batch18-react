import "./App.css";
import { useState } from "react";
import Form from "./components/Form.js";
import List from "./components/List.js";

function App() {
  const [isLogin, setIsLogin] = useState(false);
  const [userName, setUsername] = useState("");
  const [password, setPassword] = useState("");
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

  const loginHandler = (event) => {
    event.preventDefault();

    const data = {
      userName: userName,
      password: password,
    };

    const api_body = JSON.stringify(data);

    const options = {
      method: "POST",
      headers: {
        "content-type": "application/json",
        "X-RapidAPI-Host": "fake-authentication1.p.rapidapi.com",
        "X-RapidAPI-Key": "<SIGN-UP-FOR-API-KEY>",
      },
      body: api_body,
    };

    fetch(
      "https://fake-authentication1.p.rapidapi.com/api/v1/authentication/login",
      options
    )
      .then((response) => response.json())
      .then((response) => {
        setIsLogin(true);
        console.log(response);
      })
      .catch((err) => {
        console.error(err);
        setIsLogin(false);
      });
  };

  return (
    <div className="App">
      {isLogin ? (
        <>
          <h1>Add a Todo</h1>
          <Form add={addItem} />
          <List items={items} delete={deleteItem} update={updateItem} />
        </>
      ) : (
        <>
          <form onSubmit={loginHandler}>
            <input
              type="text"
              value={userName}
              onChange={(event) => setUsername(event.target.value)}
            />
            <input
              type="password"
              value={password}
              onChange={(event) => setPassword(event.target.value)}
            />
            <input type="submit" value="Login" />
          </form>
        </>
      )}
    </div>
  );
}

export default App;
