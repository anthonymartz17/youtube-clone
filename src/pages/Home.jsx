
import { useState } from "react";
import { getVideos } from "../services/youtubeApi";
import VideoPreview from "../componets/VideoPreview";
import classes from "../assets/styles/Videos.module.css";
import VideoList from "../componets/VideoList";
import { TagBar } from "../componets/TagBar";

export default function Home() {
	const [videos, setVideos] = useState({
		items: [],
	});

	async function getInitialList() {
		try {
			const videos = await getVideos();
        console.log(videos)
			setVideos(videos);
		} catch (error) {
			console.log(error);
		}
	}
	return (

		<div>
				<TagBar />
			<button onClick={getInitialList} className="bg-blue-800 w-80">
				test
			</button>

			<div className={classes.videos}>
				{videos.items.map((ele, idx) => {
					return <VideoPreview videoPreview={ele} key={idx} />;
				})}
			</div>

			<div className="">
				<VideoList />

			</div>
		</div>
	);
}
