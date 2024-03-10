import React from 'react';
import { render } from 'react-dom'
import App from './App';
import { transitions, positions, Provider as AlertProvider } from 'react-alert'
import AlertTemplate from 'react-alert-template-basic'

const options = {
    // you can also just use 'bottom center'
    position: positions.TOP_RIGHT,
    timeout: 5000,
    offset: '80px 5px',
    // you can also just use 'scale'
    transition: transitions.SCALE
  }


const Root = () => (
    <AlertProvider template={AlertTemplate} {...options}>
      <App />
    </AlertProvider>
  )
  
  render(<Root />, document.getElementById('root'))
