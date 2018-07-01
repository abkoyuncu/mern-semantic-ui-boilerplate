import React from 'react';
import {Loader,Dimmer} from 'semantic-ui-react';


class LoaderDimmer extends React.Component{
  constructor(props) {
    super(props);
    this.state = {};
  }

    render(){
    return(
      <div>
        <Dimmer active={this.props.loading}/>
        <Loader active={this.props.loading} size='big'>
          Loading...
        </Loader>
      </div>
    );
    }
  }

  export default LoaderDimmer;
