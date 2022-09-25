import { Routes, Route, Link } from "react-router-dom";
import Homepage from "~/pages/Home";
import ContactPage from "~/pages/Contact";
import NewPage from "~/pages/New";

function App() {
  return (
    <div>
      <nav>
        <ul>
          <li>
            <Link to="/">Home</Link>
          </li>
          <li>
            <Link to="/contact">contact</Link>
          </li>
          <li>
            <Link to="/new">new</Link>
          </li>
        </ul>
      </nav>
      <Routes>
        <Route path="/" element={<Homepage />} />
        <Route path="/contact" element={<ContactPage />} />
        <Route path="/new" element={<NewPage />} />
      </Routes>
    </div>
  );
}

export default App;
