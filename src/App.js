import { BrowserRouter, Routes, Route } from 'react-router-dom';
import Layout from './components/Layout';
import Posts from './components/Posts';
import Users from './components/Users';
import Albums from './components/Albums';
import Photos from './components/Photos';
import Todo from './components/Todo';

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Layout />}>
          <Route index element={<Posts />} />
          <Route path="/users" element={<Users />} />
          <Route path="/albums" element={<Albums />} />
          <Route path="/Photos" element={<Photos />} />
          <Route path="/todo" element={<Todo />} />
        </Route>
      </Routes>
    </BrowserRouter>
  );
}

export default App;
