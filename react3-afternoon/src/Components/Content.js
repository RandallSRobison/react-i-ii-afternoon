import React, { Component } from "react";
import data from "../data";
import "../Content.css";

class Content extends Component {
  constructor() {
    super();

    this.state = {
      i: 0
    };
    this.handlePrevious = this.handlePrevious.bind(this);
    this.handleNext = this.handleNext.bind(this);
  }

  handlePrevious() {
    if (this.state.i >= 0) {
      this.setState({ i: this.state.i - 1 });
    } else {
      this.setState({ i: this.state.i });
    }
  }

  handleNext() {
    if (this.state.i <= 24) {
      this.setState({ i: this.state.i + 1 });
    } else {
      this.setState({ i: this.state.i });
    }
  }

  render() {
    return (
      <div className="black-container">
        <div className="content-box">
          <div id="slide-num">{`${this.state.i + 1}/25`}</div>
          <section className='main-text'>
          <div id='full-name'>
            {data[this.state.i].name.first} {data[this.state.i].name.last}
          </div>
            <div class='info-top'>
            <div><b>From:</b> {data[this.state.i].city}, {data[this.state.i].country}</div>
          <div><b>Job Title:</b> {data[this.state.i].title}</div>
          <div><b>Employer:</b> {data[this.state.i].employer}</div>
          </div>
          <div className='info-bottom'>
            <b>Favorite Movies:</b>
            <div className='li'>
            <div>1. {data[this.state.i].favoriteMovies[0]}</div>
            <div>2. {data[this.state.i].favoriteMovies[1]}</div>
            <div>3. {data[this.state.i].favoriteMovies[2]}</div>
            </div>
          </div>
          </section>
          <section className="footer">
            <div className="left">
              <button onClick={() => this.handlePrevious()} className='nav-buttons'> {`< Prev`} </button>
            </div>
            <div className="center">
              <button className='center-buttons'> Edit </button>
              <button className='center-buttons'> Delete </button>
              <button className='center-buttons'> New </button>
            </div>
            <div className="right">
              <button onClick={() => this.handleNext()} className='nav-buttons'> {`Next > `} </button>
            </div>
          </section>
        </div>
      </div>
    );
  }
}

export default Content;
