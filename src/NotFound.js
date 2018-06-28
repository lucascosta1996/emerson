import React, { Component } from "react";
import { Link } from "react-router-dom";

class NotFound extends Component {

  render() {
    return (
      <nav>
        <h1 class="artistName">EMERSON DA SILVA</h1>
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
    );
  }
}

export default NotFound;
