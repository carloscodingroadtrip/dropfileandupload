import React, { Component } from "react";
import ReactDOM from 'react-dom';

import Basic from "./basic";

class App extends Component {
  render() {
    return (
      <section>
        <div className="dropzone">
            <Basic/>
        </div>
      </section>
    );
  }
}

ReactDOM.render(<App />, document.getElementById('root'));

