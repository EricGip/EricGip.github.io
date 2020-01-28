import React, { Component } from "react";
import { withStyles } from "@material-ui/styles";
import {
  DialogTitle,
  DialogContent,
  DialogContentText
} from "@material-ui/core";

const styles = theme => ({
  topText: {
    textAlign: "center"
  }
});

class AboutTab extends Component {
  render() {
    const { classes } = this.props;

    return (
      <div style={{ flex: "1 1 auto" }}>
        <DialogTitle className={classes.topText}>
          Welcome to my page
        </DialogTitle>

        <DialogContent>
          <DialogContentText>
            I am a Senior Year Statistics, Economics Major at UC Davis.
            Self-taught Software Engineer interested in DevOps / Cloud
            Technology, AI / Machine Learning, and Full Stack Web Development.
          </DialogContentText>

          <DialogContentText>
            In my 22 years of life, the most valuable skill I gained is how to
            learn.
            <br></br>
            The most important lesson I learned is that you can't do it on all
            your own.
          </DialogContentText>

          <DialogContentText>
            If you're a wanderer or feeling lost in life, check out Books,
            Music, eSports;
            <br></br>I share my experience here in hopes that it reaches someone
            who needs it.
            <br></br>
            If you're a recruiter or employer, check out Projects!
          </DialogContentText>

          <DialogContentText>
            The best way to contact me would be through email ejgip@ucdavis.edu.
            <br></br>
            Thank you for visiting my page! Feel free to inspect the source
            code!
          </DialogContentText>
        </DialogContent>
      </div>
    );
  }
}

export default withStyles(styles)(AboutTab);
