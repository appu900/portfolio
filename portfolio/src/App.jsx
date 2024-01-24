import Home from "./pages/Home";
import Rootlayout from "./layouts/Rootlayout";
import { Route, Routes } from "react-router-dom";

function App() {
  return (
    <div className="bg-[#14131A]  h-auto">
      <Rootlayout>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/about" element={<div>About</div>} />
        </Routes>
      </Rootlayout>
    </div>
  );
}

export default App;
