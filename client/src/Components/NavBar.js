import React from 'react'; 

const NavBar = () => {
    return (
        <div className = "nav-bar">
            <h1>Lambda Notes</h1>
            <div className = "view">
                <p>View Your Notes</p>
            </div>
            <div className = "create">
                <p> + Create New Note </p>
            </div>
        </div>
    )
}

export default NavBar;