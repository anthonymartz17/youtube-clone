import classes from "../assets/styles/TopBar.module.css";
import logo from "../assets/youtoo-icon.svg";
import { Link } from "react-router-dom";
import { useState } from "react";
import { getVideos } from "../services/youtubeApi";

export default function TopBar({ setCol, col, onGetVideosList }) {
	const [query, setQuery] = useState("");

	function searchVideos(e) {
		e.preventDefault();
		onGetVideosList(query);
	}
	return (
		<header>
			<nav className={classes.nav}>
				<div className="flex gap-2 items-center ">
					<div>
						<i
							onClick={() => setCol(!col)}
							className="fa-solid fa-bars cursor-pointer"
						></i>
					</div>

					<Link to="/">
						<div>
							<img src={logo} alt="" style={{ width: "80px" }} />
						</div>
					</Link>
				</div>
				<form className={classes.nav__form} onSubmit={searchVideos}>
					<input
						className={classes.nav__searchbar}
						type="text"
						placeholder="Search"
						onChange={(e) => setQuery(e.target.value)}
						value={query}
					/>
				</form>
			</nav>
		</header>
	);
}
