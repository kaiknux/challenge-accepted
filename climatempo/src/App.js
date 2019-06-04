import React from 'react';
import './App.css';
import AppBlock from '../src/containers/AppBlock/AppBlock';
import CitySearch from '../src/containers/CitySearch/CitySearch';
import ImportedSolution from './containers/CitySearch/ImportedSolution';

function App() {
  return (
    <div>
        <AppBlock/>
        <CitySearch/>
        <ImportedSolution/>
    </div>
  );
}

export default App;
