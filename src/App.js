import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import './App.css';
import Actions from './components/Actions';
import Header from './components/Header';

function App() {
  const title = 'Indecision App';
  const subtitle = 'Let a computer decide your tasks';
  return (
    <Router>
      <div className="App">
        <Header title={title} subtitle={subtitle} />
        <Routes>
          <Route path="/Actions" element={<Actions />} />
        </Routes>
      </div>
    </Router>
  );
}

export default App;
