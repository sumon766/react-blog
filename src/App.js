import { BrowserRouter, Routes, Route } from 'react-router-dom';
import Layout from './components/Layout';
import Posts from './components/Posts';
import Users from './components/Users';
import Albums from './components/Albums';
import Photos from './components/Photos';
import Todos from './components/Todo';
import Comments from './components/Comments';

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Layout />}>
          <Route index element={<Posts />} />
          <Route path="/users" element={<Users />} />
          <Route path="/albums" element={<Albums />} />
          <Route path="/photos" element={<Photos />} />
          <Route path="/todo" element={<Todos />} />
          <Route path="/comments" element={<Comments />} />
        </Route>
      </Routes>
    </BrowserRouter>
  );
}

export default App;
