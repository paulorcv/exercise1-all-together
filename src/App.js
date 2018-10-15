import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';

/*
This exercise will help you put together and practice all of the concepts you've
learned thus far. It will also help you form a strong foundational knowledge of
React and prepare you for your first project.

The instructions for this project are located in the `instructions.md` file.
*/

const users = [
  {
    username: 'paulorcv',
    firstName: 'Paulo',
    lastName: 'Campos',
    numberOfGames: 1
  },
  {
    username: 'tatuzim',
    firstName: 'Tatu',
    lastName: 'Bolinha',
    numberOfGames: 1
  },
  {
    username: 'tonim',
    firstName: 'Antonio',
    lastName: 'Carlos',
    numberOfGames: 2
  },

];

const user = {
  userName: 'amorinha',
  firstName: 'Amora',
  lastName: 'Maria',
  numberOfGames: 0
}

class App extends Component {
  render() {
    return (
      <div className="App">
        <header className="App-header">
          <img src={logo} className="App-logo" alt="logo" />
          <h1 className="App-title">ReactND - Coding Practice</h1>
        </header>
        <div className='FormUser'>
          <p>
          <input type='text'
                 placeholder='Enter username...'
                 value={user.userName} />
          </p>
          <p>
          <input type='text'
                 placeholder='Enter First Name...'
                 value={user.firstName} />
          </p>      
          <p>
          <input type='text'
                 placeholder='Enter Last Name...'
                 value={user.lastName} />
          </p>              
          <p>
            <button>ADD</button>
          </p>
        </div>

        <div className='UsersGamesList'>
          <h2>Users</h2>
          <ol>
            {users.map(user=>(
              <li><b>{user.username}</b> has played 0 games</li>
            ))}
            
          </ol>  
        </div>

      </div>
    );
  }
}

export default App;
