import React from "react";
import { animated } from "react-spring";
import styled from "styled-components";
import { sideLink } from "./config";
import { X } from "react-feather";
import { Helmet } from "react-helmet";

const Wrapper = styled.div`
  position: fixed;
  width: min(60vw, 350px);

  @media (max-width: 768px) {
    width: min(55vw, 400px);
  }

  @media (max-width: 480px) {
    width: min(60vw, 400px);
  }
`;

const SideBarWrapper = styled.div`
  list-style: none;
  background-color: var(--light-navy);
  height: 100vh;
  border: 0;

  div {
    text-align: right;
    padding: 30px 30px;
    cursor: pointer;
  }

  li {
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
    font-family: var(--font-sans);
    color: var(--lightest-slate);
    line-height: 100px;
    font-size: 30px;
  }
`;

interface PropTypes {
  animatedSidebar: any;
  toogle: boolean;
  toggleSideBar: (event: React.MouseEvent<HTMLDivElement, MouseEvent>) => void;
}

const Sidebar: React.FC<PropTypes> = ({
  animatedSidebar,
  toggleSideBar,
  toogle,
}) => {
  return (
    <>
      <Wrapper>
        <Helmet>
          <body className={toogle ? "blur" : ""} />
        </Helmet>
        <animated.div style={animatedSidebar}>
          <SideBarWrapper>
            <div onClick={(event) => toggleSideBar(event)}>
              <X color="#fff" />
            </div>
            {sideLink.map((link: any) => (
              <li key={link.id}>{link.name}</li>
            ))}
          </SideBarWrapper>
        </animated.div>
      </Wrapper>
    </>
  );
};

export default Sidebar;