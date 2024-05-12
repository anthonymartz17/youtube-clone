import { useState } from "react";
import Home from "./pages/Home";
import About from "./pages/About";
import Results from "./pages/Results";
import VideoPlayBack from "./pages/VideoPlayBack";
import TopBar from "./componets/TopBar";

import { BrowserRouter as Router, Routes, Route } from "react-router-dom";

import "./App.css";

function App() {
	return (
		<Router>
			<div className="w-screen">
				<TopBar />

				<div className="main__wrapper">
					<aside className="aside">
						side bar
						{/* 
				sidebar component goes here
				*/}
					</aside>
					<main className="main">
						<Routes>
							<Route path="/" element={<Home />} />
							<Route path="/about" element={<About />} />
							<Route path="/results" element={<Results />} />
							<Route path="/watch:id" element={<VideoPlayBack />} />
						</Routes>
					</main>
				</div>
			</div>
		</Router>
	);
}

export default App;
