import React from "react";
import NavBar from "../NavBar/NavBar";
import CurrJobdetails from "./CurrJobdetails";
import { Link } from "react-router-dom";
import classes from "./progress.module.css";

const Progress = () => {
  const currJobs = [
    {
      compname: "Amazon",
      duration: "3 Months",
      salary: "100000",
      position: "Software Developer",
      location: "Mumbai",
    },
    {
      compname: "Amazon",
      duration: "3 Months",
      salary: "100000",
      position: "Software Developer",
      location: "Mumbai",
    },
    {
      compname: "Amazon",
      duration: "3 Months",
      salary: "100000",
      position: "Software Developer",
      location: "Mumbai",
    },
  ];

  let satisfaction = 75;
  let dashoffset = 440 - (440 * satisfaction) / 100;
  let mystyle = {
    strokeDashoffset: dashoffset,
  };
  return (
    <>
      <NavBar />
      <div className="addjobs d-flex justify-content-center m-4">
        <Link to="/addpreviousjobs">
          <button className="btn btn-primary">Add Current Job</button>
        </Link>
      </div>
      <div className="container">
        <div className="row">
          {currJobs.map((element) => {
            return (
              <div className="col-md-4" key={element.compname}>
                <CurrJobdetails
                  compname={element.compname}
                  duration={element.duration}
                  salary={element.salary}
                  position={element.position}
                  location={element.location}
                />
              </div>
            );
          })}
        </div>
      </div>
      <div className="container my-3">
        <div className="containers">
          <div className={classes.lefttt}>Salary Graph Here</div>
          <div className={classes.rightss}>
            <div className={classes.box}>
              <div className={classes.percent}>
                <svg className={classes.progressvg}>
                  <circle
                    className={classes.progcircle}
                    style={mystyle}
                    cx="70"
                    cy="70"
                    r="70"
                  ></circle>
                  <circle
                    className={classes.progcircle}
                    style={mystyle}
                    cx="70"
                    cy="70"
                    r="70"
                  ></circle>
                </svg>
                <div className={classes.percentnumber}>
                  <h2>
                    {satisfaction}
                    <span>%</span>
                  </h2>
                </div>
              </div>
              <h2 className={classes.texttt}> Current Job Satisfaction </h2>
            </div>
          </div>
        </div>
      </div>
      <div className="container my-3">
        <div className={classes.footcontainer}>
          <h2 className="p-2">Skills You should Learn</h2>
        </div>
      </div>
    </>
  );
};

export default Progress;