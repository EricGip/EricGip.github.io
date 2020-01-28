import React, { Component } from "react";
import {
  createMuiTheme,
  withStyles,
  MuiThemeProvider
} from "@material-ui/core/styles";
import teal from "@material-ui/core/colors/teal";
import pink from "@material-ui/core/colors/pink";

import hacker from "./images/hacker.gif";
import moonlightwave from "./images/moonlightwave.gif";
import lazysundays from "./images/lazysundays.gif";
import shoes from "./images/shoes.gif";

import Display from "./Display";
import { Hidden } from "@material-ui/core";

const theme = createMuiTheme({
  palette: {
    primary: teal,
    secondary: pink
  },

  typography: {
    useNextVariants: true
  }
});

const styles = theme => ({
  background: {
    minHeight: `100vh`,
    backgroundRepeat: "no-repeat",
    backgroundSize: "cover",
    backgroundPosition: "center"
  }
});

class App extends Component {
  // eslint-disable-next-line no-useless-constructor
  constructor(props) {
    super(props);
  }

  getRandomBackground = () => {
    const chosenIndex = Math.floor(
      Math.random() * Math.floor(this.backgrounds.length)
    );
    return chosenIndex;
  };
  onClickChangeBackground = () => {
    const newChosenIndex = Math.floor(
      Math.random() * Math.floor(this.backgrounds.length)
    );
    if (newChosenIndex !== this.state.currentIndex) {
      this.setState({ currentIndex: newChosenIndex });
    } else {
      this.onClickChangeBackground();
    }
  };

  backgrounds = [hacker, moonlightwave, lazysundays, shoes];

  state = {
    currentIndex: this.getRandomBackground()
  };

  render() {
    const { classes } = this.props;
    const { currentIndex } = this.state;
    return (
      
      <MuiThemeProvider theme={theme}>
        <Hidden only="xs">
          <div
            className={classes.background}
            style={{
              backgroundImage: `url(${this.backgrounds[currentIndex]})`
            }}
          >
            <Display />
          </div>
        </Hidden>
        <Hidden only={["sm", "md", "lg", "xl"]}>
          <Display />
        </Hidden>
      </MuiThemeProvider>
    );
  }
}

export default withStyles(styles)(App);
