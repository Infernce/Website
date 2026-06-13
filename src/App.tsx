
import './App.css'
import { Routes, Route} from "react-router-dom";
import Home from './Pages/Home';
import Dev from './Pages/Dev';
import GetArticleRoutes from './ArticleRegistry';

function App() {
  
  return (
    <div>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="*" element={<h1>PAGE NOT FOUND</h1>} />
        <Route path="/about" element={<h1>ABOUT PAGE</h1>} />
        <Route path="/dev" element={<Dev />} />

        {GetArticleRoutes()}
      </Routes>
    </div>
  );
}

export default App
