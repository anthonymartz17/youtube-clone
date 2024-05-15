import React, { useEffect, useState } from "react";
import classes from "../assets/styles/VideoPlayBack.module.css";
import { db_mockup } from "../assets/db-mockup";
import { getVideoById } from "../services/youtubeApi";
import { useParams } from "react-router-dom";
import VideoPreview from "../componets/VideoPreview";
import Player from "../componets/video-playback/Player";

export default function VideoPlayback({ videos }) {
	const { id } = useParams();
	const [playingVideo, setPlayingVideo] = useState(db_mockup.items[0]);

	async function getVideo(id) {
		try {
			const video = await getVideoById(id);
			setPlayingVideo(video);
		} catch (error) {
			console.log(error);
		}
	}

	useEffect(() => {
		getVideo(id);
	}, [id]);

	return (
		<div className={classes.video_playback}>
			<Player videoId={id} />
			<div className={classes.related_videos}>
				{videos.items.map((ele, idx) => (
					<VideoPreview videoPreview={ele} isLandscape={false} key={idx} />
				))}
			</div>
		</div>
	);
}
