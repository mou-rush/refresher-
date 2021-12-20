import { Routes, Route } from "react-router-dom";
import CommentBox from "../components/CommentBox";
import CommentList from "../components/CommentList";

function App() {
  return (
    <div className="App">
      <Routes>
        <Route path="/post" element={<CommentBox />} />
        <Route path="/" element={<CommentList />} />
      </Routes>
    </div>
  );
}

export default App;
