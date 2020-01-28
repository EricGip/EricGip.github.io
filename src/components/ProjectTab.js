import React, { Component } from "react";
import {
  withStyles,
  DialogContentText,
  List,
  ListItem,
  ListItemText,
  ListItemSecondaryAction,
  IconButton
} from "@material-ui/core";

import GitHubIcon from "@material-ui/icons/GitHub";

import ToolTip from "@material-ui/core/ToolTip";

const Portfolio = 'https://github.com/EricGip/EricGip.github.io'
const DevPost = 'https://github.com/EricGip/MHConnect'
const PiHole = 'https://github.com/EricGip/probable-pihole'
const VR = 'https://github.com/EricGip/vrportfolio'

const styles = theme => {};

//to do, link hrefs into the iconbutton

class ProjectTab extends Component {
  render() {
    return (
      <div>
        <DialogContentText>
          I majored in Statistics for Machine Learning because of the impact I
          could make. To manage the large datasets required for data science, I
          learned about data lakes in the cloud and found interest in DevOps &
          AWS certifications. After an IT position, I realized building would
          create more impact than analyzing at my current age. With some
          guidance from my fraternity's alumni, I learned that I wasn't far off
          from a Software Engineer.
        </DialogContentText>

        <DialogContentText>
          I am currently seeking to begin my Software Engineering career so I
          will be trying to showcase generalist projects to show that I
          understand the whole picture and have no problem learning new
          technology.
          <br></br>
          Other projects will be on my GitHub or covered in future blog posts.
        </DialogContentText>

        <List>
          <ListItem>
            <ListItemText
              primary="This site"
              secondary="Created with React & Material-UI. From this project, I learned much more about front-end and DOM. Currently working on a larger Django + React project."
            />
            <ListItemSecondaryAction>
              <ToolTip title="Links to GitHub">
                <IconButton aria-label="hello" edge="end" button component="a" href={Portfolio}>
                  <GitHubIcon />
                </IconButton>
              </ToolTip>
            </ListItemSecondaryAction>
          </ListItem>
        </List>

        <List>
          <ListItem>
            <ListItemText
              primary="HackDavis 2020"
              secondary="MHConnect -- Connecting psychiatrist to those in need. I mentored and lead a team of nontechnical majors through the whole app development process. In these 24 hours I was the sole developer and managed the full stack. I was able to connect a GCP database backend to a ReactJS front end and we also have an unused ReactNative MVP."
            />
            <ListItemSecondaryAction>
              <ToolTip title="Links to GitHub">
                <IconButton aria-label="hello" edge="end" button component="a" href={DevPost}>
                  <GitHubIcon />
                </IconButton>
              </ToolTip>
            </ListItemSecondaryAction>
          </ListItem>
        </List>

        <List>
          <ListItem>
            <ListItemText
              primary="Raspberry Pi Kubernetes Cluster"
              secondary="I've always been interested in hardware and RPI's seemed like a good introduction. Master with 3 slave nodes to easily manage docker images. Check out how I found out my housemates and I have been DDoSing ourselves for a whole year with our own IoT devices with a quick Docker pull."
            />
            <ListItemSecondaryAction>
              <ToolTip title="Links PiHole project">
                <IconButton aria-label="hello" edge="end"  button component="a" href={PiHole}>
                  <GitHubIcon />
                </IconButton>
              </ToolTip>
            </ListItemSecondaryAction>
          </ListItem>
        </List>

        <List>
          <ListItem>
            <ListItemText
              primary="VR Webpage/Gallery"
              secondary="After the RPi project, I was much more familiar with hardware and decidided to try out a frontend project with an Oculus Quest. My girlfriend runs a small GameCube designing business and the main clientelle is from comissions. By creating an interactive and immersive gallery of her previous work, we were able to catch the attention of gamers and gain more commmissions."
            />
            <ListItemSecondaryAction>
              <ToolTip title="Links to GitHub where there is a Demo">
                <IconButton aria-label="hello" edge="end" button component="a" href={VR}>
                  <GitHubIcon />
                </IconButton>
              </ToolTip>
            </ListItemSecondaryAction>
          </ListItem>
        </List>

        <List>
          <ListItem>
            <ListItemText
              primary="Offensive Security Researcher"
              secondary="I feel like this job was made for me given my freelancing experience with ELO Boosting and my previous Info Security, Risk Analyst position. After working with JS, HTML, and CSS, I combined my coding knowledge with BURP Suite, launched my first XSS attack, and fell in love with Offensive Sec. While I am still very new, I am currently studying hard in hopes of my first big bounty."
            />
          </ListItem>
        </List>
      </div>
    );
  }
}

export default withStyles(styles)(ProjectTab);
