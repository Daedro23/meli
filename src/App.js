import React from 'react'
import Routes from './Routes/routes'
import Header from './Components/header/header'
import './Styles/App.scss'

function App() {
  return (
    <div>
        <Header/>
      <div className="container">
        <Routes/>
      </div>
    </div>
  );
}

export default App;

