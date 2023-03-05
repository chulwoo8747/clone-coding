import React from "react";
import styled from "styled-components";
const FooterArea = styled.div`
  height: 102px;
  background: #f2f2f2;
`;

const FooterTop = styled.div`
  padding: 15px 30px;
  border-bottom: 1px solid #dadce0;
  font-size: 15px;
  color: #70757a;
`;

const FooterBottom = styled.div`
  display: flex;
  justify-content: space-between;
  padding: 0 20px;
  font-size: 14px;
`;

const FooterBottomLeft = styled.div`
  padding: 15px 30px;
  color: #70757a;
`;

const FooterBottomRight = styled.div`
  display: flex;
  padding: 15px 30px;
  color: #70757a;
`;

const Footer = () => {
  return (
    <FooterArea>
      <FooterTop>대한민국</FooterTop>
      <FooterBottom>
        <FooterBottomLeft>광고 비즈니스 검색의 원리</FooterBottomLeft>
        <FooterBottomRight>개인정보처리방침 약관 설정</FooterBottomRight>
      </FooterBottom>
    </FooterArea>
  );
};

export default Footer;
