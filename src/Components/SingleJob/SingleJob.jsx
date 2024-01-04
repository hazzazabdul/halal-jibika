/* eslint-disable react/prop-types */
import Style from "./Single.module.css";
import { PiBriefcaseDuotone } from "react-icons/pi";
import { HiBuildingOffice2 } from "react-icons/hi2";
import { FaLocationCrosshairs } from "react-icons/fa6";
import { NavLink } from "react-router-dom";

const SingleJob = ({ jobData }) => {

  const {
    title,
    logo,
    companyName,
    position,
    description,
    salary,
    location,
  } = jobData;




  return (
    <div className={Style.single__job__card}>
      <div className={Style.company__logo}>
        <img
          src={logo}
          alt=""
        />
      </div>

      <div className={Style.job__deyails}>
        <h3>{title}</h3>

        <div className={Style.requirement}>
          <p>{description}</p>
          <span>
            <HiBuildingOffice2 />
            {companyName}
          </span>
          <span>
            <PiBriefcaseDuotone />
            {salary}
          </span>
          <span>
            <FaLocationCrosshairs />
            {location}
          </span>
        </div>
        
        <span>
          <a>{position}</a>
        </span>
      </div>

      <div className={Style.browse__job}>
        <NavLink to="/signin">
          <button>Job Details</button>
        </NavLink>
      </div>
    </div>
  );
};

export default SingleJob;
