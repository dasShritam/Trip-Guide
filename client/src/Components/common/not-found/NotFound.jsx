import React from "react";
import notFouundImg from "../../../Asset/images/404-page.png";
import "./NotFound.scss";
import { Link } from "react-router-dom";

function NotFound() {
  return (
    <div id="not-found-page">
      <h1>It seems like you have lost. </h1>
      <Link to="/"  >
        <button> Go Back</button>
      </Link>
    </div>
  );
}

export default NotFound;
