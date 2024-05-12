import classes from "../assets/styles/TopBar.module.css";

export default function TopBar() {
	return (
		<header>
			<nav className={classes.nav}>
				<div className="flex gap-2 items-center">
					<div><i className="fa-solid fa-bars"></i></div>
					<div>YouToo</div>
				</div>
				<form className={classes.nav__searchbar}>
					<input type="text" placeholder="Search" />
				</form>
			</nav>
		</header>
	);
}
