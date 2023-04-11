import characters from "../../imgs/charactersfull.png";
import React from "react"
import {Link} from 'react-router-dom';
import './Banner.css';

function Banner() {
  return (
    <div className="justify-content-center">
      <div className="bg-image p-5" style={{ backgroundImage: `url(${characters})`, backgroundRepeat: 'no-repeat', backgroundSize: 'cover', backgroundPosition: 'center bottom', height: "100vh" }}>
        <div className="mask rounded-5 p-5 " style={{ backgroundColor: "rgba(0, 0, 0, 0.6)" }}>
          <div className=" d-flex justify-content-center text-center">
            <div className="text-white ">
              <div className="mb-3">Thousands of users are already reliving their childhood.</div>
              <div className="fs-1">What are you waiting for?</div>
            </div>
          </div>
        </div>

        <div className="row text-center justify-content-center">
        <div className="col-md-6 d-grid">
        <div className="my-4">
        <Link to="/games">
          <button type="submit" className="btn-lg m-2 ripple btn btn-success text-white fw-semibold">See Our Games →</button>
        </Link>
          <a href="https://www.discord.gg/jyjHvWB34T" target="_blank" className="btn-lg m-2 ripple btn btn-primary fw-semibold">Join Our Discord →</a>
        </div>
        </div>
        </div>
      </div>
    </div>
  );
};

export default Banner;
