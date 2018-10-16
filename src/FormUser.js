import React, {Component} from 'react'
import PropTypes from 'prop-types'


class FormUser extends Component{

    state = {
        user: {
            firstName: '',
            lastName: '',
            username: '',
          },
    }

    static propTypes = {
        addUser: PropTypes.func.isRequired,
      }

    constructor(props){
        super(props);
        this.handleInput = this.handleInput.bind(this);

    }

    handleInput = event => {
        const { name, value } = event.target;

        this.setState(currState => ({
          ...currState,
          user: {
            ...currState.user,
            [name]: value,
          },
        }));
      };

    isAnyInputEmpty = () => {
        return  this.state.user.username === '' ||
                this.state.user.firstName === '' ||
                this.state.user.lastName === '' 

    }

    handleSubmit = event => {
        event.preventDefault();
        const user = this.state.user;
        this.props.addUser(user);

    }

    render(){
        return(
        <div className='FormUser'>
            <form onSubmit={this.handleSubmit}>
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
             <button disabled={this.isAnyInputEmpty()}>Add</button>
            </p>
            </form>
        </div>
  
        )
    }
}

export default FormUser;