import React from 'react';
import { render } from 'react-dom';
import './favicon.ico' // importすることでコンパイルに含められる index.htmlで設定している

class App extends React.Component {
  render () {
    return <p> Hello React!</p>;
  }
}

render(<App/>, document.getElementById('webpack_app'));
