import { Route, BrowserRouter as Router, Routes } from "react-router-dom";
import FormCard from "./Components/FormCard";
import Movies from "./Components/Movies";

import 'antd/dist/antd.css';


function App() {
  return (
    <Router>
      <Routes>
        <Route  exact path="/" element={<FormCard/>}/>
        <Route exact path="/Peliculas/:actorName" element={<Movies />}>
        </Route>
      </Routes>
    </Router>
  );
}

export default App;
