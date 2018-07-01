import React from 'react';
import {Container , Menu , Dropdown } from 'semantic-ui-react';
import { NavLink } from "react-router-dom";

const headerLinks = {
  color: 'black'
};

const Header = () => (
  <header>
    <Menu color='black' fixed='top' inverted>
      <Container>
        <Menu.Item as='a' header>
          MERN - ABK BOILERPLATE</Menu.Item>
        <Menu.Item as='a'>
          <NavLink  to="/">
            Home Page
          </NavLink>
        </Menu.Item>

        <Dropdown item simple text='Football Teams'>
          <Dropdown.Menu>
            <NavLink  to="/CreateTeam">
            <Dropdown.Item style={headerLinks}>
              Create Football Team   </Dropdown.Item>
            </NavLink>
            <NavLink  to="/ListTeams">
              <Dropdown.Item style={headerLinks}>
                List Football Teams   </Dropdown.Item>
            </NavLink>
          </Dropdown.Menu>
        </Dropdown>

      </Container>
    </Menu>
  </header>
);

export default Header;
