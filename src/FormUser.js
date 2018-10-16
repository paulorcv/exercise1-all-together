import React, {Component} from 'react'

class FormUser extends Component{
    
    state = {
        user: {
            firstName: '',
            lastName: '',
            username: '',
          },
    }

    constructor(props){
        super(props);
    }

    handleInput = event => {
        const { name, value} = event.target;
        this.setState({
            user: {
                [name]: value
            }
        }
        );

    }

    isAnyInputEmpty = () => {
        return  this.state.user.username === '' ||
                this.state.user.firstName === '' ||
                this.state.user.lastName === '' 

    }

    render(){

        const user = this.state.user;

        return(
            <div className='FormUser'>
            <p>
            <input type='text'
                   placeholder='Enter username...'
                   name='username'
                   value={user.userName}
                   onChange={this.handleInput} />
            </p>
            <p>
            <input type='text'
                   placeholder='Enter First Name...'
                   name='firstName'
                   value={user.firstName}
                   onChange={this.handleInput} />
            </p>      
            <p>
            <input type='text'
                   placeholder='Enter Last Name...'
                   name='lastName'
                   value={user.lastName}
                   onChange={this.handleInput} />
            </p>              
            <p>
              <button disabled={this.isAnyInputEmpty()}>ADD</button>
            </p>
          </div>
  
        )
    }
}

export default FormUser;