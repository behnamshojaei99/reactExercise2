import React from "react";
import ReactDOM from "react-dom";
import "./styles.css";
import ScotchInfoBar from "./ScotchInfoBar";

/**
 * Our data comes from users-data.js
 * -----------------------------
 */
import users from "./users-data";

/**
 * Our React component where we display data
 * -----------------------------
 */
function Users(props) {
  const myUser = props.users.map((user) => {
    return (
      <div>
        <h3>{user.name}</h3>
        <p>{user.location}</p>
        <p>{user.car}</p>
      </div>
    );
  });
  return myUser;
}

function App() {
  return (
    <div className="App">
      <div className="page-deets">
        <h2>Loop Over an Array of Data</h2>
      </div>

      {/* Iterate over imported array in userData */}
      <div className="users">
        <Users users={users} />

        {/* Display each data in array in a card */}
        {/* Each card must have a 'key' attribute */}
      </div>
      <ScotchInfoBar />
    </div>
  );
}

const rootElement = document.getElementById("root");
ReactDOM.render(<App />, rootElement);
