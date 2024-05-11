import { useState } from "react";
import Home from "./pages/Home";
import About from "./pages/About";
import Results from "./pages/Results";
import VideoPlayBack from "./pages/VideoPlayBack";

import { BrowserRouter as Router, Routes, Route } from "react-router-dom";

import "./App.css";

function App() {
	return (
		<>
			<Router>
				<Routes>
					<Route path="/" element={<Home />} />
					<Route path="/about" element={<About />} />
					<Route path="/results" element={<Results />} />
					<Route path="/watch:id" element={<VideoPlayBack />} />
				</Routes>
			</Router>
		</>
	);
}

export default App;
