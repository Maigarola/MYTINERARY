import React, { Component } from 'react'


import {loadUser} from '../store/actions/authAction'
import store from '../store'

class Users extends Component {
    
  componentDidMount() {
    store.dispatch(loadUser());
  }
    render() {
        return (
            <div> </div>
        )
    }
}

export default Users;