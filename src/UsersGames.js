import React, {Component} from 'react';


class UsersGames extends Component{

    constructor(props){
        super(props);
        this.users = props.users;
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
          </div>            
        )
    }

}

export default UsersGames;