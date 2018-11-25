import React from 'react'

const initState = {
    projects : [
        {id:'1', title:'FIrst Title', content:'content of first title'},
        {id:'2', title:'Second Title', content:'content of second title'},
        {id:'3', title:'Third Title', content:'content of third title'}
    ]
}

const projectReducers =(state= initState, action) => {
    switch(action.type) {
        case'CREATE_PROJECT_SUCCESS':
         console.log('crated_project', action.project)
         return state
        case 'CREATE_PROJECT_ERROR':
        console.log('error', action.err)
        return state

        default:
        return state
    }
}

export default projectReducers