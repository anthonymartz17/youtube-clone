import { db_mockup } from "../assets/db-mockup";
import.meta.env.VITE_YOUTUBE_KEY;

export async function getVideoById(id) {
	try {
		const found = db_mockup.items.find((ele) => ele.id === id);
		return found;
	} catch (error) {
		throw error;
	}
}
