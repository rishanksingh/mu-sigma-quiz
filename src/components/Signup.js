import { AvForm, AvField } from 'availity-reactstrap-validation';
import React, { Component } from 'react';
import { Button, Card } from 'reactstrap';

export default class Signup extends Component {
    constructor(props) {
        super();
        this.state = {
            isMultiplayer: false,
            email: '',
            phone: '',
            password: '',
        };
    }

    login = () => {
        this.props.history.push('/');
    }

    updateFormValue = (e) => {
        this.setState({
            [e.target.name]: e.target.value
        });
    }

    render() {

        return (
            <div className="p-4">
                <Card>
                    <div className="App display-4">
                        Create your account
                    </div>
                        <div className="p-2">
                            <AvForm onValidSubmit={this.handleSubmitform}>
                                <AvField
                                    name="email"
                                    label="Email"
                                    type="email"
                                    validate={{
                                        required: { value: true, errorMessage: 'Please enter a name for this email.' }
                                    }}
                                    placeholder="Email"
                                    value={this.state.email}
                                    onChange={this.updateFormValue}
                                />
                                <AvField
                                    name="phone"
                                    label="Phone (recommended)"
                                    type="text"
                                    placeholder="9XXXXXXXXX"
                                    value={this.state.phone}
                                    onChange={this.updateFormValue}
                                />
                                <AvField
                                    name="password"
                                    label="Password"
                                    type="password"
                                    validate={{
                                        required: { value: true, errorMessage: 'Please enter a name for this Password.' }
                                    }}
                                    placeholder="Password"
                                    value={this.state.password}
                                    onChange={this.updateFormValue}
                                />
                                <div className="pt-4">
                                    <Button type="submit">Signup</Button>
                                </div>
                            </AvForm>
                        </div>
                        <div className="p-2">
                            <Button className="btn btn-light" onClick={this.login} >Login</Button>
                        </div>
                        </Card>
                    </div>
        )
    }
}
