import React from 'react';
import {Segment, Container , Grid , Header , List  } from 'semantic-ui-react';
import {
  NavLink
} from "react-router-dom";


const Footer = () => (
  <footer>
    <Segment
      inverted
      vertical
      style={{ margin: '5em 0em 0em', padding: '5em 0em' }}
      color='black'
    >
      <Container textAlign='center'>
        <Grid >
          <Grid.Row divided inverted stackable>
            <Grid.Column width={3}>
              <Header inverted as='h4' content='Football Teams' />
              <List link inverted>
                <NavLink to="/CreateTeam">  <List.Item as='a'>Create a Team</List.Item></NavLink>
                <br/>
                <NavLink to="/ListTeams"><List.Item as='a'>List Teams</List.Item></NavLink>

              </List>
            </Grid.Column>
            <Grid.Column width={5}>
              <Header inverted as='h4' content='Contact' />
              ABK - koyuncu.alibaki@gmail.com
            </Grid.Column>
          </Grid.Row>
        </Grid>

      </Container>
    </Segment>
  </footer>
);

export default Footer;
