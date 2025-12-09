import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import App from './App';
import { MovieDetails } from './components/MovieDetails';

export function MainRoutes() {
  return (
    <Router>
      <Routes>
        <Route path="/movie/:id" element={<MovieDetails />} />
        <Route path="/" element={<App />} />
        {/* <Route path="/movie/:id" element={<MovieDetails />} /> */}
      </Routes>
    </Router>
  );
}
