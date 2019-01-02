import React from 'react'
import { connect } from "react-redux"
import { userLogin } from "../store/actions/authActions"
import { Row, Col, Form, FormGroup, ControlLabel, FormControl, Checkbox, Button, Panel } from "react-bootstrap"
import history from '../history'

class Login extends React.Component {

    state = {
        email: '',
        password: ''
    }

    constructor(props){
        super(props)
        const { isAuthed } = this.props
        if( isAuthed ) {
            history.push(`/profile?from=login`)
        }
    }

    handleSubmit = (e) => {
        e.preventDefault()
        this.props.login(this.state)
    }

    handleChange = (e) => {

        this.setState({
            [e.target.id]: e.target.value
        })

    }

    render() {
        const { authError } = this.props
    
        return (
            <Row className="show-grid">
                <Col xs={4} xsOffset={4}>
                    <Panel>
                        <Panel.Heading>
                            <Panel.Title componentClass="h3">Login</Panel.Title>
                        </Panel.Heading>
                        <Panel.Body>
                        {authError ? <p className="text-danger text-center">{ authError }</p> : null}
                            <Form horizontal onSubmit={this.handleSubmit}>
                                <FormGroup controlId="email">
                                    <Col componentClass={ControlLabel} sm={2}>
                                        Email
                                    </Col>
                                    <Col sm={10}>
                                        <FormControl type="email" placeholder="Email" onChange={this.handleChange}/>
                                    </Col>
                                </FormGroup>

                                <FormGroup controlId="password">
                                    <Col componentClass={ControlLabel} sm={2}>
                                        Password
                                    </Col>
                                    <Col sm={10}>
                                        <FormControl  type="password" placeholder="Password" onChange={this.handleChange}/>
                                    </Col>
                                </FormGroup>

                                <FormGroup>
                                    <Col smOffset={2} sm={10}>
                                        <Checkbox>Remember me</Checkbox>
                                    </Col>
                                </FormGroup>

                                <FormGroup>
                                    <Col smOffset={2} sm={10}>
                                        <Button type="submit">Sign in</Button>
                                    </Col>
                                </FormGroup>
                            </Form>

                        </Panel.Body>
                    </Panel>

                </Col>
            </Row>

        )
    }


}

const mapStateToProps = (state) => {
    return {
        authError: state.auth.authError,
        isAuthed: state.auth.isAuthed
    }
}

const mapDispatchToProps = (dispatch) => {

    return {
        login: (user) => dispatch(userLogin(user))
    }
}

export default connect(mapStateToProps, mapDispatchToProps)(Login)