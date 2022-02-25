import './App.css';
import React, { Component } from 'react';
import Navbar from './writing_prompt/Navbar';
import Body from './writing_prompt/Body';
import {
  RecoilRoot
} from 'recoil';



class App extends Component {
  constructor(props) {
    super(props);

    
  }

  onClickBtn() {
    console.log('Button has been clicked!');
  }

  render() {

    return (
      <RecoilRoot>
        <Navbar />
        <Body />
      </RecoilRoot>
    );
  }
}

export default App;
