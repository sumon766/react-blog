import { BrowserRouter, Routes, Route } from 'react-router-dom';
import Layout from './components/Layout';
import Posts from './components/Posts';

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Layout />}>
          <Route index element={<Posts />} />
        </Route>
      </Routes>
    </BrowserRouter>
  );
}

export default App;
