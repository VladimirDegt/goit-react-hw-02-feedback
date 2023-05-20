import { Component } from "react"
import { Section } from "./Section/Section";
import { Container } from "./App.styled";

export class App extends Component {
  state = {
    good: 0,
    neutral: 0,
    bad: 0,
  };

  onLeaveFeedBack = (e) => {
    switch(e.target.textContent){
      case 'Good':
        this.setState((prevState)=>{
          return {good: prevState.good += 1};
        });
        break;
      case 'Neutral':
        this.setState((prevState)=>{
          return {neutral: prevState.neutral += 1};
        });
        break;
      case 'Bad':
        this.setState((prevState)=>{
          return {bad: prevState.bad += 1};
        });
        break;
      default:
    }
  };

  render() {
    const {good, neutral, bad} = this.state;
    return <Container>
            <Section 
              numberSection = '1'
              title='Please leave feedback'
              onLeaveFeedBack = {this.onLeaveFeedBack}
            />
            <Section
              numberSection = '2'
              title='Statistics'
              good = {good}
              neutral = {neutral}
              bad = {bad}
            />
          </Container>;
  }
};


