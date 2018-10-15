import React, {Component} from 'react'

class FormUser extends Component{

    constructor(props){
        super(props);
        this.user = props.user;
    }

    render(){

        const user = this.user;

        return(
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
  
        )
    }
}

export default FormUser;