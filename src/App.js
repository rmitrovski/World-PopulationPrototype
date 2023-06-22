
import './App.css';
import Nav from './components/Nav.js';
import Home from './components/Home.js';
import Map from './components/Map.js';
import { BrowserRouter, Routes, Route } from 'react-router-dom'; //Imports Router from React-Router-Dom

function App() {
  return (
	<><Nav /><div>
		  <BrowserRouter>
			  <Routes>
				  <Route path="/" element={<Home />} />
				  <Route path="/Home" element={<Home />} />
				  <Route path="/Map" element={<Map />} />
			  </Routes>
		  </BrowserRouter>
	  </div></>
  );
}

export default App;
