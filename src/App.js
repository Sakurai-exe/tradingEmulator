import { Routes, Route } from "react-router-dom";
import { NavLink } from "react-router-dom";
import styles from "./App.module.scss";
import Archive from "./Archive/Archive";
import Trading from "./Trading/Trading";
import { useState, useEffect } from "react";

function App() {
	const [date, setDate] = useState(new Date());
	const refreshClock = () => {
		setDate(new Date());
	};

	useEffect(() => {
		const timerId = setInterval(refreshClock, 1000);
		return function cleanup() {
			clearInterval(timerId);
		};
	}, []);

	return (
		<div className={styles.App}>
			<div className={styles.app__wrapper}>
				<nav>
					<div className={styles.nav__element}>
						<NavLink
							to="/"
							className={({ isActive }) =>
								isActive ? styles.active : styles.notActive
							}
						>
							Trading
						</NavLink>
					</div>
					<div className={styles.nav__element}>
						<NavLink
							to="archive"
							className={({ isActive }) =>
								isActive ? styles.active : styles.notActive
							}
						>
							Archive
						</NavLink>
					</div>
				</nav>
				<div className={styles.currentTime}>{date.toLocaleTimeString()}</div>
				<div className={styles.content}>
					<Routes>
						<Route
							path="/"
							element={
								<Trading
									props={String(
										date.toLocaleDateString("ru-ru") +
											" " +
											date.toLocaleTimeString()
									)}
								/>
							}
						/>
						<Route path="archive" element={<Archive />} />
					</Routes>
				</div>
			</div>
		</div>
	);
}

export default App;
