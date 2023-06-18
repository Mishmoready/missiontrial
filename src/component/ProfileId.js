import React from "react";
import "./ProfileId.css";

function ProfileId() {
  return (
    <div className="stPrViProfile">
      <div className="stPrViInfo">
        <div className="stPrViTitleName">
          <h1>Rawiri Fletcher</h1>
        </div>
        <div className="stPrViStudentProfileInfo">
          <div className="stPrViStudentProfile">
            <p className="stPrViStudentInfoLeft">School</p>
            <p className="stPrViStudentInfoLeft">Teacher</p>
            <p className="stPrViStudentInfoLeft">Course</p>
            <p className="stPrViStudentInfoLeft">Date of Birth</p>
            <p className="stPrViStudentInfoLeft">Contact No</p>
            <p className="stPrViStudentInfoLeft">Email Address</p>
          </div>
          <div className="stPrViStudentInfoRight">
            <p className="stPrViStudentInfoRight">Homai School</p>
            <p className="stPrViStudentInfoRight">Jasmina Salvador</p>
            <p className="stPrViStudentInfoRight">Beginner</p>
            <p className="stPrViStudentInfoRight">25 June 2010</p>
            <p className="stPrViStudentInfoRight">022 524 63 99</p>
            <p className="stPrViStudentInfoRight">fletchy.r@gmail.com</p>
          </div>
        </div>
      </div>
    </div>
  );
}

export default ProfileId;
