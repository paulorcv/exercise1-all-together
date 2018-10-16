import React, {Component} from 'react'

class FormUser extends Component{

    state = {
        user: {
            firstName: '',
            lastName: '',
            username: '',
          },
          buttonDisabled: true
    }

    constructor(props){
        super(props);
    }

    handleInput = event => {
        const { name, value} = event.target;
        this.setState({
            user: {
                [name]: value
            },
            buttonDisabled: this.isAnyInputEmpty()
        }
        );

    }

    isAnyInputEmpty = () => {
        return  this.state.user.username === '' ||
                this.state.user.firstName === '' ||
                this.state.user.lastName === '' 

    }

    render(){
        return(
            <div className='FormUser'>
            <p>
            <input type='text'
                   placeholder='Enter username...'
                   name='username'
                   value={this.state.user.userName}
                   onChange={this.handleInput} />
            </p>
            <p>
            <input type='text'
                   placeholder='Enter First Name...'
                   name='firstName'
                   value={this.state.user.firstName}
                   onChange={this.handleInput} />
            </p>      
            <p>
            <input type='text'
                   placeholder='Enter Last Name...'
                   name='lastName'
                   value={this.state.user.lastName}
                   onChange={this.handleInput} />
            </p>              
            <p>
              <button disabled={this.state.buttonDisabled} onClick={this.props.addUser(this.state.user)}>ADD</button>
            </p>
          </div>
  
        )
    }
}

export default FormUser;