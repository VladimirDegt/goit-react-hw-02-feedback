import { Component } from "react"

import { ButtonsList } from "./ButtonsList/ButtonsList";
import { Statistics } from "./Statistics/Statistics";

export class App extends Component {
  state = {
    good: 0,
    neutral: 0,
    bad: 0,
    total: 0
  }

  handleClickBtnGood = (e) => {
    this.setState((prevState)=>{
      return {good: prevState.good += 1}
    })
  }
  handleClickBtnNeutral = (e) => {
    this.setState((prevState)=>{
      return {neutral: prevState.neutral += 1}
    })
  }
  handleClickBtnBad = (e) => {
    this.setState((prevState)=>{
      return {bad: prevState.bad += 1}
    })
  }

  countTotalFeedback = () => {
    this.setState((prevState)=>{
      return {total: prevState.good + prevState.neutral + prevState.bad}
    })
  }
  
  render() {
    return <div>
            <h1>Please leave feedback</h1>
            <ButtonsList 
              handleClickBtnGood = {this.handleClickBtnGood}
              handleClickBtnNeutral = {this.handleClickBtnNeutral}
              handleClickBtnBad = {this.handleClickBtnBad}
            />
            <h2>Statistics</h2>
            <Statistics
              good = {this.state.good}
              neutral = {this.state.neutral}
              bad = {this.state.bad}
              total = {this.countTotalFeedback}
            />
          </div>;
  }

};
