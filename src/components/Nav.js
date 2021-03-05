import React from 'react';
import {NavLink} from 'react-router-dom';

const Nav = () => {
    return (
        <nav className="nav">
            <h1> 
                <img class="icon" src="https://static.thenounproject.com/png/27637-200.png" alt=""/> 
                <img class="icon" src="https://static.thenounproject.com/png/872909-200.png" alt=""/> 
                <NavLink exact to="/home" style={{ textDecoration: 'none' }}>AnalogueDream</NavLink>
            </h1>
            <NavLink exact to="/drum-machines">Drum Machines</NavLink>
            <NavLink exact to="/synthesizers">Synthesizers</NavLink>
            <a href="#cart">Cart</a>
        </nav>
    )
}

export default Nav