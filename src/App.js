import React from "react";
import AppNavbar from "./components/layout/AppNavbar";
import "bootstrap/dist/css/bootstrap.min.css";
import "font-awesome/css/font-awesome.min.css";
import Users from "./components/users/Users";

import { Provider } from "./context";

function App() {
  return (
    <Provider>
      <div className="App">
        <AppNavbar />
        <div className="container">
          <Users />
        </div>
      </div>
    </Provider>
  );
}

export default App;
