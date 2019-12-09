import React, { Component } from 'react'
import {Form, FormGroup, Label, Input} from 'reactstrap';

class CityFilter extends Component {
  constructor(props) {
    super(props)
    this.state = {
      cityFilter: ""
    }
  }

  handleChange = (e) => {
    this.setState({ cityFilter: e.target.value })
    this.props.onChange(e.target.value)
  }

  render() {
    return (
      <div>
        <Form>
          <FormGroup>
            <Label htmlFor="filter">Filter by City: </Label>
            <Input type="text" id="filter"
              value={this.state.cityFilter}
              onChange={this.handleChange} />
          </FormGroup>
        </Form>
      </div>
    )
  }
}

export default CityFilter