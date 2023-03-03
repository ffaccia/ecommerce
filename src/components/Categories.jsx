import styled from "styled-components";
import React from "react";
import { categories } from "../data/data";
import CategoryItem from "./CategoryItem";
import { mobile, tablet, device } from "../responsive";

const Container = styled.div.attrs({
  "data-id": "Container",
})`
  display: flex;
  ${mobile({ paddingTop: "10px", flexDirection: "column", gap: "10px" })}
`;

//console.log(categories)

const Categories = () => {
  return (
    <Container id='category'>
      {categories.map((item) => (
        <CategoryItem item={item}>Hello</CategoryItem>
      ))}
    </Container>
  );
};

export default Categories;
