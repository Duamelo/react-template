import { Route, BrowserRouter as Router, Routes } from 'react-router-dom';
import Hello from './components/hello/hello';
import Dashboard from './views/dashboard/dashboard';

function App() {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<Dashboard/>}>
          <Route path="/hello" element={<Hello/>}/>
        </Route>
      </Routes>
    </Router>
  );
}
export default App;