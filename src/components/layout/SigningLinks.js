import React from 'react'
import {  NavLink } from 'react-router-dom'

const SigningLinks = () => {
    return (
        <ul className="right">
            <li>
                <NavLink to="/sing-up">Singup </NavLink>
            </li>
            <li><NavLink to="/sing-in">Login</NavLink></li>
        </ul>
    )
}

export default SigningLinks