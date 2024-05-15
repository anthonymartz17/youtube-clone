import React, { useEffect, useRef } from "react";
// import YouTubePlayer from "youtube-player";
import ReactPlayer from "react-player";
import classes from "../../assets/styles/VideoPlayBack.module.css";

export default function Player({ videoId }) {
	// const playerRef = useRef(null);
	// console.log(playerRef, "playerref");
	// useEffect(() => {
	// 	const player = YouTubePlayer("player", {
	// 		videoId: videoId,
	// 		width: "100%",
	// 		height: "400px",
	// 		playerVars: {
	// 			autoplay: 1,
	// 		},
	// 	});

	// 	return () => {
	// 		player.destroy();
	// 	};
	// }, [videoId]);

	return (
		<div className={classes.player}>
			{/* <div className={classes.player__video}>
				<div className={classes.player__videoPlaying}></div>
				<div className={classes.player__description}></div>
			</div> */}
			<div className={classes.player__thumbnailContainer}>
				<ReactPlayer
					className={classes.player__player}
					url={`https://www.youtube.com/watch?v=${videoId}`}
					controls={false}
				/>
			</div>
			{/* <div className={classes.preview__videoDescription}>
				<h1 className={classes.player__headerTitle}>
					{playingVideo.snippet.title}
				</h1>
				<div className={classes.player__channel}>
					<img
						className={classes.player__avatar}
						src={playingVideo.snippet.thumbnails.default.url}
						alt=""
					/>

					<div className={classes.preview__description}>
						<p className={classes.preview__channelTitle}>
							{playingVideo.snippet.channelTitle}
						</p>
						<p className={classes.preview__published}>
							{playingVideo.snippet.publishedAt}
						</p>
					</div>
				</div>
			</div>
			<div className={classes.player__videoList}></div> */}
		</div>
	);
}
