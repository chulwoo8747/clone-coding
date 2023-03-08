import React from "react";
import styled from "styled-components";
const FooterArea = styled.div`
  height: 102px;
  background: #f2f2f2;
`;

const Country = styled.div`
  padding: 15px 30px;
  border-bottom: 1px solid #dadce0;
  font-size: 15px;
  color: #70757a;
`;

const FooterBottom = styled.div`
  display: flex;
  justify-content: space-between;
  padding: 0 20px 0 0;
`;

const Information = styled.div`
  padding: 15px 30px;
  color: #70757a;
`;

const TermsSettings = styled.div`
  padding: 15px 0;
  color: #70757a;
`;

const Advertisement = styled.span`
  padding: 15px 15px 15px 0;
`;

const Business = styled.span`
  padding: 15px;
`;

const Footer = () => {
  return (
    <FooterArea>
      <Country>대한민국</Country>
      <FooterBottom>
        <Information>
          <Advertisement>광고</Advertisement> <Business>비즈니스</Business>
          <Business>검색의 원리</Business>
        </Information>
        <TermsSettings>
          <Advertisement>개인정보처리방침</Advertisement>
          <Business>약관</Business> <Business>설정</Business>
        </TermsSettings>
      </FooterBottom>
    </FooterArea>
  );
};

export default Footer;
