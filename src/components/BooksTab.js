import React, { Component } from "react";
import { withStyles } from "@material-ui/styles";
import {
  DialogContentText,
  List,
  ListItem,
  ListItemText,
  ListItemSecondaryAction,
  IconButton
} from "@material-ui/core";

import { Icon } from "@iconify/react";

import amazonIcon from "@iconify/icons-fa/amazon";

import ToolTip from "@material-ui/core/ToolTip";

const ikigai = "https://www.youtube.com/watch?v=Zxj3P0enJNQ";
const mindForNumbers = "https://barbaraoakley.com/books/a-mind-for-numbers/";
const Flow =
  "https://smile.amazon.com/Flow-Psychology-Happiness-Mihaly-Csikszentmihalyi-ebook/dp/B00GO8HZIW?sa-no-redirect=1";
const AmazonHabits =
  "https://smile.amazon.com/Atomic-Habits-Proven-Build-Break/dp/0735211299?sa-no-redirect=1";
const Habits = "https://jamesclear.com/identity-votes";

const styles = theme => ({
  dialogText: {
    textAlign: "left"
  }
});

console.debug();

class BooksTab extends Component {
  render() {
    const { classes } = this.props;

    return (
      <div>
        <DialogContentText className={classes.dialogText}>
          Being from a low-income, first-generation Asian community in South
          Sacramento, I didn't have the greatest personal network from family,
          peers, or mentors for success. I lost myself in college and my felt
          like I was losing control of my future.
        </DialogContentText>

        <DialogContentText>
          My mother was taken by cancer shortly after I was born and traditional
          Chinese masculinity means your father doesn't talk to you about mental
          health. With low motivated peers and minimal parental guidance, the
          only reliable narrators in my life were from books.
        </DialogContentText>

        <DialogContentText>
          If my story resonates with you at all, these are the books & resources
          that made me realize there's more to life and learned how to find my
          sources of happiness. You just have to embrace change while your
          current friends or environment stay complacent.
        </DialogContentText>

        <List>
          <ToolTip title="Links to YouTube">
            <ListItem button component="a" href={ikigai}>
              <ListItemText
                primary="The Japanese Formula for Happiness: 'Ikigai' - Improvement Pill"
                secondary="Translating to 'A reason for being', 'The thing you live for, or 'The reason you wake up in morning'. This concept pulled me out of my hard time and gave me a reasoning to keep moving forward. I hope it can have the same value for you."
              />
            </ListItem>
          </ToolTip>
        </List>

        <List>
          <ToolTip title="Links to https://www.BarbaraOakley.com">
            <ListItem button component="a" href={mindForNumbers}>
              <ListItemText
                primary="A Mind For Numbers & Learning How to Learn - Dr. Barbara Oakley"
                secondary="My low-income high school wasn't the best. I ranked top of my class every year, but coming into Davis I was a little fish in a big pond. My peers seemed to be able to keep up with the workload easily, so there was definitely some missing fundamentals from our difference in upbringings. After reading these, I am confident in my ability to learn and achieve anything I want in life."
              />
              <ListItemSecondaryAction>
                <ToolTip title="Purchase Book on Amazon; Not an affiliate link">
                  <IconButton
                    aria-label="hello"
                    edge="end"
                    href={mindForNumbers}
                  >
                    <Icon icon={amazonIcon} />
                  </IconButton>
                </ToolTip>
              </ListItemSecondaryAction>
            </ListItem>
          </ToolTip>
        </List>

        <List>
          <ToolTip title="Links to https://www.JamesClear.com">
            <ListItem button component="a" href={Habits}>
              <ListItemText
                primary="Atomic Habits - James Clear"
                secondary="The youtuber and former Google/FaceBook TechLead said, 'What you do at 8 pm will determine where you will be in 10 years' as this quote hit me as I'm often video games or out after 7 pm. By learning how habits are formed, we're able to hack our minds to create habits that will help us achieve our goals. With these healthy habits, I will accomplish my goals of working at a FANG+ company."
              />
              <ListItemSecondaryAction>
                <ToolTip title="Purchase Book on Amazon; Not an affiliate link">
                  <IconButton aria-label="hello" edge="end" href={AmazonHabits}>
                    <Icon icon={amazonIcon} />
                  </IconButton>
                </ToolTip>
              </ListItemSecondaryAction>
            </ListItem>
          </ToolTip>
        </List>

        <List>
          <ListItem>
            <ListItemText
              primary="Flow, The Secret to Happiness - Mihaly Csikszentmihalyi"
              secondary="My life goal is to learn enough to understand this book. It is extremely dense and I will often have to search up definitions or have to reread sections, but I genuinely believe this book holds the secret to life & truly being content."
            />
            <ListItemSecondaryAction>
              <ToolTip title="Purchase Book on Amazon; Not an affiliate link">
                <IconButton aria-label="hello" edge="end" href={Flow}>
                  <Icon icon={amazonIcon} />
                </IconButton>
              </ToolTip>
            </ListItemSecondaryAction>
          </ListItem>
        </List>
      </div>
    );
  }
}

export default withStyles(styles)(BooksTab);
