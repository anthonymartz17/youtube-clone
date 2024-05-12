import React, { useState } from "react";
import { db_mockup } from "../assets/db-mockup";
import VideoPreview from "../componets/VideoPreview";
import classess from "../assets/styles/Videos.module.css";

export default function VideoList() {
	const [videos, setVideos] = useState(db_mockup);
	return (
		<div className={classess.videos}>
			{videos.items.map((ele, idx) => {
				return <VideoPreview videoPreview={ele} key={idx} />;
			})}
		</div>
  );
  

  
}
