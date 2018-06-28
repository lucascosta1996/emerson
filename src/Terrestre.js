import React, {Component} from 'react';
import { Link } from 'react-router-dom';
import PropTypes from 'prop-types';

class Terrestre extends Component {
  render(){
    let terrestregallery = [
        "T1", "T2", "T3", "T4", "T5", "T6", "T7", "T8", "T9", "T10", "T11", "T12", "T13", "T14", "T15", "T16", "T17", "T18"
    ]
    return (
          <div>
            <section class="galleries">
              <div id="terrestreTitle">
                <h2>TERRESTRE</h2>
              </div>
              {terrestregallery.map((url, index) => {
                return <img src={require(`./terrestre/${url}.jpg`)} key={index} />;
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
        );
      }
    }

export default Terrestre;
