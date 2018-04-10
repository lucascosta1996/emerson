import React, {Component} from 'react';
import { Link } from 'react-router-dom';

class FragmentoVital extends Component {
  render(){
    let fragmentogallery = [
        "1",
        "2",
        "3",
        "4"
    ]
    return(
      <div>
        <Link to="/">Close</Link>
        {fragmentogallery.map((url) => {
          return (
          <p>{url}</p>  
          )
        })}
      </div>
    )
  }
}

export default FragmentoVital;
