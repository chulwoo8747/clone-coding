import styled from "styled-components";
import React from "react";
import { Svg } from "../header";
import logo from "../../aseets/logo/logo.png";
import tia from "../../aseets/icons/tia.png";

const BodyArea = styled.div`
  width: 100%;
  height: 485.2px;
  align-items: center;
  margin-top: 52px;
`;

const Logo = styled.img`
  margin: auto;
  display: block;
`;

const SearchBox = styled.div`
  display: flex;
  height: 44px;
  background: #fff;
  border: 1px solid #dfe1e5;
  border-radius: 24px;
  margin: 0 auto;
  max-width: 584px;
`;

const SearchingIcon = styled.div`
  display: flex;
  align-items: center;
  padding-right: 13px;
  margin-top: -5px;
`;

const SearchingTool = styled.div`
  width: 20%;
  height: 100%;
  border: 1px solid red;
`;

const Input = styled.input`
  background-color: transparent;
  border: none;
  outline: none;
  width: 100%;
`;

const Body = () => {
  return (
    <BodyArea>
      <Logo src={logo} />
      <SearchBox>
        <SearchingIcon>
          <Svg focusable="false" viewBox="0 0 24 24">
            <path d="M15.5 14h-.79l-.28-.27A6.471 6.471 0 0 0 16 9.5 6.5 6.5 0 1 0 9.5 16c1.61 0 3.09-.59 4.23-1.57l.27.28v.79l5 4.99L20.49 19l-4.99-5zm-6 0C7.01 14 5 11.99 5 9.5S7.01 5 9.5 5 14 7.01 14 9.5 11.99 14 9.5 14z"></path>
          </Svg>
        </SearchingIcon>
        <Input />
        <SearchingTool>
          <img src={tia} />
          <Svg focusable="false" viewBox="0 0 24 24">
            <path
              fill="#4285f4"
              d="m12 15c1.66 0 3-1.31 3-2.97v-7.02c0-1.66-1.34-3.01-3-3.01s-3 1.34-3 3.01v7.02c0 1.66 1.34 2.97 3 2.97z"
            ></path>
            <path fill="#34a853" d="m11 18.08h2v3.92h-2z"></path>
            <path
              fill="#fbbc05"
              d="m7.05 16.87c-1.27-1.33-2.05-2.83-2.05-4.87h2c0 1.45 0.56 2.42 1.47 3.38v0.32l-1.15 1.18z"
            ></path>
            <path
              fill="#ea4335"
              d="m12 16.93a4.97 5.25 0 0 1 -3.54 -1.55l-1.41 1.49c1.26 1.34 3.02 2.13 4.95 2.13 3.87 0 6.99-2.92 6.99-7h-1.99c0 2.92-2.24 4.93-5 4.93z"
            ></path>
          </Svg>
        </SearchingTool>
      </SearchBox>
    </BodyArea>
  );
};

export default Body;
