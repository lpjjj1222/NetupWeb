import React from "react";
import styled from "styled-components";
import Colors from "../styles/Colors";
import "../styles/preview.css";
import SwipeableTextMobileStepper from "./user-card";

// 样式定义
const WrapperContainer = styled.div`
  background-color: ${Colors.white};
  display: flex;
  flex-direction: column;
  height: 100vh;
`;

const Header = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  padding: 1% 0;
  border-bottom: 1px solid #ccc;
  background-color: ${Colors.pink};
`;

const HeaderText = styled.h1`
  font-size: 18px;
  font-weight: bold;
`;

const Card = styled.div`
  margin: 16px 0;
  padding: 16px;
  border: 1px solid #ccc;
  border-radius: 8px;
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

const Button = styled.button`
  color: white;
  border: none;
  border-radius: 4px;
  cursor: pointer;
`;

const Image = styled.img`
  margin-right: 10px;
`;

// 组件定义
const UserPreview = ({ userId }: any) => {
  return (
    <WrapperContainer>
      <Header>
        <HeaderText className="font18BlackBold">Account</HeaderText>
      </Header>
      <div style={{display:'flex',backgroundColor:'yellow',justifyContent:'center',alignContent:'center'}}>
      <SwipeableTextMobileStepper
        userId = {userId}
      />
      </div>

      {/* <div className="hidden-scrollbar" style={{ height: '100vh', backgroundColor: "blue", overflow:"auto" }}>
        <div style={{backgroundColor:"pink", height:'200%'}}>ddd</div>
        ccccccc
      </div> */}

      <Footer>
        <div
          style={{
            display: "flex",
            flexDirection: "row",
            justifyContent: "space-between",
            width: "30%",
            marginLeft: "10%",
          }}
        >
          <Button
            onClick={() => {}}
            style={{
              marginRight: 10,
              display: "flex",
              flexDirection: "column",
              alignItems: "center",
              justifyContent: "center",
            }}
          >
            <div style={{width: 30, height: 30 }}>
              <Image
                src={"/images/preview/followPerson.png"}
                alt="Follow"
                width="100%"
                height="100%"
              />
            </div>

            <span style={{color: Colors.greyText}}>Follow</span>
          </Button>
          <Button
            onClick={() => {}}
            style={{
              marginRight: 10,
              display: "flex",
              flexDirection: "column",
              alignItems: "center",
              justifyContent: "center",
            }}
          >
            <div style={{ width: 25, height: 25 }}>
              <Image
                src={"/images/preview/share.png"}
                alt="Share"
                width="100%"
                height="100%"
              />
            </div>
            <span style={{color: Colors.greyText}}>Share</span>
          </Button>
        </div>
        <Button
          className="gradient-button"
          onClick={() => {}}
          style={{
            width: "45%",
            marginRight: "2%",
            display: "flex",
            flexDirection: "row",
            alignItems: "center",
            justifyContent: "space-between",
            padding: "1% 10%",
          }}
        >
          <Image
            src={"/images/preview/message.png"}
            alt="Message"
            width={30}
            height={30}
          />
          Message
        </Button>
      </Footer>
    </WrapperContainer>
  );
};

export default UserPreview;
