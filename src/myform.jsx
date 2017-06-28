import React, { Component } from 'react';
import AppBar from 'material-ui/AppBar'

import {Card, CardActions, CardTitle, CardText} from 'material-ui/Card';
import RaisedButton from 'material-ui/RaisedButton';

import './myform.css'
import SelectField from 'material-ui/SelectField';
import MenuItem from 'material-ui/MenuItem';

class MyForm extends Component {
  constructor (props) {
    super(props);
    this.state = {name: '',
      color: 'blue'}
  }
  // update_name(event) {
  //   console.log(event);
  //   this.setState({name: event.target.value});
  // }
  // update_color(event) {
  //   console.log(event);
  //   this.setState({color: event.target.value});
  // }
  update_state (event, key) {
    this.setState({[key]: event.target.value});
  }

  update_select = (event, index, value) => {
    this.setState({color: value});
  }

  handleSubmit (event) {
    console.log('submitted: ', this.state)
    event.preventDefault();
  }

  render () {
    return(
      <div>
        <AppBar title="My Awesome Form" />
        <form onSubmit={event => this.handleSubmit(event)}>
          <Card className="md-card">
          <CardTitle title="My Form" subtitle="subtitle"/>
          <CardText>
          <label>Your Name</label>
            <input type="text" value={this.state.name} onChange={event => this.update_state(event, 'name')}/>
            <br/><br/>
            <SelectField
                floatingLabelText="Color"
                value={this.state.color}
                onChange={this.update_select}
              >
              <MenuItem value="red" primaryText="Red" />
              <MenuItem value="blue" primaryText="Blue" />
            </SelectField>
          </CardText>
          <CardActions>
            <RaisedButton label="Submit" type="submit" primary={true}/>
          </CardActions>
          </Card>
        </form>
      </div>
    )
  }
}

export default MyForm
