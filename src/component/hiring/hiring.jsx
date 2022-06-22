import React, { useState } from "react";
import { NavLink } from "react-router-dom";
import { jobs, jobPositions } from "../../component/utils/jobs";
import locationIcon from "../../assets/Location_icon.png";
import "./hiring.css";

const Hiring = () => {
  const [currentPosition, setCurrentPosition] = useState("all_positions");
  const [filteredJobs, setFilteredJobs] = useState(jobs);

  const filterJobs = (label) => {
    setCurrentPosition(label);
    const newJobs = jobs.filter((job) => job.label === label);
    setFilteredJobs(newJobs);
  };

  return (
    <>
      <div className="hiring__main-container">
        <div className="hiring__menu">
          {jobPositions.map((jobPosition) => {
            const { id, label, name } = jobPosition;
            return (
              <button
                key={id}
                className={`hiring-btn ${
                  currentPosition === label ? "hiring__menu--active" : ""
                }`}
                onClick={() => {
                  if (label === "all_positions") {
                    setCurrentPosition(label);
                    setFilteredJobs(jobs);
                  } else {
                    filterJobs(label);
                  }
                }}
              >
                {name}
              </button>
            );
          })}
          {/*---------Dropdown for responsive-----------*/}
          <div className="dropdown">
            <select
              className="dropdown__select"
              id="dropdown__select"
              onChange={(event) => {
                if (event.target.value === "all_positions") {
                  setCurrentPosition(event.target.value);
                  setFilteredJobs(jobs);
                } else {
                  filterJobs(event.target.value);
                }
              }}
            >
              {jobPositions.map((jobPosition) => {
                const { id, label, name } = jobPosition;

                return (
                  <option
                    value={label}
                    key={id}
                    className={`hiring-dropdown ${
                      currentPosition === label
                        ? "hiring__dropdown--active"
                        : ""
                    }`}
                  >
                    {name}
                  </option>
                );
              })}
            </select>
          </div>
        </div>
        {/* *****************************************  JOB RESULTS ********************/}
        <div className="hiring__container-grid">
          <div className="hiring__grid">
            {filteredJobs.map((job) => {
              const { id, position, location } = job;

              if (filteredJobs.length <= 0) {
                return (
                  <div key={id} className="hiring__grid-item">
                    <h2>No jobs available</h2>
                  </div>
                );
              } else {
                return (
                  <NavLink
                    className="hiring-card-link"
                    to={"/hiring/" + position.replaceAll(" ", "_")}
                  >
                    <div className="hiring__card">
                      <h3 className="hiring__position">{position}</h3>
                      <div className="hiring__container">
                        <img
                          src={locationIcon}
                          alt="Location Icon"
                          className="hiring__icon"
                        />
                        <p className="hiring__localition">{location}</p>
                      </div>
                    </div>
                  </NavLink>
                );
              }
            })}
          </div>
        </div>
      </div>
    </>
  );
};

export default Hiring;
