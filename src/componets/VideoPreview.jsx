import React from "react";
import classes from "../assets/styles/Videos.module.css";
import { Link } from "react-router-dom";
export default function VideoPreview({ videoPreview, isLandscape = true }) {
	return (
		<Link
			to={`/watch/${videoPreview.id.videoId}`}
			className={isLandscape ? classes.preview : classes.preview__vertical}
		>
			<div className={classes.preview__thumbnailContainer}>
				<img src={videoPreview.snippet.thumbnails.high.url} alt="" />
			</div>
			<div
				className={
					isLandscape
						? classes.preview__videoDescription
						: classes.preview__videoDescriptionVertical
				}
			>
				{isLandscape && (
					<img
						className={classes.preview__avatar}
						src={videoPreview.snippet.thumbnails.high.url}
						alt=""
					/>
				)}

				<div className={classes.preview__description}>
					<h4 className={classes.preview__headerTitle}>
						{videoPreview.snippet.title.length > 50
							? videoPreview.snippet.title.slice(0, 50) + "..."
							: videoPreview.snippet.title}
					</h4>
					<p className={classes.preview__channelTitle}>
						{videoPreview.snippet.channelTitle}
					</p>
					<p className={classes.preview__published}>
						{videoPreview.snippet.publishedAt}
					</p>
				</div>
			</div>
		</Link>
	);
}
