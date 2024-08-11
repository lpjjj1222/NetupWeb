import React from "react";
import styled from "styled-components";
import Colors from "../styles/Colors";
import "../styles/preview.css";

const WrapperContainer = styled.div<{ bgColor: string }>`
  background-color: ${(props) => props.bgColor};
  display: flex;
  flex-direction: column;
  height: 100vh;
`;

const Header = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  padding: 2% 0;
  border-bottom: 1px solid #ccc;
  background-color: ${Colors.pink};
`;

const Footer = styled.div`
  display: flex;
  flex-direction: row;
  align-items: center;
  justify-content: space-between;
  padding: 16px 0;
  border-top: 1px solid #ccc;
  background-color: ${Colors.white};
  margin-top: auto;
  height: 10%;
  color: ${Colors.appColorPrimary};
`;

const EventPreview = () => {
  return (
    <WrapperContainer bgColor={Colors.white}>
      <Header>
        <h1>Event Preview</h1>
      </Header>
      <Footer>
        <div>
          <p>Event Name</p>
          <p>Event Description</p>
        </div>
      </Footer>
    </WrapperContainer>
  )
};

export default EventPreview;