import "./App.css";
import { Routes, Route } from "react-router-dom";
import {
  Navigation,
  Footer,
  News,
  Home,
  Todo,
  CreateRecord,
  ShowRecords,
  SingleNews,
} from "../src/components";
function App() {
  return (
    <div className="App">
      <Navigation />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/news" element={<News />} />
        <Route path="/todo" element={<Todo />} />
        <Route path="/create" element={<CreateRecord />} />
        <Route path="/show" element={<ShowRecords />} />
        <Route path="/singlenews/:newsId" element={<SingleNews />} />
      </Routes>
      <Footer />
    </div>
  );
}

export default App;
