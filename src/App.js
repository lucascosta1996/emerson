import React, { Component } from "react";
import FragmentoVital from "./FragmentoVital";
import { Link } from "react-router-dom";
import { Route } from "react-router-dom";

class App extends Component {
  render() {
    return (
      <div className="App">
        <Route
          exact
          path="/"
          render={() => (
            <div>
              <h1>EMERSON DA SILVA</h1>
              <nav>
                <ul>
                  <li>
                    <Link to="/fragmentovital">Fragmento Vital</Link>
                  </li>
                  <li>Adaptação reversa</li>
                  <li>Espécie</li>
                </ul>
              </nav>
            </div>
          )}
        />
        <Route
          path="/fragmentovital"
          render={({ history }) => <FragmentoVital />}
        />
      </div>
    );
  }
}

export default App;
