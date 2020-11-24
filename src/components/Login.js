import React, { Fragment, Component } from 'react';
import { AvField, AvForm, AvGroup } from 'availity-reactstrap-validation';
import { Col, Row, Button, FormGroup } from 'reactstrap';
import { withRouter } from 'react-router-dom'

class Login extends Component {
    constructor(props) {
        super(props);

        this.state = {
            username: '',
            password: '',
            showPassword: false
        };
    }

    login = () => {
        if (this.state.username === 'rishanks' && this.state.password === 'Rishank@123') {
            sessionStorage.setItem('username', this.state.username);
            sessionStorage.setItem('password', this.state.password);
            sessionStorage.setItem('authentication', true);
            this.props.history.push(`/home`);
        }
        else {
            alert('Invalid Login')
            this.setState({
                authentication: false
            })
        }
    }

    updateFormValue = (event) => {
        this.setState({
            [event.target.name]: event.target.value,
        });
    }

    tosignup = () => {
        this.props.history.push('/signup');
    }


    render() {
        return (
            <Fragment>
                <div className="pt-4">
                    <Row>
                        <Col lg="9" className="mx-auto">
                            <h4 className="mb-0 pt-5">
                                <div>Welcome,</div>
                                <span>Please sign in to your account.</span>
                            </h4>
                            <Row />
                            <div className="pt-5">
                                <AvForm onValidSubmit={this.login}>
                                    <Row form>
                                        <Col md={6}>
                                            <FormGroup>
                                                <AvField
                                                    name="username"
                                                    label="Username or Email"
                                                    type="text"
                                                    validate={{
                                                        required: { value: true, errorMessage: 'Please enter your username or email.' },
                                                    }}
                                                    placeholder="Enter Username or Email"
                                                    value={this.state.username}
                                                    onChange={this.updateFormValue}
                                                />
                                            </FormGroup>
                                        </Col>
                                        <Col md={6}>
                                            <AvGroup>
                                                <AvField
                                                    name="password"
                                                    label="Password"
                                                    type='password'
                                                    validate={{
                                                        required: { value: true, errorMessage: 'Please enter your password.' },
                                                        minLength: { value: 8, errorMessage: 'Password must be at least 8 characters.' },
                                                        maxLength: { value: 54, errorMessage: 'Password must be 54 characters or less.' },
                                                        pattern: { value: '^(?=.*?[a-z])(?=.*?[A-Z])(?=.*?[0-9])(?=.*?[!"#$%&\'()*+,-./:;<=>?@[\\]^_`{|}~]).{8,54}$', errorMessage: 'Password must contain at least one lowercase letter, one uppercase letter, one number and one special character (!"#$%&\'()*+,-./:;<=>?@[\\]^_`{|}~)' }
                                                    }}
                                                    value={this.state.password}
                                                    onChange={this.updateFormValue}
                                                />
                                            </AvGroup>
                                        </Col>
                                    </Row>
                                    <div className="pt-5">
                                        <Button size="lg" type="submit">Login to Dashboard</Button>
                                    </div>
                                </AvForm>
                                <div className="pt-1">
                                <Button className="btn btn-light" onClick={this.tosignup} size="lg" >Sign Up</Button>
                                </div>
                            </div>
                        </Col>
                        {/* </Col> */}
                    </Row>
                </div>
            </Fragment>
        )
    }
}
export default withRouter(Login)