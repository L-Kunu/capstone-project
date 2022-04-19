import React from "react";
import styled from "styled-components";
import { NavLink } from "react-router-dom";

export default function Header() {
  return (
    <HeaderContainer>
      <Tittle>{<img src='/images/Union3.png' />}</Tittle>
    </HeaderContainer>
  );
}

const HeaderContainer = styled.div`
  height: 400px;
  display: flex;
  background-image: url("https://images.unsplash.com/photo-1530831437294-9bd11dbfaa2c?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=871&q=80");
  background-repeat: no-repeat;
  background-attachment: fixed;
  background-position: center;
`;
const StyledNavLink = styled(NavLink)`
  text-decoration: none;
`;

const Tittle = styled.h1`
  color: #093764;
  font-family: "Ubuntu", sans-serif;
  font-weight: bold;
  margin-top: -25px;
  padding: 20px;
  text-align: left;
  width: 100vw;
`;
