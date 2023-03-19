import { React, useState } from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import arrowDown from "../../../../assets/images/slider/arrow-down.png";
import play from "../../../../assets/images/play.png";
import like from "../../../../assets/images/slider/like.png";
import add from "../../../../assets/images/slider/add.png";
import dislike from "../../../../assets/images/slider/dislike.png";
import heart from "../../../../assets/images/slider/heart.png";
import arrowDown2 from "../../../../assets/images/slider/arrow-down2.png";
import wrog from "../../../../assets/images/slider/wrog.png";

import {
  sliderImages,
  sliderImages2,
} from "../../../../assets/images/slider/SliderImages";

import "swiper/css";
import "./Slider.scss";

const Slider = ({ type, title }) => {
  const [slider, setSlider] = useState(null);
  const [firstActive, setFirstActive] = useState(false);
  const [hover, setHover] = useState(null);
  const [hoverButton, setHoverButton] = useState(false);
  const [hoverArrow, setHoverArrow] = useState(null);

  const nextSlide = () => {
    slider.slideNext();
  };
  const prevSlide = () => {
    slider.slidePrev();
  };

  const hovered = (item) => {
    setHover(item);
  };

  const hoveredButton = (item) => {
    setHoverButton(item);
  };

  const hoveredArrow = (item) => {
    setHoverArrow(item);
  };

  return (
    <div className="slider-container">
      <div className="slider-container__upper-section">
        <div className="slider-container__upper-section-text1">{title}</div>
        {type == "first" && (
          <div className="slider-container__upper-section-text2">
            <a href="#">
              Zobacz wszystkie
              <img src={arrowDown} />
            </a>
          </div>
        )}
      </div>
      <div className="slider-container__slider">
        <div
          className={
            type == "first"
              ? "slider-container__slider-element right"
              : type == "second"
              ? "slider-container__slider-element right second"
              : ""
          }
        />
        <div
          className={
            type == "first"
              ? "slider-container__slider-element left"
              : type == "second"
              ? "slider-container__slider-element left second"
              : ""
          }
        />
        {firstActive && type == "first" && (
          <div
            onClick={prevSlide}
            className={
              type == "first"
                ? "slider-container__slider-arrow left"
                : type == "second"
                ? "slider-container__slider-arrow left second"
                : ""
            }
          >
            <img src={arrowDown} style={{ transform: "rotate(180deg)" }} />
          </div>
        )}
        <div
          onClick={nextSlide}
          className={
            type == "first"
              ? "slider-container__slider-arrow right"
              : type == "second"
              ? "slider-container__slider-arrow right second"
              : ""
          }
        >
          <img src={arrowDown} />
        </div>
        <Swiper
          onSwiper={(s) => {
            setSlider(s);
          }}
          slidesPerView={"auto"}
          loop={type == "first" ? true : type == "second" ? false : ""}
          spaceBetween={type == "first" ? 0 : type == "second" ? 3 : ""}
          onSlideChange={(swiperCore) => {
            const { activeIndex } = swiperCore;
            if (activeIndex > 1) {
              setFirstActive(true);
            }

            console.log(firstActive);
          }}
        >
          {(type == "first"
            ? sliderImages
            : type == "second"
            ? sliderImages2
            : ""
          ).map((item) =>
            type == "first" ? (
              <SwiperSlide
                onMouseEnter={() => hovered(item)}
                onMouseLeave={() => setHover(null)}
                key={item.id}
                className={`slider-container__swiper-slide first ${
                  item == hover ? "active" : ""
                } ${item == hoverArrow ? "arrowHover" : ""}`}
              >
                <div className="slider-container__slider-image">
                  <img src={item.img} />
                </div>
                {item == hover && (
                  <div className="slider-container__slider-content">
                    <div className="slider-container__slider-content-buttons">
                      <div className="slider-container__slider-content-container">
                        <a href="#">
                          <div className="slider-container__slider-content-button play">
                            <button>
                              <a href="#">
                                <img src={play} />
                              </a>
                            </button>
                          </div>
                        </a>
                        {hoverButton == item || (
                          <a href="#">
                            <div className="slider-container__slider-content-button add">
                              <button>
                                <a href="#">
                                  <img src={add} />
                                </a>
                              </button>
                            </div>
                          </a>
                        )}
                        <div
                          onMouseEnter={() => hoveredButton(item)}
                          onMouseLeave={() => setHoverButton(null)}
                          className={`slider-container__slider-content-button like ${
                            hoverButton == item ? "hovered" : ""
                          }`}
                        >
                          {hoverButton == item && (
                            <a href="#">
                              <button
                                style={{
                                  position: "relative",
                                  cursor: "pointer",
                                }}
                              >
                                <div className="slider-container__button-popup">
                                  <div
                                    style={{
                                      position: "relative",
                                      zIndex: "1",
                                    }}
                                  >
                                    To nie dla mnie
                                  </div>
                                  <div className="element" />
                                </div>
                                <img src={dislike} />
                              </button>
                            </a>
                          )}
                          <a href="#">
                            <button
                              style={{
                                position: "relative",
                                cursor: "pointer",
                              }}
                            >
                              <div className="slider-container__button-popup">
                                <div
                                  style={{ position: "relative", zIndex: "1" }}
                                >
                                  Podoba mi się
                                </div>
                                <div className="element" />
                              </div>
                              <img src={like} />
                            </button>
                          </a>
                          {hoverButton == item && (
                            <a href="#">
                              <button
                                style={{
                                  position: "relative",
                                  cursor: "pointer",
                                }}
                              >
                                <div className="slider-container__button-popup">
                                  <div
                                    style={{
                                      position: "relative",
                                      zIndex: "1",
                                    }}
                                  >
                                    Uwielbiam to
                                  </div>
                                  <div className="element" />
                                </div>
                                <img src={heart} />
                              </button>
                            </a>
                          )}
                        </div>
                      </div>
                      <div>
                        <div
                          onMouseEnter={() => hoveredArrow(item)}
                          onMouseLeave={() => setHoverArrow(null)}
                          className="slider-container__slider-content-button right"
                        >
                          <button>
                            <img src={arrowDown2} />
                          </button>

                          {item == hoverArrow && (
                            <div className="slider-container__content-button-items">
                              <div className="slider-container__content-button-item">
                                <div className="slider-container__item-image">
                                  <div
                                    style={{ margin: "0 16px", color: "white" }}
                                  >
                                    2
                                  </div>
                                  <div className="slider-container__item-image-icons">
                                    <div className="slider-container__item-image-icon">
                                      <a href="#">
                                        <img src={play} />
                                      </a>
                                    </div>
                                    <img src={wrog} />
                                  </div>
                                </div>
                                <div className="slider-container__item-text">
                                  <div className="slider-container__text-title">
                                    W róg
                                  </div>
                                  <div className="slider-container__text-content">
                                    Skyler dystansuje się od męża,
                                    podejrzewając, że Walt nie jest z nią
                                    całkiem szczery. Jesse dowodzi swojej
                                    wartości w oczach Mike’a i Gusa.
                                  </div>
                                </div>
                                <div className="slider-container__item-time">
                                  <div>47 min</div>
                                </div>
                              </div>
                            </div>
                          )}
                        </div>
                      </div>
                    </div>

                    {item == hoverArrow || (
                      <div className="slider-container__slider-content-bottom">
                        <div className="slider-container__slider-content-title">
                          <div>W róg</div>
                          <div>24 z 58 min</div>
                        </div>
                        <div className="slider-container__slider-content-bar">
                          <div className="slider-container__slider-content-progres" />
                        </div>
                      </div>
                    )}
                  </div>
                )}
              </SwiperSlide>
            ) : type == "second" ? (
              <SwiperSlide
                key={item.id}
                className="slider-container__swiper-slide second"
              >
                <div className="slider-container__second-slider-number">
                  <div
                    className={`${
                      item.id == 1
                        ? "first"
                        : item.id == 2
                        ? "second"
                        : item.id == 3
                        ? "third"
                        : ""
                    }`}
                  >
                    {item.id}
                  </div>
                </div>

                <a href="#">
                  <div className="slider-container__slider-image2">
                    <img src={item.img} />
                  </div>
                </a>
              </SwiperSlide>
            ) : (
              ""
            )
          )}
        </Swiper>
      </div>
    </div>
  );
};

export default Slider;
