import React from 'react';
import {Container, Divider , Icon,Button} from 'semantic-ui-react';



class SaveClearButtonsMenu extends React.Component{
  constructor(props) {
    super(props);
  }
  render()
  {
    return (
      <div>
        <Divider horizontal> Ready to Save?</Divider>
          <Container textAlign='center'>
              <Button.Group>
                <Button onClick={this.props.clear}>
                <Icon name='eraser' size='large'></Icon>
                Clear</Button>
                <Button.Or />
                <Button color='black' onClick={this.props.save}>
                <Icon name='save' size='large'></Icon>
                Save
                </Button>
            </Button.Group>
         </Container>
      </div>
    );
  }
}

export default SaveClearButtonsMenu;


