import React from 'react'
import { Link } from 'react-router-dom'
import SigningLinks from './SigningLinks'
import SignOutLinks from './SignOutLinks'
import { connect } from 'react-redux'

const Navbar = (props) => {
    const { auth, profile } = props;
    const links = auth.uid ? <SignOutLinks profile={profile}/>  :<SigningLinks /> ;
    return (
        <div>
            <nav className="nav-wrapper grey darken-3">
            <div className="container">
                <Link to="/" className="brand-logo">MarioPlan </Link>
                { links }
            </div>
            </nav>
        </div>
    )
}

const mapStateToProps = (state) => {
    console.log('navbar')
    console.log(state)
    return {
        auth: state.firebase.auth,
        profile: state.firebase.profile
    }
}

export default connect(mapStateToProps) (Navbar)