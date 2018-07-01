import React from 'react';
import {Container , Header } from 'semantic-ui-react';

const Landing = () => (
<div>
    <Container text style={{ marginTop: '7em' }}>

      <Header as='h1'>MERN BOILERPLATE</Header>
      <p>Thanks to boilerplate you can start your MERN based project easily.</p>
      <p> Technologies used in this boilerplate: ReactJS, MongoDB, Express.js , node.js , ES6+. Semantic React components are used in the application.</p>
      <p>For SEMANTIC UI REACT documentation: https://react.semantic-ui.com/ </p>
      <p> Create a Football team with name and year of foundation in Create page. Check it in the list after creating.</p>

    </Container>
  </div>
);

export default Landing;
