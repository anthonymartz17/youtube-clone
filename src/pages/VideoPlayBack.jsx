import React, { useEffect, useState } from "react";
import classes from "../assets/styles/VideoPlayBack.module.css";
import { db_mockup } from "../assets/db-mockup";
import { getVideoById } from "../services/youtubeApi";
import { useParams } from "react-router-dom";
import VideoPreview from "../componets/VideoPreview";
export default function VideoPlayback() {
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
			<div className={classes.player}>
				<div className={classes.player__video}>
					<div className={classes.player__videoPlaying}></div>
					<div className={classes.player__description}></div>
				</div>
				<div className={classes.preview__thumbnailContainer}>
					<img src={playingVideo.snippet.thumbnails.maxres.url} alt="" />
				</div>
				<div className={classes.preview__videoDescription}>
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
				<div className={classes.player__videoList}></div>
			</div>
			<div className={classes.related_videos}>
				{db_mockup.items.map((ele, idx) => (
					<VideoPreview videoPreview={ele} isLandscape={false} key={idx} />
				))}
			</div>
		</div>
	);
}
