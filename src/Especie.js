import React, {Component} from 'react';
import { Link } from 'react-router-dom';

class Especie extends Component {
  render(){
    let especiegallery = [
        "E1", "E2", "E3", "E4", "E5", "E6", "E7", "E8", "E9", "E10", "E11", "E12", "E13", "E14"
    ]
    return(
      <div>
      <section class="galleries">
        <div id="terrestreTitle">
        <h2>ESPÉCIES</h2>
      </div>
        {especiegallery.map((url, index) => {
          return <img src={require(`./especie/${url}.jpg`)} key={index}/>
        })}
      </section>
      <div class="expoDescription">
        <a href="#" class="release">
          release
        </a>
      </div>
      <div class="backButton">
        <span>
            <Link to="/">voltar</Link>
        </span>
      </div>
    </div>
    )
  }
}

export default Especie;
