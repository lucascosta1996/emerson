import React, { Component } from "react";
import Terrestre from "./Terrestre";
import Especie from "./Especie";
import Contato from "./Contato";
import { Link } from "react-router-dom";
import { Route } from "react-router-dom";
import "./normalize.css";
import "./App.css";

class App extends Component {
  render() {
    return (
      <div>
        <Route
          exact
          path="/"
          render={() => (
            <nav>
              <h1>EMERSON DA SILVA</h1>
              <ul>
                <li>
                  <Link to="/terrestre">Terrestre</Link>
                </li>
                <li>
                  <Link to="/especies">Espécies</Link>
                </li>
              </ul>
              <Link to="/contato">contato</Link>
            </nav>
          )}
        />
        <Route path="/terrestre" render={({ history }) => <Terrestre />} />
        <Route path="/especies" render={({ history }) => <Especie />} />
        <Route path="/contato" render={({ history }) => <Contato />} />
      </div>
    );
  }
}

export default App;
