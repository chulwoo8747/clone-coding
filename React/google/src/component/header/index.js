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
        <HeaderLeftFirst>
          <a href="https://about.google/?fg=1&utm_source=google-KR&utm_medium=referral&utm_campaign=hp-header">
            Google 정보
          </a>
        </HeaderLeftFirst>
        <HeaderLeftSecond>
          <a href="https://store.google.com/KR?utm_source=hp_header&utm_medium=google_ooo&utm_campaign=GS100042&hl=ko-KR">
            스토어
          </a>
        </HeaderLeftSecond>
      </HeaderLeft>
      <HeaderRight>
        <HeaderLeftSecond>
          <a href="https://mail.google.com/mail/?authuser=0&ogbl">Gmail</a>
        </HeaderLeftSecond>
        <HeaderLeftSecond>
          <a href="https://www.google.co.kr/imghp?hl=ko&authuser=0&ogbl">
            이미지
          </a>
        </HeaderLeftSecond>
        <Svg focusable="false" viewBox="0 0 24 24 ">
          <path d="M6,8c1.1,0 2,-0.9 2,-2s-0.9,-2 -2,-2 -2,0.9 -2,2 0.9,2 2,2zM12,20c1.1,0 2,-0.9 2,-2s-0.9,-2 -2,-2 -2,0.9 -2,2 0.9,2 2,2zM6,20c1.1,0 2,-0.9 2,-2s-0.9,-2 -2,-2 -2,0.9 -2,2 0.9,2 2,2zM6,14c1.1,0 2,-0.9 2,-2s-0.9,-2 -2,-2 -2,0.9 -2,2 0.9,2 2,2zM12,14c1.1,0 2,-0.9 2,-2s-0.9,-2 -2,-2 -2,0.9 -2,2 0.9,2 2,2zM16,6c0,1.1 0.9,2 2,2s2,-0.9 2,-2 -0.9,-2 -2,-2 -2,0.9 -2,2zM12,8c1.1,0 2,-0.9 2,-2s-0.9,-2 -2,-2 -2,0.9 -2,2 0.9,2 2,2zM18,14c1.1,0 2,-0.9 2,-2s-0.9,-2 -2,-2 -2,0.9 -2,2 0.9,2 2,2zM18,20c1.1,0 2,-0.9 2,-2s-0.9,-2 -2,-2 -2,0.9 -2,2 0.9,2 2,2z"></path>
        </Svg>
      </HeaderRight>
    </HeaderArea>
  );
};

export default Header;
