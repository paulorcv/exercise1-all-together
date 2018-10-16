import React from 'react';

function ButtonHideGames(props){
    const hide = props.hide;
    return(
        <button onClick={props.toggleHide}>
        {hide? 'Hide the Number of Games Played' : 'Show the Number of Games Played'}
        </button>
    )
}

export default ButtonHideGames;