import React from 'react'
const initState = {
    authError:null
 }

const authReducers =(state= initState, action) => {
    switch(action.type) {
        case 'LOGIN_ERROR':
            console.log('login failed')
            return{
                ...state,
                authError:'Login Failed'
            }

            case 'LOGIN_SUCCESS':
                console.log('login success')
                return state

            case 'LOGOUT_SUCCESS':
                console.log('logout success')

            case 'SIGNUP_SUCCESS' :
                console.log('signup success')
                return state;

            case 'SIGNUP_ERROR' :
                console.log('signup error')
                return {
                    ...state,
                    authError: action.err.message
                }
            default:
            return state
    }
}

export default authReducers