import React from "react";
import AppNavbar from "./components/layout/AppNavbar";
import "bootstrap/dist/css/bootstrap.min.css";
import "font-awesome/css/font-awesome.min.css";
import Users from "./components/users/Users";

import { Provider } from "./context";
import Months from "./components/users/Months";

function App() {
  return (
    <Provider>
      <div className="App">
        <AppNavbar />

        <div className="container">
          <Months />
          <Users />
        </div>
      </div>
    </Provider>
  );
}

export default App;
