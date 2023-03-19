import React from "react";
import "./Header.scss";
import mainImage from "../../../../assets/images/header-main-image.png";
import logo from "../../../../assets/images/netflix.png";
import play from "../../../../assets/images/play.png";
import infoCircle from "../../../../assets/images/info-circle.png";

const Header = () => {
  return (
    <div className="header-container">
      <div className="header-container__blured" />
      <div className="header-container__upper-section">
        <img src={logo}></img>
      </div>
      <div className="header-container__main-section">
        <div className="header-container__main-section-title">
          <div className="header-container__main-section-element">
            <span className="header-container__main-section-first">Top</span>
            <span className="header-container__main-section-second">10</span>
          </div>
          <div className="header-container__main-section-title-text">
            Nr 5 wśród seriali dzisiaj
          </div>
        </div>
        <div className="header-container__main-section-image">
          <img src={mainImage} />
        </div>
        <div className="header-container__main-section-text">
          <p>
            Makabrycznie bystra i sarkastyczna Wednesday Addams prowadzi
            śledztwo w sprawie serii zabójstw, przysparzając sobie nowych
            przyjaciół i wrogów w Akademii Nevermore.
          </p>
        </div>
        <div className="header-container__main-section-buttons">
          <a href="#">
            <button className="header-container__first-button">
              <div className="header-container__button-elements">
                <img src={play} />

                <div>Odtwórz</div>
              </div>
            </button>
          </a>
          <a href="#">
            <button className="header-container__second-button">
              <div className="header-container__button-elements">
                <img src={infoCircle} />
                <div>Wiecej informacji</div>
              </div>
            </button>
          </a>
        </div>
      </div>
      <div className="header-container__blured2" />
    </div>
  );
};

export default Header;
