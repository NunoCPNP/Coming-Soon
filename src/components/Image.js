import React from 'react'
import { useSpring, animated } from "react-spring";
import styled from "styled-components";

import soonImg from "../assets/36.png"

import { below } from "../utilities"

const Image = () => {

  const props = useSpring({
    from: { transform: "translate3d(0, -500px, 0)" },
    transform: "translate3d(0, 0, 0)",
    config: { friction: 10 },
  })

  return (
    <animated.div style={props}>
      <StyledImg src={soonImg} alt="Soon" />
    </animated.div>
  )
}

export default Image;

const StyledImg = styled.img`
  ${below.med`
    width: 300px;
  `};

  ${below.small`
    width: 200px;
  `}
`;