import React from 'react'

function Search() {
    return (
        <div className="search">
            <div className="searchForm">
                <input
                    type="text"
                    placeholder="Find a user"
                />
            </div>
            <div className="userChat" >
                <img src='https://images.pexels.com/photos/17153119/pexels-photo-17153119/free-photo-of-woman-posing-in-white-clothes.jpeg?auto=compress&cs=tinysrgb&w=600&lazy=load' alt="" />
                <div className="userChatInfo">
                    <span>Test</span>
                </div>
            </div>
        </div>
    )
}

export default Search