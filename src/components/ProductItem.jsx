import {
    FavoriteBorderOutlined,
    SearchOutlined,
    ShoppingCartOutlined,
  } from "@material-ui/icons";
  import { Link } from "react-router-dom";
  import styled from "styled-components";
  
  import {
    BrowserRouter as Router, 
    Routes, 
    Route
  } from 'react-router-dom';

  const thisPage = "ProductItem"

  const Info = styled.div`
    opacity: 0;
    width: 100%;
    height: 100%;
    position: absolute;
    top: 0;
    left: 0;
    background-color: rgba(0, 0, 0, 0.2);
    z-index: 3;
    display: flex;
    align-items: center;
    justify-content: center;
    transition: all 0.5s ease;
    cursor: pointer;

    &:hover {
        opacity: 1
    }
  `;
  
  const Container = styled.div.attrs({
    'data-id': `${thisPage}.Container`
  })`
    flex: 1;
    margin: 5px;
    min-width: 280px;
    max-width: 300px;
    height: 350px;
    display: flex;
    align-items: center;
    justify-content: center;
    background-color: #f5fbfd;
    position: relative;
  
    &:hover ${Info}{
      opacity: 1;
    }
  `;
  

  const Circle = styled.div.attrs({
    'data-id': `${thisPage}.Circle`
  })`
    height: 300px;
    width: 200px;
    border-radius: 50%;
    background-color: white;
    position: absolute;
    opacity: 1;
  `;


  const Image = styled.img`
    height: 75%;
    border-radius: 20%;
    z-index: 2;
  `;
  
  const Icon = styled.div`
    width: 40px;
    height: 40px;
    border-radius: 50%;
    background-color: white;
    display: flex;
    align-items: center;
    justify-content: center;
    margin: 10px;
    transition: all 0.5s ease;
    &:hover {
      background-color: #e9f5f5;
      transform: scale(1.1);
    }
  `;
  
  const Product = ({ item }) => {
    return (
      <Container>
        <Circle />
        <Image src={item.img} />
        <Info>
          <Icon>
            <ShoppingCartOutlined />
          </Icon>
          <Icon>
            <Router>
                <Link to={`/product/${item.id}`}>
                </Link>
            </Router>
            <SearchOutlined />
          </Icon>
          <Icon>
            <FavoriteBorderOutlined />
          </Icon>
        </Info>
      </Container>
    );
  };
  
  export default Product;