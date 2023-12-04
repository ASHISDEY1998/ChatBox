import React from 'react'

function Navbar() {
    return (
        <div className='navbar'>
            <span className="logo">ChatBox</span>
            <div className="user">
                <img src='https://images.pexels.com/photos/11456343/pexels-photo-11456343.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1' alt="" />
                <span>Ashis</span>
                <button>logout</button>
            </div>
        </div>
    )
}

export default Navbar