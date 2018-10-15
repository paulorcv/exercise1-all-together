import React, {Component} from 'react';
import ButtonHideGames from './ButtonHideGames';

class UsersGames extends Component{

    constructor(props){
        super(props);
        this.users = props.users;
        this.hide = false;
    }

    render(){
        return(            
            <div className='UsersGamesList'>
            <h2>Users</h2>
            <ol>
              {this.users.map(user=>(
                <li key={user.username}><b>{user.username}</b> has played 0 games</li>
              ))}
              
            </ol>  
            <p><ButtonHideGames hide={this.hide} /></p>
          </div>            
        )
    }

}

export default UsersGames;