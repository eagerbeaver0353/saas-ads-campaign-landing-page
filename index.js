import React from 'react';
import ReactDOM from 'react-dom';
import Home from './src/Home';
import './src/Home/static/antd.less';
import "./src/Home/static/tailwind-generated.css"

function App() {
  return (
    <Home />
  );
}

ReactDOM.render(<App />, document.getElementById('root'));
