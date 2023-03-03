import React, { Fragment, useState } from 'react'
import { ArrowLeftOutlined, ArrowRightOutlined } from '@material-ui/icons'
import styled from 'styled-components'
import {SliderItems} from "../data/data"
import { mobile, tablet, device } from "../responsive";

function jsonEscape(str)  {
    return str.replace(/\n/g, "\\\\n").replace(/\r/g, "\\\\r").replace(/\t/g, "\\\\t");
}
function jsonEscape2(str)  {
    return str.replace(/<cr>/g, "<br></br>");
}

function htmlDecode(tag, input){
    var e = document.createElement(tag);
    e.innerHTML = input;
    return e.childNodes.length === 0 ? "" : e.childNodes[0].nodeValue;
}  

const Container = styled.div`
    position: relative;
    width: 100%;
    height: 100vh;
    display: flex;
    overflow: hidden;
    ${mobile({ display: "none" })}
`

const Arrow = styled.div`
    position: absolute;
    top: 0;
    bottom: 0;
    margin: auto;
    width: 50px;
    height: 50px;
    background-color: #fff9f9;
    border-radius: 50%;
    display: flex;
    align-items: center;
    justify-content: center;
    left: ${ props => props.direction === "left" && "10px" };
    right: ${ props => props.direction === "right" && "10px" };
    cursor: pointer;
    opacity: .5; //test: calc(0.1 + 0.1);
    z-index: 2;
`

const Wrapper = styled.div.attrs({
    'data-id': 'Wrapper'
 })`
    height: 100%;
    width: 100vw;
    display: flex;
    flex: 1;
    //margin-top: 2rem;
    //display: flex;
    //justify-content: space-between;
    //background-color: #${props => props.bg};
    transition: transform 1.2s ease;
    //transform: translateX(-0vw); // (${(props) => props.slideIndex * -100}vw)
    //transform: translateX(${(props) => 3 * -100}vw);
    transform: translateX(${(props) => props.slideIndex * -100}vw);
`

const Slide = styled.div.attrs({
    'data-id': 'Slide'
 })`
    height: 100vh;
    width: 100vw;
    //flex: 1;
    display: flex;
    align-items: center;
    background: #${props => props.bg};
`

const ImgContainer = styled.div.attrs({
    'data-id': 'ImgContainer'
 })`
    height: 100%;
    width: 100%;
    flex: 1;
    background: transparent;
    //object-fit: cover;
`

const Image = styled.img.attrs({
    'data-id': 'Image'
 })`
    height: 90%;
    aspect-ratio: 3/4;
    
`

const InfoContainer = styled.div.attrs({
    'data-id': 'InfoContainer'
 })`
    flex: 3;
    display: flex;
    flex-direction: column;
    align-items: flex-start;
    justify-content: center;
    height: 100%;
    width: 100vw; 
    padding-left: 1rem;
    padding-top: 5rem;
`

const Title = styled.h1.attrs({
    'data-id': 'Title'
 })`
    font-size: 3rem;    
`

const Desc = styled.p.attrs({
    'data-id': 'Desc'
 })`
    margin: 50px 10px;   
    font-size: 1.3rem;
    font-weight: 500;
    letter-spacing: 3px;
`

const Button = styled.button`
    padding: 10px;
    font-size: 1rem;
    background: transparent;
    cursor: pointer;
    opacity: .8;
    //transition: opacity 1s ease;
    //transition: opacity 900ms ease-out;
`

const Button_Hover = styled(Button)`
    &:hover {
        background: lightgray;
        opacity: 1;
    }
`;

const WrapperB = styled.div`
  &:hover ${Button} {
    background: lightgray;
    opacity: 1;
    //transition: opacity 1s ease;
    transition: opacity 900ms ease-out;
  }
`

const Slider = () => {

    const [slideIndex, setSlideIndex] = useState(0)
    
    const _setSlideIndex = val => {
        setSlideIndex(val)
        console.log("slideindex after ",val)
    }

    const handleClick = (direction) => {
        console.log(direction)
        console.log("slideindex now ",slideIndex)
        switch(direction) {
            case "left":
                _setSlideIndex(slideIndex > 0 ? slideIndex-1 : SliderItems.length-1);
                //_setSlideIndex(slideIndex -1);
                break;
            default:
                _setSlideIndex(slideIndex === SliderItems.length-1 ? 0 : slideIndex+1);
                //_setSlideIndex(slideIndex+1);
                break;
        } 
        
    }

  return (
    <Container>
        <Arrow direction="left" onClick={() => handleClick("left")}>
            <ArrowLeftOutlined/>
        </Arrow>
        <Wrapper slideIndex={slideIndex}>
            {SliderItems.map((item) => (
                <Slide bg={item.bg} key={item.id}>
                    <ImgContainer>
                        <Image src={item.src} />
                    </ImgContainer>
                    <InfoContainer>
                        <Title>{item.title}</Title>
                        <Desc dangerouslySetInnerHTML={{ __html: item.desc }}></Desc>
                        <WrapperB><Button>SHOW NOW</Button></WrapperB>
                    </InfoContainer>
                </Slide>
            ))}    
        </Wrapper>
        <Arrow direction="right" onClick={() => handleClick("right")}>
            <ArrowRightOutlined/>
        </Arrow>
    </Container>
  )
}

export default Slider