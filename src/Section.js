import React from "react";
import styled from "styled-components";
import { useState, useEffect, useRef } from "react";
import { gsap } from "gsap";

const Sections = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  width: 100%;
  height: 100vh;
  background-color: ${(props) => props.color};
  position: relative;
`;

const ImgContainer = styled.div`
  display: flex;
  justify-content: center;
  width: 500px;
  height: 600px;
  /* overflow: hidden; */
  text-align: center;
`;

const Section = (props) => {
  const [position, setPosition] = useState({
    x: 0,
    y: 0,
  });
  const ref = useRef(null);

  const handleHover = (e) => {
    setPosition({
      x: e.screenX,
      y: e.screenY,
    });
  };
  //animation

  //attach position fetcher onLoad
  useEffect(() => {
    document.addEventListener("mousemove", handleHover);
    return () => document.removeEventListener("mousemove", handleHover);
  }, []);

  useEffect(() => {
    console.log(position);
  }, []);
  const animation = () => {
    gsap.to(ref.current, 2, {
      x: position.x - window.innerWidth / 2,
      y: position.y - window.innerHeight / 2,
    });
  };

  return (
    <>
      {" "}
      <Sections color={props.color}>
        <ImgContainer>
          {" "}
          <img onMouseMove={animation} ref={ref} src={props.pic} alt=''></img>
        </ImgContainer>
        {position.x - window.innerWidth / 2}
      </Sections>
    </>
  );
};

export default Section;
