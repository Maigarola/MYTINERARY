import React, { Component } from 'react'


import {loadUser} from '../store/actions/authAction'
import store from '../store'
import RegisterModal from './auth/RegisterModal';

class Users extends Component {
    
  componentDidMount() {
    store.dispatch(loadUser());
  }
    render() {
        return (
            <div>
                <form>
                    <label>
                        Name:
                        <input type="text" name="name" />
                    </label>
                    <input type="submit" value="Submit" />
                </form>
            </div>
        )
    }
}

export default Users;