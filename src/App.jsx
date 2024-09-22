import { BrowserRouter, Route, Routes } from "react-router-dom";
import Notes from "./pages/Notes";
import LoginRegister from "./pages/LoginRegister";

function App() {
  return (
    <div id="app" data-theme="dark">
      <div id="container">
        <BrowserRouter>
          <Routes>
            <Route path="/" element={<Notes />} />
            <Route path="/login" element={<LoginRegister />} />
          </Routes>
        </BrowserRouter>
      </div>
    </div>
  );
}

export default App;
