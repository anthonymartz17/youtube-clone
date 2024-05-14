import classes from "../assets/styles/TopBar.module.css";
import logo from "../assets/youtoo-icon.svg";
import { Link } from "react-router-dom";
import { useState } from "react";

export default function TopBar({setCol,col}) {
	return (
		<header>
			<nav className={classes.nav}>
				<div className="flex gap-2 items-center ">
					<div>
						<i onClick={()=>setCol(!col)} className="fa-solid fa-bars cursor-pointer"></i>
					</div>

					<Link to="/">
						<div>
							<img src={logo} alt="" style={{ width: "80px" }} />
						</div>
					</Link>
				</div>
				<form className={classes.nav__form}>
					<input
						className={classes.nav__searchbar}
						type="text"
						placeholder="Search"
					/>
				</form>
			</nav>
		</header>
	);
}
