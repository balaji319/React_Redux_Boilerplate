import React, {Component } from 'react'
import { extend } from '@firebase/util';
import { connect } from 'react-redux'
import { signIn } from '../../store/actions/authActions'
import { Redirect } from 'react-router-dom'

class SignIn extends Component {
    state = {
        email:"",
        passowrd:"",
        authError:null
    }
    submitHandle = (e) =>{
        e.preventDefault();
        this.props.signIn(this.state)
    }

    handleChange = (e) =>{
        this.setState({
            [e.target.id] : e.target.value
        })
    }
 render() {
     const { authError, auth }= this.props
     if(auth.uid) {return <Redirect to="/" />}
     return (
         <div>
            <div className="container">
                <form onSubmit={this.submitHandle} className="white">
                    <h5 className="grey-text text-darken-3">Sing In</h5>
                    <div className="input-field">
                        <label htmlFor="email">Email</label>
                        <input type="email" id="email" onChange={this.handleChange}/>
                    </div>
                    <div className="input-field">
                        <label htmlFor="password">Password</label>
                        <input type="password" id="password" onChange={this.handleChange}/>
                    </div>
                    <div className="input-field">
                        <button className="btn pink lighten-1 z-depth-0">Login</button>
                    </div>
                    <div className="red-text center">
                        { authError ? <p>{authError}</p> : null}
                    </div>
                </form>
            </div>
         </div>
     )
 }
}

const mapStateToProps = (state) => {
    return {
        authError: state.auth.authError,
        auth: state.firebase.auth
    }
}

const mapDispatchToProps = (dispatch) => {
    return {
        signIn : (creds) => {
            dispatch(signIn(creds))
        }
    }
}

export default connect(mapStateToProps, mapDispatchToProps) (SignIn)