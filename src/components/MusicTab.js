import React, { Component } from "react";
import { withStyles } from "@material-ui/styles";
import {
  DialogContentText,

  List,
  ListItem,
  ListItemText,
  ListItemSecondaryAction,
  IconButton,
} from "@material-ui/core";

import MicIcon from '@material-ui/icons/Mic';
import { Icon } from '@iconify/react';

import spotifyIcon from '@iconify/icons-mdi/spotify';
import youtubeIcon from '@iconify/icons-mdi/youtube'

import ToolTip from "@material-ui/core/ToolTip";

const startSpotifyOpen = 'spotify:playlist:4unLwJUfWzRPTpxpm5fykk'
const startSpotifyUrl = 'https://open.spotify.com/playlist/4unLwJUfWzRPTpxpm5fykk?si=xQzJ02xxSjatVpAdbelzKw'

const endSpotifyUrl = 'https://open.spotify.com/playlist/2sE9oXLF5FjKsh5mlGYjAj?si=OsyVceoUTxiQRcxNjGVRmw'
const endSpotifyOpen = 'spotify:playlist:2sE9oXLF5FjKsh5mlGYjAj'

const defaultSpotifyUrl = 'https://open.spotify.com/playlist/7nzDFNMfi9qMODQrWAfZp8?si=OhNdaExnRCKaAeadIabAdw'
const CBtEMV = 'https://www.youtube.com/watch?v=VzAjXdBJsEc'

const henryBaker = 'https://www.youtube.com/watch?v=wJfMQv37PzI'
const henryBakerTed = 'https://www.youtube.com/watch?v=cxGWGohIXiw'

const dissectPodcast = 'https://www.stitcher.com/podcast/city-scout/dissect/e/54766676'

const styles = theme => {};

//Math is playing with numbers, poetry is playing with words. Here's my favorite poet (also a Math major)
//https://boosteria.org/guides/what-is-elo-boost-definition

class MusicTab extends Component {
  render() {
    return (
      <div>

        <DialogContentText>
            I do not have a defined taste, but I guess that's the American experience.
            <br></br>
            I naturally gravitated towards Rap given my environment.
            <br></br> 
            To distract myself from the monotony of MMORPG grinding as a kid, I grew towards lyricism, wordplay, and story-telling rather than the beat.
            <br></br>
            As an Asian-American, I had a rebellious, alternative-rock skater phase while also having pop and boy bands as my guilty pleasure.
            <br></br>
            Despite my major, History and English have always been my favorite subjects. I love poetry, mainly spoken word & haikus.
            <br></br>
            From ELO boosting and attempts to play professionally, I learned that I can enter the state of flow easiest when listening to songs without lyrics.
        </DialogContentText>
        
        <List>
          <ListItem button component="a" href={startSpotifyUrl}>
            <ListItemText primary="I start my day up on the roof" 
            secondary= "Super Rich Kids has been my favorite song in Channel Orange since 2012. The theme of the song: leaving the TV for voices to fill an empty house, and Earl Sweatshirt's verse give me nostalgia of my childhood every morning. Learn more on the Dissect Podcast by Cole Cuchna." 
            />

            <ToolTip title='Links to DissectPodcast' >
                <IconButton href={dissectPodcast}>
                    <MicIcon />
                </IconButton>
            </ToolTip>

            <ListItemSecondaryAction>
              <ToolTip title="Open in Spotify App ">
                <IconButton aria-label="hello" edge="end" href={startSpotifyOpen}>
                  <Icon icon={spotifyIcon} />
                </IconButton>
              </ToolTip>
            </ListItemSecondaryAction>

          </ListItem>
        </List>

        <List>
          <ListItem button component="a" href={endSpotifyUrl}>
            <ListItemText primary="Do they sew wings on tailored suits?" 
            secondary="I listen to the playlist above every morning, no shuffle. This playlist is filled with LoFi beats for the end of the day when I need to focus and enter flow." 
            />
            <ListItemSecondaryAction>
              <ToolTip title="Open in Spotify App">
                <IconButton aria-label="hello" edge="end" href={endSpotifyOpen}>
                  <Icon icon={spotifyIcon} />
                </IconButton>
              </ToolTip>
            </ListItemSecondaryAction>
          </ListItem>
        </List>

        <List>
          <ListItem button component="a" href={henryBaker}>
            <ListItemText primary="59 - Henry Baker" 
             secondary="Henry Baker is a Slam Poetry Grand Champion, who is also a Math major. He's a huge reason why I switched from Chemistry to Statistics. Click here for a slam poem about Prime Numbers."
              />
            <ListItemSecondaryAction>
                <ToolTip title="Links to the his entire Ted Talk, not just the poem.">
                    <IconButton edge="end" href={henryBakerTed}>
                        <Icon icon={youtubeIcon} />
                    </IconButton>
                </ToolTip>
            </ListItemSecondaryAction>
          </ListItem>
        </List>

        <List>
          <ListItem button component="a" href={defaultSpotifyUrl}>
            <ListItemText primary="Default Playlist: The Melting Pot"
             secondary="If you really want to enter my mind, you can sort this playlist by most recently added to see what my current views on life are; I just leave this playlist on shuffle. Right now, Vienna by Billy Joel and Mac Miller resonate with me the most." 
             />
            <ListItemSecondaryAction>
              <ToolTip title="I just need a way out of my head.">
                <IconButton aria-label="hello" edge="end" href={CBtEMV}>
                  <Icon icon={youtubeIcon} />
                </IconButton>
              </ToolTip>
            </ListItemSecondaryAction>
          </ListItem>
        </List>
      </div>
    );
  }
}

export default withStyles(styles)(MusicTab);
