import React, { Component } from "react";
import {
  DialogContentText,
  ListItemText,
  List,
  ListItem
} from "@material-ui/core";
import master from "../images/master.jpeg";

class Gaming extends Component {
  render() {
    return (
      <div>
        <DialogContentText>
          I wasn't going to add this, but gaming is my passion and I can't
          escape it.
          <br></br>
          <br></br>I began gaming at ~6-years-old, my dad would drop my brother
          and I off at a PC cafe as a pseudo day-care to play friendly MMOs like
          Maplestory.
          <br></br>
          Here, I was able to gain a competitive drive from CS 1.6 & WC3 DotA by
          scrimmming adults 3x my age.
          <br></br>I went to ghetto schools so I wasn't challenged in any of my
          classes; I would finish homework in class to min/max my gaming time.
          In this time, I studied the METAs & tried to acheive the highest rank
          in every game I played.
          <br></br>
          While my Chinese family hated my gaming addiction, it surpringly paid
          off & I can say video games got me out of the ghetto.
          <br></br>
          In 2013, I was 15-years-old at the peak of my League of Legends career
          and received a random friend request asking if I was interested in ELO
          boosting. I made the decision to focus on school and give up my dreams
          of playing professionally for this entreprenual opportunity.
          <br></br>I made over $60,000 by 16. I earned ~$30k from one summer,
          had my bank and paypal funds frozen under suspicion of laundering, and
          almost kicked out because my dad thought I was selling drugs.
          <br></br>
          From this funding, I was able to invest into BitCoin years before its
          peak in 2017 and move out + pay for college by myself.
          <br></br>I love all video games. The genre's I've hit at least top
          0.1% for are FPS, RTS, Fighting Games, and MOBAs. I also have sunk a
          good chunk of my life in MMORPGs and Mobile Gacha Games among others.
        </DialogContentText>

        <List>
          <ListItem button component="a" href={master}>
            <ListItemText
              primary="League of Legends"
              secondary="While gaming has given me life long friends from all over the world, I am still suffering from poor health decisions from my teenage gaming addiction. When I wasn't at school, I was on a customer's account playing Solo Que for an average of 16-20 hours a day and a daily 4 hours of sleep. Click here to see the evidence I would send customers who would pay me to go on their accounts & win games."
            ></ListItemText>
          </ListItem>
        </List>
      </div>
    );
  }
}

export default Gaming;
