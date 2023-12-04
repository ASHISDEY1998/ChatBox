import React from 'react'

function Login() {
    return (
        <div className="formContainer">
            <div className="formWrapper">
                <span className="logo">ChatBox</span>
                <span className="title">Login</span>
                <form >
                    <input required type="email" placeholder="email" />
                    <input required type="password" placeholder="password" />

                    <button >Sign in</button>
                </form>
                <p>
                    You do have an account? Register
                </p>
            </div>
        </div>
    )
}

export default Login