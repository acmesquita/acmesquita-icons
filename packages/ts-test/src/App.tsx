import React from 'react';
import './App.css';
import {IconContext} from 'react-icons'
import {VdActivityOutline} from 'react-icons/vd'

const App: React.FC = () => {
  return (
    <div className="App">
      <header className="App-header">
        <IconContext.Provider value={{color: '#fa7'}}>
          <VdActivityOutline />
        </IconContext.Provider>
      </header>
    </div>
  );
}

export default App;
