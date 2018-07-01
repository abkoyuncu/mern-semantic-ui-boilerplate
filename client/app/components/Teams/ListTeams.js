import React from 'react';
import {Container , Icon, Table } from 'semantic-ui-react';
import axios from "axios";
import { ToastContainer, toast } from 'react-toastify';
import map from 'lodash/map';
import Title from '../FormComponents/Title';
import LoaderDimmer from '../FormComponents/LoaderDimmer';

class ListTeams extends React.Component{
  constructor(props) {
    super(props);
    this.state = {
      teamData: [],
      isLoading: true
    }
  }

  componentDidMount() {
    this.getTeams();
  }


  getTeams() {
    axios.get('/api/teams')
      .then(res => {
        this.setState({
          teamData: res.data,
          isLoading: false
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

          <Title iconName='list layout' title='List of Football Teams'/>

          <Table textAlign='center' celled striped singleLine={true}>
            <Table.Header >
              <Table.Row>
                <Table.HeaderCell colSpan='1'>Team Name</Table.HeaderCell>
                <Table.HeaderCell colSpan='1'>Foundation Year</Table.HeaderCell>

              </Table.Row>
            </Table.Header>

            <Table.Body  >
              {map(this.state.teamData, team => {
                return(
                  <Table.Row>
                    <Table.Cell textAlign='left' >
                      <Icon name='soccer' /> {team.name}
                    </Table.Cell>
                    <Table.Cell>{team.year}</Table.Cell>
                  </Table.Row>
                );
              })}
            </Table.Body>
          </Table>
        </Container>
        <ToastContainer autoClose={8000} />
      </div>
    );
  }

}

export default ListTeams;
