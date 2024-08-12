import React from "react";
import styled from "styled-components";
import Colors from "../styles/Colors";
import "../styles/preview.css";
import SwipeableTextMobileStepper from "./user-card";
import { useEffect } from "react";

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
  padding: 2% 0;
  height: 100px;
  border-bottom: 1px solid #ccc;
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
  border-top: 1px solid #ccc;
  background-color: ${Colors.white};
  position: fixed;
  bottom: 0;
  height: 8%;
  width: 100%;
  color: ${Colors.appColorPrimary};
  padding: 1% 0;
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
  const link = `netup://global-link/user/${userId}`;
  return (
    <WrapperContainer>
      <button>
        <a href={link}>GO</a>
      </button>
      <Header>
        <HeaderText className="font18BlackBold">Account</HeaderText>
      </Header>
      <div style={{display:'flex',justifyContent:'center',alignContent:'center'}}>
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
            justifyContent: "space-around",
            width: "28%",
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
            <div style={{width: 20, height: 20 }}>
              <Image
                src={"/images/preview/followPerson.png"}
                alt="Follow"
                width="100%"
                height="100%"
              />
            </div>
            <span style={{color: Colors.greyText, fontSize:'0.8rem'}}>Follow</span>
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
            <div style={{ width: 15, height: 15 }}>
              <Image
                src={"/images/preview/share.png"}
                alt="Share"
                width="100%"
                height="100%"
              />
            </div>
            <span style={{color: Colors.greyText,fontSize:'0.8rem'}}>Share</span>
          </Button>
        </div>
        <Button
          className="gradient-button"
          onClick={() => {}}
          style={{
            width: "50%",
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
