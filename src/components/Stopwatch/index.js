import './index.css'
import {Component} from 'react'

class Stopwatch extends Component {
  state = {
    timeInSeconds: 0,
  }

  componentWillUnmount() {
    clearInterval(this.timerId)
  }

  renderMinutes = () => {
    const {timeInSeconds} = this.state
    const minutes = Math.floor(timeInSeconds / 60)
    if (minutes < 10) {
      return `0${minutes}`
    }
    return minutes
  }

  renderSeconds = () => {
    const {timeInSeconds} = this.state
    const seconds = Math.floor(timeInSeconds % 60)
    if (seconds < 10) {
      return `0${seconds}`
    }
    return seconds
  }

  startButton = () => {
    this.timerId = setInterval(this.runClock, 1000)
  }

  runClock = () => {
    this.setState(prevState => ({timeInSeconds: prevState.timeInSeconds + 1}))
  }

  stopButton = () => {
    clearInterval(this.timerId)
  }

  restartButton = () => {
    this.setState({timeInSeconds: 0})
    clearInterval(this.timerId)
  }

  render() {
    const displayTime = `${this.renderMinutes()}:${this.renderSeconds()}}`

    return (
      <div>
        <div>
          <h1>Stopwatch</h1>
          <div>
            <div>
              <img
                alt="stopwatch"
                src="https://assets.ccbp.in/frontend/react-js/stopwatch-timer.png"
              />
              <p>Timer</p>
            </div>
            <h1 testid="timer">{displayTime}</h1>
            <div>
              <button type="buttpn" onClick={this.startButton}>
                Start
              </button>
              <button type="button" onClick={this.stopButton}>
                Stop
              </button>
              <button type="button" onClick={this.restartButton}>
                Reset
              </button>
            </div>
          </div>
        </div>
      </div>
    )
  }
}
export default Stopwatch
