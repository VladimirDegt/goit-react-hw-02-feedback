import { Component } from "react"
import { Section } from "./Section/Section";
import { Container } from "./App.styled";
import FeedbackOptions from "./FeedbackOptions";
import Statistics from "./Statistics";

export class App extends Component {
  state = {
    good: 0,
    neutral: 0,
    bad: 0,
  };

  onLeaveFeedBack = ({target}) => {
    const btnClick = target.textContent.toLowerCase();
    this.setState((prevState)=>{
      return {[btnClick]: prevState[btnClick] += 1}
    });
  };

  render() {
    return <Container>
            <Section title='Please leave feedback'>
              <FeedbackOptions 
                options = {['good', 'neutral', 'bad']} 
                onLeaveFeedBack = {this.onLeaveFeedBack} 
              /> 
            </Section>    
            <Section title='Statistics'>
              <Statistics 
                options = {{
                  good: this.state.good,
                  neutral: this.state.neutral,
                  bad: this.state.bad,
                }}
              />
            </Section>
          </Container>;
  }
};


