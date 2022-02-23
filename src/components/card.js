import * as React from "react";
import { Link } from "gatsby";
import { container, logo, titleClass } from "./card.module.css";

const Card = ({ cardImage, link, children }) => {
  return (
    <Link className={container} to={link}>
      <div className={logo}>{cardImage}</div>
    </Link>
  );
};

export default Card;
