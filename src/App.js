import React, { Component } from 'react';
import styled, { ThemeProvider } from "styled-components";
import { Helmet } from "react-helmet";

import GlobalStyle from './styles/Global';

import ThemeSelector from './components/ThemeSelector';
import Image from "./components/Image";
import Text from "./components/Text";

import { darkBlue, white, yellow } from "./utilities";

const themeDark = {
  colors: {
    primary: `${darkBlue}`,
    secondary: `${yellow}`,
    intermediate:`${white}`,
    extra: `${yellow}`
  }
}

const themeLight = {
  colors: {
    primary: `${white}`,
    secondary: `${darkBlue}`,
    extra: `${yellow}`
  }
}

class App extends Component {

  state = {
    addclass: false,
    darkmode: true
  }

  clickHandler = () => {
    this.setState({ addclass: !this.state.addclass, darkmode: !this.state.darkmode });
  };

  render() {
    return (
      <> 
        <GlobalStyle />
        <div onClick={this.clickHandler}>
          <ThemeSelector toggle={this.state.addclass}  />
        </div>
        <Helmet>
          <title>Nuno Pereira</title>
          <meta charSet="utf-8" />
          <meta name="description" content="" />
        </Helmet>
        <ThemeProvider theme={ this.state.darkmode ? themeDark : themeLight }>
          <Wrapper>
            <Image />
            <Text />
          </Wrapper>
        </ThemeProvider>
      </>
    );
  }
}

export default App;

const Wrapper = styled.div`
  background-color: ${props => props.theme.colors.primary};
  width: 100vw;
  height: 100vh;
  transition: 0.3s ease all;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
`;