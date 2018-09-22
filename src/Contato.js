import React, { Component } from 'react';
import { Link } from 'react-router-dom';

const Contato= () => {

  return <div>
  <address>
    <a href="mailto:contato@emersondasilva.com">contato@emersondasilva.com</a>
  </address>
  <footer>
    <span>
      <Link to="/">voltar</Link>
    </span>
  </footer>
</div>

}

export default Contato;
