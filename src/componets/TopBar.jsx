import classes from "../assets/styles/TopBar.module.css";
import logo from "../assets/youtoo-icon.svg";
import { Link } from "react-router-dom";
export default function TopBar() {
	return (
		<header>
			<nav className={classes.nav}>
				<div className="flex gap-2 items-center">


				<div><i className="fa-solid fa-bars"></i></div>

					<Link to="/">
						<div>
						
							<img src={logo} alt="" style={{ width: "100px" }} />
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
