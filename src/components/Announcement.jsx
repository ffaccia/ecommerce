import React, { useEffect, useState, useRef } from "react";
import styled from "styled-components";
import { GlobalStyle } from "../pages/Home";
import { mobile, tablet } from "../responsive";
import { dim } from "../data/settings";
console.log("dimee vale ", dim);

var viewport_width;
var viewport_height;
var str;

function reportWindowSize() {
  //heightOutput.textContent = window.innerHeight;
  //widthOutput.textContent = window.innerWidth;
  viewport_width = window.innerWidth;
  viewport_height = window.innerHeight;
  //console.log("fra ", window.innerWidth, window.innerHeight);
}

window.onresize = reportWindowSize;

const Container = styled.div`
  height: 30px;
  width: 100%;
  background: teal;
  color: white;
  display: flex;
  justify-content: center;
  align-items: center;
  font-size: 1em;
  font-weight: 500;
`;

export const Container2 = styled(Container)`
  transform: translate3d (0, -200%, 0);
  font-size: 0.7em;
  transition: all 1s ease;
`;

export const Announcement = (props) => {
  const [widthSize, setWidthSize] = useState(window.innerWidth);
  const [str, setStr] = useState(
    "Super Deal! Free Shipping on orders over 50 Rubles!"
  );

  
  /*like that is infinite loop, use useRef instead
  const [renderCount, setRenderCount] = useState(1)
  useEffect(() => {
    setRenderCount(prevRenderCount => prevRenderCount+1) 
  })
  */

  const renderCount = useRef(1)
  useEffect(() => {
    renderCount.current = renderCount.current+1 
  })


  useEffect(() => {
    function reportWindowSize() {
      //heightOutput.textContent = window.innerHeight;
      //widthOutput.textContent = window.innerWidth;
      viewport_width = window.innerWidth;
      viewport_height = window.innerHeight;
      //console.log("fra ", window.innerWidth, window.innerHeight);
      setWidthSize(() => window.innerWidth);
    }

    window.onresize = reportWindowSize;
  }, []);

  useEffect(() => {
    console.log("annou", dim.tablet_width, widthSize);
    setStr(() => {
      return widthSize < dim.tablet_width
        ? "Free Shipping on 50!"
        : "Super Deal! Free Shipping on orders over 50 Rubles!";
    });
  }, [widthSize]);

  /*


  console.log("asize2222"); //, dim.tablet_width);
  console.log(props); //, dim.tablet_width);
  let ppp=props.asize;
  console.log(ppp, window.innerWidth );
  var str = "Super Deal! Free Shipping on orders over 50 Rubles!";
  if (window.innerWidth < dim.tablet_width) {
    console.log("free ")
    str = "Free Shipping on 90!"
  }
  */
  console.log("str vale", str);
  return (
    <Container id='announcement-id' className='announcement'>
      {renderCount.current} {str}
    </Container>
  );
};

export const AnnouncementScroll = (props) => {
  const [widthSize, setWidthSize] = useState(window.innerWidth);
  const [str2, setStr2] = useState(
    "Super Deal! Free Shipping on orders over 90 Rubles!"
  );
  
  /*like that is infinite loop, use useRef instead
  const [renderCount, setRenderCount] = useState(1)
  useEffect(() => {
    setRenderCount(prevRenderCount => prevRenderCount+1) 
  })
  */

  const renderCount = useRef(1)
  useEffect(() => {
    renderCount.current = renderCount.current+1 
  })

  useEffect(() => {
    function reportWindowSize() {
      //heightOutput.textContent = window.innerHeight;
      //widthOutput.textContent = window.innerWidth;
      viewport_width = window.innerWidth;
      viewport_height = window.innerHeight;
      //console.log("fra ", window.innerWidth, window.innerHeight);
      setWidthSize(() => window.innerWidth);
    }

    window.onresize = reportWindowSize;
  }, []);

  useEffect(() => {
    console.log("annouScroll", dim.tablet_width, widthSize);

    setStr2(() => {
      return widthSize < dim.tablet_width
        ? "Free Shipping on 90!"
        : "Super Deal! Free Shipping on orders over 90 Rubles!";
    });
  }, [widthSize]);

  /*

  console.log("asize2222"); //, dim.tablet_width);
  console.log(props); //, dim.tablet_width);
  let ppp=props.asize;
  console.log(ppp, window.innerWidth );
  var str = "Super Deal! Free Shipping on orders over 90 Rubles!";
  if (window.innerWidth < dim.tablet_width) {
    console.log("free ")
    str = "Free Shipping on 90!"
  }
  */
  return (
    <Container2 id='announcement-id' className='announcement'>
      {renderCount.current} {str2} 
    </Container2>
  );
};
