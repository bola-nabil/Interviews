import NavBar from "./components/Nav/NavBar";
import Home from './pages/front-end/Home';
import HtmlInterview from "./pages/front-end/HtmlInterview";
import CssInterview from "./pages/front-end/CssInterview";
import JavaScriptInterview from "./pages/front-end/JavaScriptInterview";
import ReactInterview from "./pages/front-end/ReactInterview";
import NotFound from "./pages/NotFound";
import { Routes, Route } from "react-router-dom";

function App() {
  return (
    <>
      <NavBar />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/html" element={<HtmlInterview />} />
        <Route path="/css" element={<CssInterview />} />
        <Route path="/javascript" element={<JavaScriptInterview />} />
        <Route path="/react" element={<ReactInterview />} />
        <Route path="*" element={<NotFound />} />
      </Routes>
    </>
  );
}

export default App;
