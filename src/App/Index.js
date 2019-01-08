import React, { Component } from 'react';
import './App.css';
import Settings from '../Settings';
import AppLayout from './AppLayout';
import AppBar from './AppBar';
import {AppProvider} from './AppProvider';
import Content from '../Shared/Content';


class App extends Component {
  render() {
    return (
      <AppLayout>
        <AppProvider>
<<<<<<< HEAD
          <AppBar/>
            <Content>
              <Settings/>  
            </Content>
=======
          <AppBar />
          <Content>
            <Settings/>
          </Content>
>>>>>>> 1286a0f717bbdffee8e79f6bef3391bbee4ed9c3
        </AppProvider>
      </AppLayout>
    );
  }
}

export default App;
