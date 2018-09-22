import React, { Component } from "react";
import Terrestre from "./Terrestre";
import Especie from "./Especie";
import Contato from "./Contato";
import NotFound from "./NotFound";
import { Link, Route, Switch } from "react-router-dom";
import "./normalize.css";
import "./App.css";

class App extends Component {
  render() {
    return (
      <div>
        <Switch>
        <Route exact path="/" render={() => (
            <nav>
              <h1 class="artistName">EMERSON DA SILVA</h1>
              <ul>
                <li>
                  <Link to="/terrestre">Terrestre</Link>
                </li>
                <li>
                  <Link to="/especies">Novas Espécies</Link>
                </li>
              </ul>
              <Link to="/contato">contato</Link>
            </nav>
          )}
        />
        <Route path="/terrestre" component={Terrestre} />
        <Route path="/especies" component={Especie} />
        <Route path="/contato" component={Contato} />
        <Route path="*" component={NotFound} />
        </Switch>
      </div>
    );
  }
}

export default App;
