import React from "react";
import styled from "styled-components";

const NavArea = styled.div`
  width: 100%;
  height: 56px;
  border: 1px solid green;
  font-family: Roboto, Arial, sans-serif;
  display: flex;
  padding: 12px;
  margin: 12px 0;
  justify-content: space-evenly;
  position: fixed;
`;

const NavBox = styled.div`
  width: 100%;
  height: 32px;
  border-radius: 8px;
  background-color: #f2f2f2;
  text-align: center;
  padding-top: 5px;
`;

const Nav = () => {
  return (
    <NavArea>
      <NavBox>dd</NavBox>
      <NavBox>dd</NavBox>
      <NavBox>dd</NavBox>
      <NavBox>dd</NavBox>
      <NavBox>dd</NavBox>
      <NavBox>dd</NavBox>
      <NavBox>dd</NavBox>
      <NavBox>dd</NavBox>
      <NavBox>dd</NavBox>
      <NavBox>dd</NavBox>
      <NavBox>dd</NavBox>
      <NavBox>dd</NavBox>
      <NavBox>dd</NavBox>
    </NavArea>
  );
};
export default Nav;
