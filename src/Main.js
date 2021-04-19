import React from "react";
import styled from "styled-components";
import { gsap } from "gsap";
import Section from "./Section";
import pic1 from "./assets/pic1.jpg";
import pic2 from "./assets/pic2.jpg";

const MainSection = styled.div`
  width: 100%;
  height: auto;
`;

const Main = () => {
  return (
    <>
      <MainSection>
        <Section pic={pic1} color={"burlywood"}></Section>
        <Section pic={pic2} color={"#0d0d0d"}></Section>
      </MainSection>
    </>
  );
};

export default Main;
