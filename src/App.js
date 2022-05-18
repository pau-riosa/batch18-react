import { useState } from "react";
import Welcome from "./components/Welcome.js";
import Form from "./components/Form.js";
import logo from "./logo.svg";
import "./App.css";

const USER_DATA = [
  {
    name: "Maria",
    mobile: "1234",
  },
];

// display list of users
function DisplayUsers(props) {
  return props.users.map((item, index) => <Welcome data={item} key={index} />);
}

function App() {
  const [data, setData] = useState(USER_DATA);

  // update data
  const addData = (props) => {
    setData((prevData) => {
      return [props, ...prevData];
    });
  };

  return (
    <div className="App">
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        <Form addData={addData} />
        <DisplayUsers users={data} />
        <a
          className="App-link"
          href="https://reactjs.org"
          target="_blank"
          rel="noopener noreferrer"
        >
          Learn React
        </a>
      </header>
    </div>
  );
}

export default App;
