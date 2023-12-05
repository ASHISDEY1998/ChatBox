import React from 'react'

function Message() {
  return (
    <div
      className={`message ${''}`}
    >
      <div className="messageInfo">
        <img
          src='https://images.pexels.com/photos/19248753/pexels-photo-19248753/free-photo-of-a-woman-with-a-white-tank-top-and-a-green-olive-tree.jpeg?auto=compress&cs=tinysrgb&w=600&lazy=load'
          alt=""
        />
        <span>just now</span>
      </div>
      <div className="messageContent">
        <p>test</p>
        {/* <img src='' alt="" /> */}
      </div>
    </div>
  )
}

export default Message