import React from "react";
import "./images/RawiriFletcher.png";
import "./ProfilePhoto.css";
import Photo from "./images/RawiriFletcher.png";

export default function ProfilePhoto() {
  return (
    <div className="PrPhProfile">
      <div className="PrPhInnerPhoto">
        <img className="PrPhProfilePhoto" src={Photo} alt="RawiriFletcher" />
        <br></br>
        <button className="btn btn-PrPhProfile1">edit profile</button>
        <br></br>
        <button className="btn btn-PrPhProfile2">change photo</button>
      </div>
    </div>
  );
}
