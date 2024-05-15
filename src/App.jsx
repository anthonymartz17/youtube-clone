import { useState } from "react";
import Home from "./pages/Home";
import About from "./pages/About";
import Results from "./pages/Results";
import VideoPlayBack from "./pages/VideoPlayBack";
import TopBar from "./componets/TopBar";
import { Navigation } from "./componets/Navigation";
import { getVideos } from "./services/youtubeApi";
import { useEffect } from "react";

import { BrowserRouter as Router, Routes, Route } from "react-router-dom";

import "./App.css";

function App() {
	const [col, setCol] = useState(true);
	const [videos, setVideos] = useState({
		items: [],
	});

	async function getVideosList(q) {
		try {
			const fetchedVideos = await getVideos(q);

			setVideos(fetchedVideos);
		} catch (error) {
			console.log(error);
		}
	}

	useEffect(() => {
		if (videos.items.length === 0) {
			getVideosList();
		}
	}, []);

	return (
		<Router>
			<div className="w-screen">
				<TopBar col={col} setCol={setCol} onGetVideosList={getVideosList} />
				<div className={col ? "main__wrapper" : "main__wrapper-toggle"}>
					{col && (
						<aside className="aside">
							<Navigation />
						</aside>
					)}
					<main className="main">
						<Routes>
							<Route path="/" element={<Home videos={videos} />} />
							<Route path="/about" element={<About />} />
							<Route path="/results" element={<Results videos={videos} />} />
							<Route
								path="/watch/:id"
								element={<VideoPlayBack videos={videos} />}
							/>
						</Routes>
					</main>
				</div>
			</div>
		</Router>
	);
}

export default App;
