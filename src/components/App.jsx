import { Component } from "react"
import { Section } from "./Section/Section";
import { Container } from "./App.styled";

export class App extends Component {
  state = {
    good: 0,
    neutral: 0,
    bad: 0,
  };

  onLeaveFeedBack = ({target}) => {
    this.setState((prevState)=>{
      return {[target.name]: prevState[target.name] += 1}
    });
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


