import { db_mockup } from "../assets/db-mockup";
import axios from "axios";

const API_KEY = import.meta.env.VITE_YOUTUBE_KEY;
const URL = import.meta.env.VITE_YOUTUBE_SEARCH;

export async function getVideos(query = "recommended videos", maxResults = 20) {
	console.log(API_KEY)
	try {
		const response = await axios.get(URL, {
			params: {
				key: API_KEY,
				part: "snippet",
				maxResults: maxResults,
				type: "video",
				q: query,
			},
		});
		console.log(response,'responessssss')
		return response.data;
	} catch (error) {
		console.log(error)
	}
}

export async function getVideoById(id) {
	try {
		const found = db_mockup.items.find((ele) => ele.id === id);
		return found;
	} catch (error) {
		throw error;
	}
}
