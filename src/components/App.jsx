import { Component } from "react"

import { ButtonsList } from "./ButtonsList/ButtonsList";
import { Statistics } from "./Statistics/Statistics";

export class App extends Component {
  state = {
    good: 0,
    neutral: 0,
    bad: 0,
    total: 0,
    positiveFeedback: 0,
  }

  onLeaveFeedBack = (e) => {
    if(e.target.textContent === 'Good') {
      this.setState((prevState)=>{
        return {good: prevState.good += 1}
      })
    } else if (e.target.textContent === 'Neutral') {
      this.setState((prevState)=>{
        return {neutral: prevState.neutral += 1}
      })
    } else if (e.target.textContent === 'Bad') {
      this.setState((prevState)=>{
        return {bad: prevState.bad += 1}
      })
    }

    this.countTotalFeedback()
    this.countPositiveFeedbackPercentage()
  }

  countTotalFeedback = () => {
    this.setState((prevState)=>{
      return {total: prevState.total + 1}
    })
  }

  countPositiveFeedbackPercentage = () => {
    this.setState((prevState)=>{
      return {positiveFeedback: Math.round((prevState.good/prevState.total)*100)}
    })
  }
  
  render() {
    const {good, neutral, bad, total, positiveFeedback} = this.state;
    return <div>
            <h1>Please leave feedback</h1>
            <ButtonsList 
              onLeaveFeedBack = {this.onLeaveFeedBack}
            />
            <h2>Statistics</h2>
            <Statistics
              good = {good}
              neutral = {neutral}
              bad = {bad}
              total = {total}
              positiveFeedback = {positiveFeedback}
            />
          </div>;
  }

};
