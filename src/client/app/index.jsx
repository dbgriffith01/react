import React from 'react';
import {render} from 'react-dom';
import AnotherComponent from './AnotherComponent.jsx';

class App extends React.Component {
  render () {
    return (
      <div>
        <p> Hello React! </p>
        <AnotherComponent />
      </div>
    );
  }
}

render(<App/>, document.getElementById('app'));
