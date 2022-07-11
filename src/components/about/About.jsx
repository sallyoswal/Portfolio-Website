import React from 'react';
import "./About.css";
import coffee from "../../img/Coffee.jpg";
import award from "../../img/Award.JPG"

const About = () => {
  return (
    <div className="a">
        <div className="a-left">
            <div className="a-card bg"></div>
            <div className="a-card">
                <img src={coffee} alt="" className="a-img" />
            </div>
        </div>
        <div className="a-right">
            <h1 className="a-title">About Me</h1>
            <p className="a-sub">
                I have always had affinity towards Technology and having completed my bachelor's in Computer Science and Engineering the fascination for programming has escalated to its apex.
            </p>
            <p className="a-desc">
                I took part in numerous Hackathons while pursuing BTech like Icertis ML Hackathon, Smart India Hackathon 2020, etc.
            </p>
            <div className="a-award">
                <img src={award} alt="" className="a-award-img" />
                <div className="a-award-texts">
                    <h4 className="a-award-title">Smart India Hackathon Winner 2020</h4>
                    <p className="a-award-desc">
                    Once farmer has yielded his field there is a huge amount of stubble left. This stubble is used by various industries as a raw resource. We created a application which helped manage the stubble between Amazon, a delivery vendor, Industries who need this stubble for processing and farmers who have this stubble as residue.
                    </p>
                </div>
            </div>
        </div>
    </div>
  )
}

export default About;