import React from "react";
import styled from "styled-components";

const HeaderArea = styled.div`
  display: flex;
  aline-items: center;
  justify-content: space-between;
  padding: 6px;
  height: 60px;
  font-size: 14px;
  font-family: Apple SD Gothic Neo, arial, sans-serif;
`;

const HeaderLeft = styled.div`
  display: flex;
`;

const HeaderLeftFirst = styled.div`
  padding: 5px;
  margin: 0 5px;
  margin-left: 15px;
`;

const HeaderLeftSecond = styled.div`
  padding: 5px;
  margin: 0 5px;
`;

const HeaderRight = styled.div`
  display: flex;
  float: right;
  padding-right: 15px;
`;

const HeaderRightSecond = styled.div`
  padding: 5px;
  margin: 0 5px;
  margin-right: 15px;
`;

export const Svg = styled.svg`
  width: 24px;
  height: 24px;
`;

const Header = () => {
  return (
    <div>
      <HeaderArea>
        <HeaderLeft>
          <HeaderLeftFirst>Google 정보</HeaderLeftFirst>
          <HeaderLeftSecond>스토어</HeaderLeftSecond>
        </HeaderLeft>
        <HeaderRight>
          <HeaderLeftSecond>Gmail</HeaderLeftSecond>
          <HeaderLeftSecond>이미지</HeaderLeftSecond>
          <Svg focusable="false" viewBox="0 0 24 24 ">
            <path d="M6,8c1.1,0 2,-0.9 2,-2s-0.9,-2 -2,-2 -2,0.9 -2,2 0.9,2 2,2zM12,20c1.1,0 2,-0.9 2,-2s-0.9,-2 -2,-2 -2,0.9 -2,2 0.9,2 2,2zM6,20c1.1,0 2,-0.9 2,-2s-0.9,-2 -2,-2 -2,0.9 -2,2 0.9,2 2,2zM6,14c1.1,0 2,-0.9 2,-2s-0.9,-2 -2,-2 -2,0.9 -2,2 0.9,2 2,2zM12,14c1.1,0 2,-0.9 2,-2s-0.9,-2 -2,-2 -2,0.9 -2,2 0.9,2 2,2zM16,6c0,1.1 0.9,2 2,2s2,-0.9 2,-2 -0.9,-2 -2,-2 -2,0.9 -2,2zM12,8c1.1,0 2,-0.9 2,-2s-0.9,-2 -2,-2 -2,0.9 -2,2 0.9,2 2,2zM18,14c1.1,0 2,-0.9 2,-2s-0.9,-2 -2,-2 -2,0.9 -2,2 0.9,2 2,2zM18,20c1.1,0 2,-0.9 2,-2s-0.9,-2 -2,-2 -2,0.9 -2,2 0.9,2 2,2z"></path>
          </Svg>
        </HeaderRight>
      </HeaderArea>
    </div>
  );
};

export default Header;
