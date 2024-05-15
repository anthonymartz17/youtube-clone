import { useEffect, useState } from "react";

import VideoPreview from "../componets/VideoPreview";
import classes from "../assets/styles/Videos.module.css";
import { TagBar } from "../componets/TagBar";


export default function Home({ videos }) {

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
