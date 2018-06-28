import React, { Component } from 'react';
import { Link } from 'react-router-dom';

const Contato= () => {

  return <div>
  <address>
    contato@emersondasilva.com
  </address>
  <footer>
    <span>
      <Link to="/">Voltar</Link>
    </span>
  </footer>
</div>

}

export default Contato;
