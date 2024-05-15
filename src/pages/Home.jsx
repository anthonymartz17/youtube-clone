import { useEffect, useState } from "react";

import VideoPreview from "../componets/VideoPreview";
import classes from "../assets/styles/Videos.module.css";
import { TagBar } from "../componets/TagBar";
import { Link } from "react-router-dom";

export default function Home({ videos }) {
	console.log(videos)
	return (
		<div>
			<Link to="/watch/7NOSDKb0HlU" className="bg-blue-800">
				test
			</Link>
			<TagBar />
			<div className={classes.videos}>
				{videos.items.map((ele) => {
					return <VideoPreview videoPreview={ele} key={ele.id.videoId} />;
				})}
			</div>
		</div>
	);
}
