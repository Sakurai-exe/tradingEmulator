import styles from "./App.module.scss";
// import Archive from "./Archive/Archive";
import Trading from "./Trading/Trading";

function App() {
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
				<div className={styles.currentTime}>21:00</div>
				<div className={styles.content}>
					<Trading />
					{/* <Archive /> */}
				</div>
			</div>
		</div>
	);
}

export default App;
