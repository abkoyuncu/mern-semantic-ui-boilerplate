import React from 'react';
import {Container,  Segment, Input } from 'semantic-ui-react';
import axios from "axios";
import { ToastContainer, toast } from 'react-toastify';
import SaveClearButtonsMenu from '../FormComponents/SaveClearButtonsMenu';
import Title from '../FormComponents/Title';
import LoaderDimmer from '../FormComponents/LoaderDimmer';

class CreateTeam extends React.Component{
  constructor(props) {
    super(props);
    this.state = {
      name: '',
      year: '',
      isLoading: false
    };

    this.handleNameChange = this.handleNameChange.bind(this);
    this.handleYearChange = this.handleYearChange.bind(this);

    this.clearForm=this.clearForm.bind(this);
    this.create = this.create.bind(this);

  }

  handleNameChange (e) {
    this.setState({name: e.target.value});
  };

  handleYearChange (e) {
    this.setState({year: e.target.value});
  };



  clearForm() {
    this.setState ({
      name: '',
      year: '',
    });
  };



  create() {
    let requestBody = {
      name : this.state.name,
      year: this.state.year,
    };

    this.setState({
      isLoading:true
    });

    axios.post('/api/teams',requestBody)
      .then(res => {
        this.setState({
          isLoading:false
        });
        this.clearForm();
        toast.success(`Team has been created: ${res.data.name} `, {
          position: toast.POSITION.TOP_CENTER
        });
      }).catch(error => {
      this.setState({
        isLoading:false
      });
      toast.error(`An error occured : ${error} `, {
        position: toast.POSITION.TOP_CENTER
      });
    });
  };


  render() {
    return (
      <div>
        <LoaderDimmer loading={this.state.isLoading}/>
        <Container text style={{ marginTop: '5em' }}>
          <Title title='Create Football Team' iconName='soccer'/>
          <Segment raised>
            <Container textAlign='center'>
              <Input placeholder='Football Team Name' value={this.state.name} onChange={this.handleNameChange} icon='write square' iconPosition='right' size='large'/>
            </Container>
            <br/>
            <Container textAlign='center'>
              <Input placeholder='Foundation Year' type='number' value={this.state.year} onChange={this.handleYearChange} icon='dashboard' iconPosition='right' size='large' />
            </Container>
            <br/>
            <SaveClearButtonsMenu save={this.create} clear={this.clearForm}/>
          </Segment>
        </Container>
        <ToastContainer autoClose={8000} />
      </div>
    );
  }

}

export default CreateTeam;
