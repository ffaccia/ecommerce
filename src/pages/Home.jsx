import { Announcement, AnnouncementScroll } from "../components/Announcement";
import React, { useState, useEffect } from "react";
import Navbar from "../components/Navbar";
import Slider from "../components/Slider";
import Categories from "../components/Categories";

import styled, { createGlobalStyle } from "styled-components";
import Products from "../components/Products";
import Newsletter from "../components/Newsletter";
import Footer from "../components/Footer";

import Timer from "../components/Timer";

import { useScript, useStyle } from "../hooks/useScript";



/* just a try to test global style */
export const GlobalStyle = createGlobalStyle`
  body {
    color: ${(props) => (props.whiteColor ? "yellow" : "red")};
  }
`;
const BigHeader_ = ({ children, className, person }) => {
  const [scroll, setScroll] = useState(0);

  //the shrinkHeader variable is where you tell the scroll effect to start.
  useEffect(() => {
    var shrinkHeader = 70;
    function getCurrentScroll2() {
      return window.pageYOffset || document.documentElement.scrollTop;
    }

    document.addEventListener("scroll", () => {
      var scroll = getCurrentScroll2();
      let announ = document.querySelector(".announcement");
      if (scroll >= shrinkHeader) {
        setScroll(1);
        //return "scroll" //document.querySelector('.announcement').classList.add('smaller');
      } else {
        setScroll(0);
        //return "noscroll"; //document.querySelector('.announcement').classList.remove('smaller');
      }
      console.log("function calle3d");
    });

    /*
    document.addEventListener("resize", () => {
      // viewport and full window dimensions will change

      var viewport_width = window.innerWidth;
      var viewport_height = window.innerHeight;
      console.log(window.innerWidth, window.innerHeight)
    });
    */

  }, []);

  return (
    <>
      {console.log("cccc")}
      {console.log(children)}
      {console.log(className)}
      {console.log(person)}
      {scroll && <AnnouncementScroll asize={window.innerWidth} />}
      {!scroll && <Announcement asize={window.innerWidth} />}
      <Navbar />
    </>
  );
};

const BigHeaderSty = styled(BigHeader_)`
  position: fixed;
  width: 50%;
  margin-left: 100px;
`;

const BigHeader = () => {
  //useScript('https://cdnjs.cloudflare.com/ajax/libs/jquery/3.1.0/jquery.min.js');
  //useScript('../css/headerScroll.css');
  //useScript('../js/headerScroll.js');

  return (
    <div
      className='bigHeader'
      style={{ position: "sticky", top: 0, width: "100%", zIndex: "100" }}
    >
      <BigHeader_ person={{ name: "Lin Lanying", imageId: "1bX5QH6" }}>
        <div style={{ backgroundColor: "red" }}></div>
      </BigHeader_>
    </div>
  );
};

const Home = () => {
  {
    console.log("eccoBigHeader");
  }
  {
    console.log(BigHeader);
  }
  return (
    <div>
      <BigHeader />
      <Slider />
      <Categories />
      <Products />
      <Newsletter />
      <Footer />
    </div>
  );
};

/*
const Home = () => {
  return (
    <div>
      <Announcement />
      <Navbar />
      <Slider />
      <Categories />
      <Products />
      <Newsletter />
      <Footer />
    </div>
  )
}
*/

const obj = {
  Home: Home,
};
export { obj };
