import React, {Component} from 'react';
import { Link } from 'react-router-dom';

class FragmentoVital extends Component {
  render(){
    let fragmentogallery = [
        "https://www.seoclerk.com/pics/558390-11FO8A1505384509.png",
        "http://brandmark.io/logo-rank/random/pepsi.png",
        "https://image.freepik.com/icones-gratis/xbox-logotipo_318-9975.jpg",
        "https://www.brachaprinting.com/wp-content/uploads/2013/10/Apple-logo1.jpg"
    ]
    return(
      <div>
        <Link to="/">Close</Link>
        {fragmentogallery.map((url) => {
          return (
          <img src={url}></img>
          )
        })}
      </div>
    )
  }
}

export default FragmentoVital;
