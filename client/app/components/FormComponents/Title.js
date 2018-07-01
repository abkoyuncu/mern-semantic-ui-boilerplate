import React from 'react';
import {Header , Icon} from 'semantic-ui-react';

class Title extends React.Component{
  constructor(props) {
    super(props);
  }

  render()
  {
    return (
          <div>
            <Header color='black' as='h1' textAlign='center' >
              <Icon color='black' name={this.props.iconName} textAlign='center' />
              {this.props.title}
            </Header>
      </div>
    );
  }
}

export default Title;


