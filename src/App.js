import React, { useEffect } from 'react';
import { useDispatch } from 'react-redux';
import { getProjectData } from './actions/projectData';

import ProjectTable from './components/ProjectTable';
import 'bootstrap/dist/css/bootstrap.min.css';
import './App.css';

function App() {
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(getProjectData());
  });

  return (
    <div className="App">
      <div className="App-header">
        <ProjectTable />
      </div>
    </div>
  );
}

export default App;
