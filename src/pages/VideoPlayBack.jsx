import React, { useEffect, useState } from "react";
import classes from "../assets/styles/VideoPlayBack.module.css";
import { db_mockup } from "../assets/db-mockup";
import { getVideoById } from "../services/youtubeApi";
import { useParams } from "react-router-dom";
export default function VideoPlayback() {
	const { id } = useParams();
	const [playingVideo, setPlayingVideo] = useState({});

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
		console.log(playingVideo, "playingVideo");
	}, [id]);

	return (
		// <div className={classes.player}>
		// 	<div className={classes.player__video}>
		// 		<div className={classes.player__videoPlaying}></div>
		// 		<div className={classes.player__description}></div>
		// 	</div>
		// 	<div className={classes.preview__thumbnailContainer}>
		// 		<img src={playingVideo.snippet.thumbnails.standard.url} alt="" />
		// 	</div>
		// 	<div className={classes.preview__videoDescription}>
		// 		<img
		// 			className={classes.preview__avatar}
		// 			src={playingVideo.snippet.thumbnails.default.url}
		// 			alt=""
		// 		/>

		// 		<div className={classes.preview__description}>
		// 			<h4 className={classes.preview__headerTitle}>
		// 				{playingVideo.snippet.title.length > 50
		// 					? playingVideo.snippet.title.slice(0, 50) + "..."
		// 					: playingVideo.snippet.title}
		// 			</h4>
		// 			<p className={classes.preview__channelTitle}>
		// 				{playingVideo.snippet.channelTitle}
		// 			</p>
		// 			<p className={classes.preview__published}>
		// 				{playingVideo.snippet.publishedAt}
		// 			</p>
		// 		</div>
		// 	</div>
		// 	<div className={classes.player__videoList}></div>
		// </div>
		<div></div>
	);
}
