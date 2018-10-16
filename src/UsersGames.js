import React, {Component} from 'react';
import ButtonHideGames from './ButtonHideGames';
import PropTypes from 'prop-types'


class UsersGames extends Component{

    state = {
        hide: true
    }

    static propTypes = {
        users: PropTypes.array.isRequired,
      }

    render(){
        return(            
            <div className='UsersGamesList'>
            <h2>Users</h2>
            <ol>
              {this.props.users.map(user=>(
                <li key={user.username}><b>{user.username}</b> has played {this.hide? '0' : user.numberOfGames} games</li>
              ))}
            </ol>  
            <p><ButtonHideGames hide={this.state.hide} /></p>
          </div>            
        )
    }

}

export default UsersGames;