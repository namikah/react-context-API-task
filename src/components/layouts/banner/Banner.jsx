import React from "react";
import { Link } from "react-router-dom";
import "./banner.css"

function Banner({title}) {
  return (
    <div className="banner col-md-12 mb-5">
      <div className="panel panel-default  d-flex flex-column align-items-center justify-content-center">
        <div className="panel-heading">
          <h3 className="panel-title">{title}</h3>
        </div>
        <Link className="panel-body" to={"/"}>/home</Link>
      </div>
    </div>
  );
}

export default Banner;
