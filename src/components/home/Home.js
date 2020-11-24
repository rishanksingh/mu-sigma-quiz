import { AvForm, AvField } from 'availity-reactstrap-validation';
import React, { Component } from 'react'
import { Button, Card, Row, Col } from 'reactstrap'

export default class Home extends Component {

    constructor() {
        super();
        this.state = {
            isMultiplayer: false,
            first_player: sessionStorage.getItem('username'),
            second_player: '',
            third_player: '',
            fourth_player: '',
        };
    }

    handlequizsession = () => {
        this.props.history.push({
            pathname: "/quiz",
            state: {
                first_player: this.state.first_player,
                second_player: this.state.second_player,
                third_player: this.state.third_player,
                fourth_player: this.state.fourth_player,
            }
        });
    }

    handlemultiplayer = () => {
        this.setState({ isMultiplayer: true });
    }

    handleBackButton = () => {
        this.setState({ isMultiplayer: false });
    }

    updateFormValue = (e) => {
        this.setState({
            [e.target.name]: e.target.value
        });
    }


    logout = () => {
        sessionStorage.clear();
        this.props.history.push('/login');
    }


    render() {
        return (
            <div>
                <Row className="border">
                    <Col></Col>
                    <Col>
                    </Col>
                    <Col>
                        <div className="align-logout py-2">
                            <Button className="btn btn-light" onClick={this.logout}>
                                Signout
                </Button>
                        </div>
                    </Col>
                </Row>
                {!this.state.isMultiplayer && <div className="App p-4">
                    <Card>
                        <div className="display-4 p-4">
                            Choose how you want to start the Quiz?
                </div>
                        <div className="p-2">
                            <Button className="p-2" onClick={this.handlequizsession}>Single Player</Button>
                        </div>
                        <div className="p-2">
                            <Button className="p-2" onClick={this.handlemultiplayer}>Multi Player</Button>
                        </div>
                    </Card>
                </div>}
                {this.state.isMultiplayer && <div className="p-4">
                    <Card>
                        <div className="App display-4">
                            Enter Player's Name:
                    </div>
                        <div className="p-2">
                            <AvForm onValidSubmit={this.handlequizsession}>
                                <AvField
                                    readOnly={true}
                                    name="first_player"
                                    label="First Player"
                                    type="text"
                                    validate={{
                                        required: { value: true, errorMessage: 'Please enter a name for this company.' }
                                    }}
                                    placeholder="First Player"
                                    value={this.state.first_player}
                                    onChange={this.updateFormValue}
                                />
                                <AvField
                                    name="second_player"
                                    label="Second Player"
                                    type="text"
                                    validate={{
                                        maxLength: { value: 12 }
                                    }}
                                    placeholder="Second Player"
                                    value={this.state.second_player}
                                    onChange={this.updateFormValue}
                                />
                                <AvField
                                    name="third_player"
                                    label="Third Player"
                                    type="text"
                                    validate={{
                                        maxLength: { value: 12 }
                                    }}
                                    placeholder="Third Player"
                                    value={this.state.third_player}
                                    onChange={this.updateFormValue}
                                />
                                <AvField
                                    name="fourth_player"
                                    label="Fourth Player"
                                    type="text"
                                    validate={{
                                        maxLength: { value: 12 }
                                    }}
                                    placeholder="Fourth Player"
                                    value={this.state.fourth_player}
                                    onChange={this.updateFormValue}
                                />

                                <div className="App p-2">
                                    <Button type="submit">Start the Quiz</Button>
                                </div>
                            </AvForm>
                        </div>
                        <div className="App p-2">
                            <Button onClick={this.handleBackButton}>Back</Button>
                        </div>
                    </Card>
                </div>
                }
            </div>
        )
    }
}
