import React, { Component } from 'react'
import { Form, Field } from 'react-final-form'


const bugType = props => {

    const BugTypeSubmitHandler = (event) => {

    }
    return (
        <div>
            <Form onSubmit={BugTypeSubmitHandler}
                render={({ handleSubmit, form, submitting, pristine, values }) => (
                    <form>
                        <Field
                            name="workSpaceName"
                            component="input"
                            type="text"
                            placeholder="WorkspaceName"
                        />
                    </form>
                )
                }>
            </Form>
        </div>

    )
}

export default bugType;