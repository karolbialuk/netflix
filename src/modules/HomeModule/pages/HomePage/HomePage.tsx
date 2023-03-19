import React from "react";
import "./HomePage.scss";
import Header from '../../components/header/Header';
import Slider from '../../components/slider/Slider';



export const HomePage = () => {
  return (
    <>
     <Header/>
     <Slider type="first" title="Docenione przez krytyków"/>
     <Slider type="first" title="Popularne teraz"/>
     <Slider type="first" title="Obejrzyj ponownie"/>
     <Slider type="second" title="Top 10 seriali w Polsce dzisiaj"/>
     <Slider type="second" title="Top 10 seriali w Polsce dzisiaj"/>
    </>
  );
};
