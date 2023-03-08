import React from "react";
import styled from "styled-components";

const HeaderArea = styled.div`
  display: flex;
  align-items: center;
  justify-content: space-between;
  padding: 6px;
  height: 60px;
`;

const HeaderLeft = styled.div`
  display: flex;
`;

const HeaderLeftFirst = styled.div`
  padding: 5px;
  margin-left: 15px;
`;

const HeaderLeftSecond = styled.div`
  padding: 5px;
  margin: 0 5px;
`;

const HeaderRight = styled.div`
  display: flex;
  padding-right: 15px;
`;

export const Svg = styled.svg`
  width: 24px;
  height: 24px;
  vertical-align: middle;
  padding: 0 8px;
`;

const Header = () => {
  return (
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
  );
};

export default Header;
