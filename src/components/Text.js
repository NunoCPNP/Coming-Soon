import React from 'react'
import styled from "styled-components";
import { useSpring, animated } from "react-spring";

import { below } from "../utilities"

const Text = () => {

  const text = useSpring({
    from: { transform: "translate3d( 0, 30px, 0)", opacity: 0 },
    transform: "translate3d( 0, 0, 0)", opacity: 1,
    delay: 600,
    config: { friction: 4 },
  })

  const contact = useSpring({
    from: { opacity: 0 },
    opacity: 1,
    delay: 1300,
  })

  return (
    <Wrapper >
      <animated.h1 style={text}>Stay Tunned</animated.h1>
      <animated.h2 style={text}>Something new is coming soon</animated.h2>
      <animated.h5 style={contact}>hello@nunopereiradev.com</animated.h5>
    </Wrapper>
  )
}

export default Text;

const Wrapper = styled.div`
  text-align: center;

  & h1 {
    color: ${props => props.theme.colors.extra};
    font-size: 10vh;
    line-height: 40%;
    font-weight: 900;

    ${below.med`
      line-height: 90%;
    `};

    ${below.small`
      font-size: 9vh;
      line-height: 90%;
    `}
  }

  & h2 {
    color: ${props => props.theme.colors.intermediate};
    font-size: 3vh;
  }

  & h5 {
    color: ${props => props.theme.colors.secondary};
    font-size: 2vh;
  }
`;