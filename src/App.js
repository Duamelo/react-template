import { Route, BrowserRouter as Router, Routes } from 'react-router-dom';
import Hello from './components/hello/hello';

function App() {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<Hello/>}/>
      </Routes>
    </Router>
  );
}
export default App;