import React, { Component } from "react";

import { withStyles } from "@material-ui/core/styles";
import {
  Dialog,
  DialogTitle,
  // eslint-disable-next-line no-unused-vars
  DialogContentText,
  DialogContent,
  Divider,
  BottomNavigation,
  BottomNavigationAction
} from "@material-ui/core";
import EmojiEmotionsOutlinedIcon from "@material-ui/icons/EmojiEmotionsOutlined";
import BookIcon from "@material-ui/icons/Book";
import CodeIcon from "@material-ui/icons/Code";
import QueueMusicIcon from "@material-ui/icons/QueueMusic";
import SportsEsportsIcon from "@material-ui/icons/SportsEsports";

import AboutTab from "./components/AboutTab";
import BooksTab from "./components/BooksTab";
import MusicTab from "./components/MusicTab";
import ProjectsTab from "./components/ProjectTab";
import GamingTab from "./components/GamingTab";

import Typography from "@material-ui/core/Typography";
import { Hidden } from "@material-ui/core";

const styles = theme => ({
  title: {
    textAlign: "center"
  },

  quote: {
    marginTop: `${theme.spacing.unit}px`
  }
});

class Display extends Component {
  constructor(props) {
    super(props);

    this.state = {
      selectedTab: 0
    };
  }

  changeTab = (event, value) => {
    this.setState({
      selectedTab: value
    });
  };

  render() {
    const { classes } = this.props;
    const { selectedTab } = this.state;

    return (
      <div>
        <Hidden only="xs">
          <Dialog open>
            <DialogTitle className={classes.title}>
              Eric Gip
              <Typography variant="body2">
                All men’s miseries derive from not being able to sit in a quiet
                room alone - Blaise Pascal
              </Typography>
            </DialogTitle>

            <Divider />

            {selectedTab === 0 && <AboutTab />}

            {(selectedTab === 2 ||
              selectedTab === 4 ||
              selectedTab === 6 ||
              selectedTab === 8) && (
              <DialogContent>
                {selectedTab === 2 && <BooksTab />}
                {selectedTab === 4 && <ProjectsTab />}
                {selectedTab === 6 && <MusicTab />}
                {selectedTab === 8 && <GamingTab />}
              </DialogContent>
            )}

            <BottomNavigation
              onChange={this.changeTab}
              showLabels
              selectedvalue={selectedTab}
            >
              <BottomNavigationAction
                icon={<EmojiEmotionsOutlinedIcon />}
                label="About"
              />
              <Divider orientation="vertical" />
              <BottomNavigationAction icon={<BookIcon />} label="Books" />
              <Divider orientation="vertical" />
              <BottomNavigationAction icon={<CodeIcon />} label="Projects" />
              <Divider orientation="vertical" />
              <BottomNavigationAction icon={<QueueMusicIcon />} label="Music" />
              <Divider orientation="vertical" />
              <BottomNavigationAction
                icon={<SportsEsportsIcon />}
                label="eSports"
              />
            </BottomNavigation>
          </Dialog>
        </Hidden>

        <Hidden only={["sm", "md", "lg", "xl"]}>
          <Dialog fullScreen open>
            <DialogTitle className={classes.title}>
              Eric Gip
              <Typography variant="body2" className={classes.quote}>
                {" "}
                All men’s miseries derive from not being able to sit in a quiet
                room alone - Blaise Pascal
              </Typography>
            </DialogTitle>

            <Divider />

            {selectedTab === 0 && <AboutTab />}

            {(selectedTab === 2 ||
              selectedTab === 4 ||
              selectedTab === 6 ||
              selectedTab === 8) && (
              <DialogContent>
                {selectedTab === 2 && <BooksTab />}
                {selectedTab === 4 && <ProjectsTab />}
                {selectedTab === 6 && <MusicTab />}
                {selectedTab === 8 && <GamingTab />}
              </DialogContent>
            )}

            <BottomNavigation
              onChange={this.changeTab}
              showLabels
              selectedvalue={selectedTab}
            >
              <BottomNavigationAction
                icon={<EmojiEmotionsOutlinedIcon />}
                label="About"
                className={classes.title}
              />
              <Divider orientation="vertical" />
              <BottomNavigationAction icon={<BookIcon />} label="Books" />
              <Divider orientation="vertical" />
              <BottomNavigationAction icon={<CodeIcon />} label="Projects" />
              <Divider orientation="vertical" />
              <BottomNavigationAction icon={<QueueMusicIcon />} label="Music" />
              <Divider orientation="vertical" />
              <BottomNavigationAction
                icon={<SportsEsportsIcon />}
                label="eSports"
              />
            </BottomNavigation>
          </Dialog>
        </Hidden>
      </div>
    );
  }
}

export default withStyles(styles)(Display);
