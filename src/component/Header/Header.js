import React from 'react';
import { Link } from 'react-router-dom';
import { UserContext } from '../../App';
import { useContext } from 'react';
import './Header.css';


const Header = () => {
    const [loggedInUser, setLoggedInUser] = useContext(UserContext);

    return (
        <div className="header">
            <nav>
                <Link to="/shop"> Shop </Link>
                <Link to="/review"> Order Review </Link>
                <Link to="/inventory"> Manage Inventory </Link>
                <button className="header-btn" onClick={() => setLoggedInUser({})} >Sign out</button>
            </nav>
        </div>
    );
};


export default Header;


