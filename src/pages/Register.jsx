import React, { useState } from 'react'
import { Link, useNavigate } from 'react-router-dom'
import Add from '../img/addAvatar.png'


function Register() {
    return (
        <div className="formContainer">
            <div className="formWrapper">
                <span className="logo">ChatBox</span>
                <span className="title">Register</span>
                <form >
                    <input required type="text" placeholder="display name" />
                    <input required type="email" placeholder="email" />
                    <input required type="password" placeholder="password" />
                    <input required style={{ display: "none" }} type="file" id="file" />
                    <label htmlFor="file">
                        <img src={Add} alt="" />
                        <span>Add an avatar</span>
                    </label>
                    <button >Sign up</button>
                </form>
                <p>
                    You do have an account? Login
                </p>
            </div>
        </div>
    )
}

export default Register