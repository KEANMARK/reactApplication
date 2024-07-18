// App.jsx
import React from "react";
import Students from "./Students";
import "./App.css";
const App = () => {
  return (
    <div className="App">
      <header className="App-header">
        <Students />
      </header>
      <div>
        <h1>first react app installation</h1>
        <h2>what is react</h2>
        <p>
          It allows you to create complex user interfaces using “components,” or
          small, self-contained pieces of code. It controls the view layer in
          web applications. Despite the fact that React is more of a library
          than a language, it is frequently used in web development.
        </p>
        <p>1.kean mark geraldez 2. joshua jumamoy</p>

        <p>
          Note: Make sure to change the web app name that appears in browser tab
        </p>
      </div>
      ;
    </div>
  );
};

<div className="App">
  <h1>first react app installation</h1>
  <h2>what is react</h2>
  <p>
    It allows you to create complex user interfaces using “components,” or
    small, self-contained pieces of code. It controls the view layer in web
    applications. Despite the fact that React is more of a library than a
    language, it is frequently used in web development.
  </p>
  <p>1.kean mark geraldez 2. joshua jumamoy</p>

  <p>Note: Make sure to change the web app name that appears in browser tab</p>
</div>;

export default App;
