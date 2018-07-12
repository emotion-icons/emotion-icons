import * as React from 'react'

export class Badges extends React.Component {
  state = {
    loaded: false,
  }

  onload = () => {
    this.setState({loaded: true})
  }

  componentDidMount() {
    window.addEventListener('load', this.onload)
  }

  componentWillUnmount() {
    window.removeEventListener('load', this.onload)
  }

  render() {
    if (!this.state.loaded) {
      return <div className="badges" />
    }

    return (
      <div className="badges">
        <a href="https://travis-ci.org/JoshRosenstein/emotion-icons">
          <img
            alt="Build Status"
            src="https://travis-ci.org/JoshRosenstein/emotion-icons.svg?branch=master"
          />
        </a>
        <a href="https://www.npmjs.com/package/emotion-icons">
          <img alt="npm" src="https://img.shields.io/npm/dm/emotion-icons.svg" />
        </a>
        <a href="https://www.npmjs.com/package/emotion-icons">
          <img alt="npm" src="https://img.shields.io/npm/v/emotion-icons.svg" />
        </a>
        <img
          alt="Built with Emotion"
          src="https://img.shields.io/badge/built%20with-emotion-db7093.svg"
        />

      </div>
    )
  }
}

export default Badges
