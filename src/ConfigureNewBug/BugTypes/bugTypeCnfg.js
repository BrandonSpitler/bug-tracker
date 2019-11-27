import React from 'react'
import BugContainerToBugContainerCnfg from './BugContainerToBugContainerCnfg'

const bugTypeCnfg = (props) => {
    return (
        <div>
            <input defaultValue="Bug Type" type="text"></input>
            <div><BugContainerToBugContainerCnfg workspaceName={props.workspaceName}></BugContainerToBugContainerCnfg></div>
        </div>
    )
}

export default bugTypeCnfg;