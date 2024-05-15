import React, { useEffect, useState } from "react";
import classes from "../assets/styles/VideoPlayBack.module.css";
import { db_mockup } from "../assets/db-mockup";
import { getVideos, getRelatedVideos } from "../services/youtubeApi";
import { useParams } from "react-router-dom";
import VideoPreview from "../componets/VideoPreview";
import Player from "../componets/video-playback/Player";

export default function VideoPlayback({ videos }) {
	const { id } = useParams();
	// const [playingVideo, setPlayingVideo] = useState(db_mockup.items[0]);
	const [relatedVideos, setRelatedVideos] = useState({items:[]});
	async function getVideosRelated(id) {
		try {
			const videos = await getRelatedVideos(id);
			console.log(videos);
		} catch (error) {
			console.log(error);
		}
	}
	async function getVideosResults(q) {
		try {
			const videos = await getVideos(q);
			setRelatedVideos(videos)
			console.log(videos,'new search');
		} catch (error) {
			console.log(error);
		}
	}

	useEffect(() => {
		const q = "bloopers";
		getVideosResults(q);
		console.log('rerendered???')
		// getVideosRelated(id);
	}, [id]);

	return (
		<div className={classes.video_playback}>
			<Player videoId={id} />
			<div className={classes.related_videos}>
				{relatedVideos.items.map((ele, idx) => (
					<VideoPreview videoPreview={ele} isLandscape={false} key={idx} />
				))}
			</div>
		</div>
	);
}
