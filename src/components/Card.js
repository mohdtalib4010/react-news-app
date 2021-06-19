import React from "react";
import 'bootstrap/dist/css/bootstrap.min.css';

function Card(props) {
  return (
      <div className="card shadow-sm">
          <img className="card-img-top" src={props.imgurl} alt="Card image cap" />
          <div className="card-body">
            <h5 className="card-title">{props.title}</h5>
            <p className="card-text">{props.description}</p>
          </div>
      </div> 
  );
}

export default Card;
