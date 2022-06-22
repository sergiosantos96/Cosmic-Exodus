import React, { useState } from "react";
import Routemap from "../component/routemap/routemap";
import { useParams } from "react-router";
import { jobs } from "../component/utils/jobs";
import "../component/style/hiringdetails.css";
import "../component/hiring/hiring.css";
import HiringImage from "../assets/Banners/Hiring_banner.png";
import HiringMobileImage from "../assets/Banners/Hiringmobile_banner.png";

function HiringDetailsPage() {
  const params = useParams();
  const myJob = params.position.replaceAll("_", " ");
  const words = myJob.split(" ");

  const [jobDetail, setJobDetail] = useState({
    detail: [],
    mentions: [],
  });

  for (let i = 0; i < words.length; i++) {
    words[i] = words[i][0].toUpperCase() + words[i].substr(1);
  }

  const fullName = words.join(" ");
  const routes = [
    {
      name: "Hiring",
      href: "/hiring",
    },
    {
      name: fullName,
      href: "/hiring/" + params.position,
    },
  ];

  const getContentFromRouter = () => {
    jobs.forEach((info) => {
      if (info.position === fullName) {
        jobDetail.detail.push(info.detail);
        jobDetail.mentions.push(info.mentions);
      }
    });
  };

  getContentFromRouter();
  console.log(jobDetail.detail);

  return (
    <>
      <img src={HiringImage} alt="banner" className="hiring__banner" />
      <img
        src={HiringMobileImage}
        alt="banner"
        className="hiring__verticalbanner"
      />
      <Routemap routes={routes} />
      <h2>{routes[1].name}</h2>
      <div className="hiring__line"></div>
      <p className="hiring__details">
        {jobDetail.detail[0]?.map((info) => {
          return (
            <>
              <h3 className="hiring__subtitles" key={Math.random()}>
                {info.title}
              </h3>
              <p className="hiring__info-detail">
                {info.description}
              </p>
            </>
          );
        })}
        {jobDetail.mentions[0]?.map((info) => {
          return (
            <h3 className="hiring__subtitles" key={Math.random()}>
              {info.content}
            </h3>
          );
        })}
      </p>
      <br />
      <div style={{ width: "100%", display: "flex" }}>
        <button id="apply_button">
          <a
            className="details__btn"
            target="_blank"
            rel="noreferrer"
            href="https://docs.google.com/forms/d/e/1FAIpQLSfywelo2JgTyqeEqzZpkzwWXjX295cUVQdxbgObsKftpOItJQ/viewform"
          >
            Apply
          </a>
        </button>
      </div>
      <br />
    </>
  );
}
export default HiringDetailsPage;
