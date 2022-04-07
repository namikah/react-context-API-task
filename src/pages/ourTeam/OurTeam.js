import React, { useCallback, useEffect, useState } from "react";
import { userService } from "../../API/services/userService";
import "./ourTeam.css";
import { FaFacebook,FaInstagram,FaTwitter,FaLinkedin } from 'react-icons/fa';

function OurTeam() {
  const [state, setState] = useState();

  const getUsers = useCallback(() => {
    userService.getUsers().then(({ data }) => {
      setState(data.slice(0, 4));
    });
  }, []);

  useEffect(() => {
    getUsers();
  }, [getUsers]);

  console.log(state);
  return (
    <div id="our-team">
      <div className="container">
        <div className="row">
          <div className="team-card col-md-12">
            <div className="our-team-title d-flex flex-column justify-content-md-center align-items-md-center">
              <h2>Our Team</h2>
              <p>
                Donec vulputate urna sed rutrum venenatis. Cras consequat magna
                quis arcu elementum, quis congue risus volutpat.
              </p>
            </div>
          </div>
          {state?.map(({ id, name, job, about, image }) => (
            <div key={id} className="team-card col-md-3" data-aos="fade-up">
              <div className="item-card">
                <div className="context">
                  <h5>{name}</h5>
                  <h6>{job}</h6> 
                  <FaFacebook className="social-icon"></FaFacebook>
                  <FaInstagram className="social-icon"></FaInstagram>
                  <FaTwitter className="social-icon"></FaTwitter>
                  <FaLinkedin className="social-icon"></FaLinkedin>
                  <p>{about}</p>
                </div>
                <div className="image">
                  <img src={image} alt="our-staff" />
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}

export default OurTeam;
