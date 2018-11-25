import React from 'react'
import { compose } from 'redux'
import { firestoreConnect } from 'react-redux-firebase'
import { connect } from 'react-redux'
import { Redirect } from 'react-router-dom'

const ProjectDetails =(props) => {
    console.log({props})
    const { project, auth } = props;
    if(!auth.uid) {return <Redirect to="/sing-in" />}

    if(project) {
        return(
            <div>
                <div className="container section project-details">
                    <div className="card z-depth-0">
                        <div className="card-content">
                            <span className="card-title">{project.title}</span>
                            <p>{project.content}.</p>
                        </div>
                        <div className="card-action grey lighten-4 grey-text">
                        <div>Posted by {project.autherFirstName} {project.autherLastName}</div>
                        <div> 2nd september, 2am</div>
                    </div>
                    </div>


                </div>
            </div>
        )
    } else {
        return (
            <p>Loading Project...</p>
        )
    }

}
const mapStateToProps = (state, ownProps) => {
    const id = ownProps.match.params.id
    const projects = state.firestore.data.projects
    const project = projects ? projects[id] : null
    return {
        project : project,
        auth : state.firebase.auth
    }
}

export default compose(
    connect(mapStateToProps),
    firestoreConnect([
        {collection:'projects'}
    ])
)(ProjectDetails)