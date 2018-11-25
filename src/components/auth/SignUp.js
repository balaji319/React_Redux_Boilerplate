import React, {Component } from 'react'
import { extend } from '@firebase/util';
import { Redirect } from 'react-router-dom'
import { connect } from 'react-redux'
import { signUp } from '../../store/actions/authActions'

class SignUp extends Component {
    state = {
        firstname:"",
        lastname:"",
        email:"",
        password:""
    }
    submitHandle = (e) =>{
        e.preventDefault();
        console.log(this.state)
        this.props.signUp(this.state)
    }

    handleChange = (e) =>{
        this.setState({
            [e.target.id] : e.target.value
        })
    }
 render() {
     const { auth, authError } = this.props
    if(auth.uid) {return <Redirect to="/" />}
     return (
         <div>
            <div className="container">
                <form onSubmit={this.submitHandle} className="white">
                    <h5 className="grey-text text-darken-3">Sing Up</h5>
                    <div className="input-field">
                        <label htmlFor="firstname">First Name</label>
                        <input type="text" id="firstname" onChange={this.handleChange}/>
                    </div>
                    <div className="input-field">
                        <label htmlFor="lastname">Last Name</label>
                        <input type="text" id="lastname" onChange={this.handleChange}/>
                    </div>
                    <div className="input-field">
                        <label htmlFor="email">Email</label>
                        <input type="email" id="email" onChange={this.handleChange}/>
                    </div>
                    <div className="input-field">
                        <label htmlFor="password">Password</label>
                        <input type="password" id="password" onChange={this.handleChange}/>
                    </div>
                    <div className="input-field">
                        <button className="btn pink lighten-1 z-depth-0">SingUp</button>
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

const mapDispatchToProps = (dispatch) => {
    return {
        signUp: (newUser) => {
            dispatch(signUp(newUser))
        }
    }
}

const mapStateToProps = (state) => {
    return {
        auth: state.firebase.auth,
        authError: state.auth.authError
    }
}
export default connect(mapStateToProps, mapDispatchToProps)(SignUp)