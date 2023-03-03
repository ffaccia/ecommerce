import React, { useRef, useEffect } from "react";
import styled from "styled-components";
import { Search, ShoppingCartOutlined } from "@material-ui/icons";
import Badge from "@material-ui/core/Badge";
import { useSelector } from "react-redux";
import "../css/headerScroll.css";
import { mobile, tablet, device } from "../responsive";

import {
  BrowserRouter as Router,
  Switch,
  Route,
  Redirect,
} from "react-router-dom";

const Container = styled.div`
  height: 60px;
  background-color: gray;
  ${tablet({ height: "80px" })}
`;

const Wrapper = styled.div`
  padding: 10px 20px;

  display: flex;
  justify-content: space-between;
  align-items: center;
`;

const SearchContainer = styled.div`
  border: 0.5px solid lightgray;
  display: flex;
  align-items: center;
  margin-left: 25px;
  padding: 5px;
`;

const Input = styled.input`
  border: none;
  //width: max-content;
  ${tablet({ width: "50px" })};
`;

const Logo = styled.h1`
  font-weight: bold;
`;
const Left = styled.div`
  //width: 33.333333%;
  display: flex;
  flex: 1;
  ${tablet({ padding: "0" })};
`;

const Center = styled.div`
  //width: 33.333333%;
  //border: .3px solid lightgray;
  flex: 1;
  text-align: center;
  ${tablet({ fontSize: "60%", padding: "0 10px" })};
`;

const Right = styled.div`
  //width: 33.333333%;
  flex: 1;
  display: flex;
  align-items: center;
  justify-content: flex-end;
  ${tablet({ flex: 2, flexDirection: "column", justifyContent: "center" })};
`;

const MenuItem = styled.div`
  font-size: 14px;
  margin-right: 1.3em;
  cursor: pointer;
`;

const MenuItemA = styled.a`
  font-size: 14px;
  margin-right: 1.3em;
  cursor: pointer;
  text-decoration: none;
  color: white;
  ${tablet({ fontSize: "70%" })};

  &:hover {
    transform: scale(1.2);
  }
`;

const Hov_MenuItemA = styled(MenuItemA)`
  &:hover {
    transform: scale(1.2);
  }
`;

const Language = styled.div`
  font-size: 14px;
  cursor: pointer;
  ${mobile({ display: "none" })};
`;

const Navbar = () => {

    const ref = useRef(null);  

    useEffect(() => {
        const handleClick = event => {
          console.log('Button clicked');
    
          console.log('bobbyhadz.com');
        };
    
        const element = ref.current;
        console.log("element ",element)
        element.addEventListener('click', handleClick);
    
        return () => {
          element.removeEventListener('click', handleClick);
        };
      }, []);
      
      
    
    const user = useSelector((state) => state.user.currentUser);


  let where;
  if (user) where = "/logout";
  else where = "/login";
  const where_display =
    where.slice(1).charAt(0).toUpperCase() + where.slice(2).toLowerCase();

  return (
    <Container ref={ref} >
      <Wrapper>
        <Left>
          <Language>EN</Language>
          <SearchContainer>
            <Input placeholder='Search'></Input>
            <Search style={{ color: "lightgray", fontSize: 18 }} />
          </SearchContainer>
        </Left>
        <Center>
          <Logo>FACCIA</Logo>
        </Center>
        <Right>
          {console.log("uservale ", user)}

          <MenuItemA href='#category'>Category</MenuItemA>
          {user == null && <MenuItemA href='/register'>Register</MenuItemA>}

          <MenuItemA href={where}>{where_display}</MenuItemA>

          <MenuItem>
            <Badge
              badgeContent={4}
              color='primary'
              anchorOrigin={{
                vertical: "top",
                horizontal: "right",
              }}
            >
              <ShoppingCartOutlined />
            </Badge>
          </MenuItem>
        </Right>
      </Wrapper>
    </Container>
  );
};

export default Navbar;
