import React, { Component } from "react";
import { Button, Card, Col, Row } from "reactstrap";
import { qBank } from '../question';
import QuestionSection from './QuestionSection';
import ResultSection from './ResultSection';

class Playground extends Component {
  constructor() {
    super();
    this.state = {
      questionBank: [],
      questionCount: 0,
      score: 0,
      responses: 0,
      answerChoice: '',
    };
  }

  getQuestions = () => {
    this.setState({ questionBank: qBank });
  };

  nextButtonHandle = (answer, correctAns) => {
    this.computeAnswer(answer, correctAns);
    this.setState({ questionCount: this.state.questionCount + 1 });
  }

  confirmAnswer = (choice) => {
    this.setState({
      answerChoice: choice
    })
  }

  playAgain = async () => {
    await this.setState({ questionCount: 0 });
    this.getQuestions();
    this.setState({ score: 0, responses: 0 });
  };

  computeAnswer = (answer, correctAns) => {
    if (answer === correctAns) {
      this.setState({
        score: this.state.score + 1
      });
    }
    this.setState({
      responses: this.state.responses < 10
        ? this.state.responses + 1
        : 10
    });
  };

  componentDidMount() {
    this.getQuestions();
  }

  gohome = () => {
    this.props.history.push('/home');
  }

  logout = () => {
    sessionStorage.clear();
    this.props.history.push('/login');
  }

  render() {
    return (
      <div className="App">
        <Row className="border">
          <Col></Col>
          <Col>
              <div className="display-4 py-2 pointer" onClick={this.gohome}>
                Playground
              </div>
          </Col>
          <Col>
            <div className="align-logout py-2">
              <Button className="btn btn-light" onClick={this.logout}>
                Signout
                </Button>
            </div>
          </Col>
        </Row>
        <Row>
          <Col>
            <div className="p-2">
              <Button className="btn btn-info">
                {this.props.location.state.first_player}
              </Button>
            </div>
            <div className="p-2">
              <Button className="btn btn-info">
                {this.props.location.state.second_player ? this.props.location.state.second_player : 'No Player'}
              </Button>
            </div>
          </Col>
          <Col>
            <div className="p-2">
              <Card>
                {this.state.questionBank.length > 0 &&
                  this.state.responses < 10 &&
                  <div className="p-2">
                    <QuestionSection question=
                      {this.state.questionBank[this.state.questionCount].question}
                      options={this.state.questionBank[this.state.questionCount].answers}
                      key={this.state.questionBank[this.state.questionCount].questionId}
                      id={this.state.questionBank[this.state.questionCount].questionId}
                      selected={answer => this.confirmAnswer(answer)}
                    />
                    <Button className="btn btn-primary" onClick={() => this.nextButtonHandle(this.state.answerChoice,
                      this.state.questionBank[this.state.questionCount].correct)}>Next</Button>
                  </div>
                }

                {
                  this.state.responses === 10
                    ? (<div className="p-2"><ResultSection score={this.state.score}
                      playAgain={this.playAgain} /></div>)
                    : null
                }
              </Card>
            </div>
          </Col>
          <Col>
            <div className="p-2">
              <Button className="btn btn-info">
                {this.props.location.state.third_player ? this.props.location.state.third_player : 'No Player'}
              </Button>
            </div>
            <div className="p-2">
              <Button className="btn btn-info">
                {this.props.location.state.fourth_player ? this.props.location.state.fourth_player : 'No Player'}
              </Button>
            </div>
          </Col>
        </Row>
      </div>)
  }
}

export default Playground; 
