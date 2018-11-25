import React from 'react'
import moment from 'moment'

const ProjectSummery = ({project}) =>{
    return(
        <div>
            <div className="card z-depth-0 project-summery">
                <div className="card-content grey-text text-darken-3">
                    <span className="card-title">{project.title} </span>
                    <div className="card-action grey lighten-4 grey-text">
                        <div>Posted by {project.autherFirstName} {project.autherLastName}</div>
                        <div>{moment(project.createdAt.toDate()).calendar()}</div>
                    </div>
                </div>
            </div>


        </div>
    )
}

export default ProjectSummery