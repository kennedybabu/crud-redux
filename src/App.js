import { Route, Routes } from "react-router-dom";
import Home from './userPost/Home'
import CreatePost from "./userPost/CreatePost";

function App() {
  return (
    <div className="text-xl">
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path='/createPost' element={<CreatePost />} />
      </Routes>
    </div>
  );
}

export default App;
