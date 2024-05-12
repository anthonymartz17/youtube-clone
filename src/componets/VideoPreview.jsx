import React from "react";
import classes from "../assets/styles/Videos.module.css";
export default function VideoPreview({ videoPreview }) {
	return (
		<div className={classes.preview}>
			<div className={classes.preview__thumbnailContainer}>
				<img src={videoPreview.snippet.thumbnails.default.url} alt="" />
			</div>
			<div className={classes.preview__description}>
				<img
					className={classes.preview__avatar}
					src={videoPreview.snippet.thumbnails.default.url}
					alt=""
				/>

				<div className={classes.preview__description}>
					<h4 className={classes.preview__headerTitle}>
						{videoPreview.snippet.title}
					</h4>
					<p className={classes.preview__channelTitle}>
						{videoPreview.snippet.channelTitle}
					</p>
					<p className={classes.preview__published}>
						{videoPreview.snippet.publishedAt}
					</p>
				</div>
			</div>
		</div>
	);
}
