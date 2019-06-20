import React, {Component} from 'react';
import './App.css';

import Content from "./Components/Content";
import Head from "./Components/Head";

class App extends Component {
  render() {
    return (
      <div className="App">
        <Head />
        <Content />
      </div>
    );
  }

}

export default App;
