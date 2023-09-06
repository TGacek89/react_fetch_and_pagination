import { Route, Routes } from "react-router-dom";
import Country from "./components/Country";
import { Get } from "./Get";
import "./App.css";

function App() {
  return (
    <div className="App">
      <Get />
      <Routes>
        <Route path="/:id" element={<Country />} />
      </Routes>
    </div>
  );
}

export default App;
