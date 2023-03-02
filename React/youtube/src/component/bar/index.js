import React from "react";
import styled from "styled-components";
import { Svg } from "../header";

const BarArea = styled.div`
  height: 657.6px;
  width: 240px;
  border: 1px solid brown;
  position: fixed;
`;

const BarItem = styled.div`
  height: 160px;
  display: flex;
  flex-direction: column;
  border-bottom: 1px solid #cccccc;
  justify-content: center;
`;

const HomeButton = styled.div`
  height: 40px;
  padding: 8px 22px;
  justify-content: center;
  vertical-align: middle;
`;

const ContentList = styled.div`
  width: 240px;
  height: 240px;
  display: flex;
  flex-direction: column;
  border-bottom: 1px solid #cccccc;
`;

const Bar = () => {
  return (
    <BarArea>
      <BarItem>
        <HomeButton>
          <Svg viewBox="0 0 24 24" focusable="false">
            <path d="M4,10V21h6V15h4v6h6V10L12,3Z"></path>
          </Svg>
          홈
        </HomeButton>
        <HomeButton>
          <Svg viewBox="0 0 24 24" focusable="false">
            <path d="M10 14.65v-5.3L15 12l-5 2.65zm7.77-4.33c-.77-.32-1.2-.5-1.2-.5L18 9.06c1.84-.96 2.53-3.23 1.56-5.06s-3.24-2.53-5.07-1.56L6 6.94c-1.29.68-2.07 2.04-2 3.49.07 1.42.93 2.67 2.22 3.25.03.01 1.2.5 1.2.5L6 14.93c-1.83.97-2.53 3.24-1.56 5.07.97 1.83 3.24 2.53 5.07 1.56l8.5-4.5c1.29-.68 2.06-2.04 1.99-3.49-.07-1.42-.94-2.68-2.23-3.25zm-.23 5.86l-8.5 4.5c-1.34.71-3.01.2-3.72-1.14-.71-1.34-.2-3.01 1.14-3.72l2.04-1.08v-1.21l-.69-.28-1.11-.46c-.99-.41-1.65-1.35-1.7-2.41-.05-1.06.52-2.06 1.46-2.56l8.5-4.5c1.34-.71 3.01-.2 3.72 1.14.71 1.34.2 3.01-1.14 3.72L15.5 9.26v1.21l1.8.74c.99.41 1.65 1.35 1.7 2.41.05 1.06-.52 2.06-1.46 2.56z"></path>
          </Svg>
          Shorts
        </HomeButton>
        <HomeButton>
          <Svg viewBox="0 0 24 24" focusable="false">
            <path d="M10,18v-6l5,3L10,18z M17,3H7v1h10V3z M20,6H4v1h16V6z M22,9H2v12h20V9z M3,10h18v10H3V10z"></path>
          </Svg>
          구독
        </HomeButton>
      </BarItem>
      <ContentList>
        <HomeButton>
          <Svg viewBox="0 0 24 24" focusable="false">
            <path d="M11,7l6,3.5L11,14V7L11,7z M18,20H4V6H3v15h15V20z M21,18H6V3h15V18z M7,17h13V4H7V17z"></path>
          </Svg>
          보관함
        </HomeButton>
        <HomeButton>
          <>시청 기록</>
        </HomeButton>
        <HomeButton>
          <>내 동영상</>
        </HomeButton>
        <HomeButton>
          <>나중에 볼 동영상</>
        </HomeButton>
        <HomeButton>
          <>좋아요 표시한 동영상</>
        </HomeButton>
      </ContentList>
    </BarArea>
  );
};
export default Bar;
