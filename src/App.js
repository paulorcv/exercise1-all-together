import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';
import FormUser from './FormUser';
import UsersGames from './UsersGames';

/*
This exercise will help you put together and practice all of the concepts you've
learned thus far. It will also help you form a strong foundational knowledge of
React and prepare you for your first project.

The instructions for this project are located in the `instructions.md` file.
*/

class App extends Component {

  state = {
    users: [],
    msg: ''
  }

  constructor(props){
    super(props);
    this.addUser = this.addUser.bind(this);
  }

  addUser = user => {
    console.log('--Add User---');
    console.log(user);

    if( this.existsUser(user)){
      this.setState({
         msg:  user.username + ' already exists!' 
      });
    }else{

      user.numberOfGames = 0;
      this.setState(currState => ({
        users: [...currState.users, user],
        msg: user.username + ' added!'
      }));
    }
  }; 

  existsUser = currentUser => {

    for(let user of this.state.users){
      if(currentUser.username.toLowerCase() === user.username.toLowerCase())
        return true;
    }
        return false;
  }



  render() {
    return (
      <div className="App">
        <header className="App-header">
          <img src={logo} className="App-logo" alt="logo" />
          <h1 className="App-title">ReactND - Coding Practice</h1>
        </header>
        <FormUser addUser={this.addUser}/>
        <p><strong>{this.state.msg}</strong></p>
        <UsersGames users={this.state.users} />

      </div>
    );
  }
}

export default App;
