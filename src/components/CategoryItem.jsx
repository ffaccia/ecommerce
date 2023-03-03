import React from "react";
import styled from "styled-components";
import { mobile, tablet, device } from "../responsive";

const Container = styled.div.attrs({
  "data-id": "CategoryItem-Container",
})`
  flex: 1;
  display: flex;
  justify-content: center;
  align-items: center;
`;

const Wrapper = styled.div.attrs({
  "data-id": "CategoryItem-Wrapper",
})`
  position: relative;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  //border: 1px solid red;
  height: 100%;
  ${mobile({ height: "80vh" })}
`;

const Image = styled.img.attrs({
  "data-id": "CategoryItem-img",
})`
  width: 90%;
  height: 100%;
`;

const Title = styled.h1.attrs({
  "data-id": "CategoryItem-Title",
  
})`
${tablet({ fontSize: "1rem" })}
`;

const Info = styled.div.attrs({
  "data-id": "CategoryItem-Info",
})`
  position: absolute;
  bottom: 3rem;
  color: wheat;
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  align-items: center;
`;

const Button = styled.button.attrs({
  "data-id": "CategoryItem-Button",
})`
  background: lightgray;
  color: black;
  font-weight: 600;
  width: 8rem;
  margin-top: 1rem;
  opacity: 0.8;
  //box-shadow: 2px 5px #888888;
`;

const WrapperB = styled.div`
  &:hover ${Button} {
    background: brown;
    color: wheat; //opacity: 1;
    //transition: opacity 1s ease;
    //transition: opacity 900ms ease-out;
  }
`;

const CategoryItem = ({ item }) => {
  return (
    <Container>
      <Wrapper>
        <Image src={item.img} />
        <Info>
          <Title>{item.title}</Title>
          <WrapperB>
            <Button>SHOP NOW</Button>
          </WrapperB>
        </Info>
      </Wrapper>
    </Container>
  );
};

export default CategoryItem;
