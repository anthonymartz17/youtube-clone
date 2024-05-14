import { useEffect, useState } from "react";
import { getVideos } from "../services/youtubeApi";
import VideoPreview from "../componets/VideoPreview";
import classes from "../assets/styles/Videos.module.css";
import { TagBar } from "../componets/TagBar";

export default function Home() {
	const [videos, setVideos] = useState({
		items: [],
	});

	async function getInitialList() {
		try {
			const videos = await getVideos();
			console.log(videos);
			setVideos(videos);
		} catch (error) {
			console.log(error);
		}
	}

	useEffect(() => {
		getInitialList();
	}, []);
	return (
		<div>
			<TagBar />
			<div className={classes.videos}>
				{videos.items.map((ele) => {
					return <VideoPreview videoPreview={ele} key={ele.id.videoId} />;
				})}
			</div>
		</div>
	);
}
