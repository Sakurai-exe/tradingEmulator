import styles from "./App.module.scss";
// import Archive from "./Archive/Archive";
import Trading from "./Trading/Trading";
import { useState, useEffect } from "react";

function App() {
	const [date, setDate] = useState(new Date());

	function refreshClock() {
		setDate(new Date());
	}
	useEffect(() => {
		const timerId = setInterval(refreshClock, 1000);
		return function cleanup() {
			clearInterval(timerId);
		};
	}, []);

	return (
		<div className={styles.app}>
			<div className={styles.app__wrapper}>
				<nav>
					<div className={styles.nav__element}>
						<a href="#">Trading</a>
					</div>
					<div className={styles.nav__element}>
						<a href="#">Archive</a>
					</div>
				</nav>
				<div className={styles.currentTime}>{date.toLocaleTimeString()}</div>
				<div className={styles.content}>
					<Trading />
					{/* <Archive /> */}
				</div>
			</div>
		</div>
	);
}

export default App;
