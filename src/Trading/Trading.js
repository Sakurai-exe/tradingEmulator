import styles from "./Trading.module.scss";

function Trading() {
	const price__buy = styles.price__buy + " " + styles.priceButtons;
	const price__sell = styles.price__sell + " " + styles.priceButtons;
	return (
		<div className={styles.Trading}>
			<div className={styles.activeLine}></div>
			<div className={styles.price}>
				<div className={price__buy}>1.5766</div>
				<div className={styles.verticalLine}></div>
				<div className={price__sell}>1.5745</div>
			</div>
			<div className={styles.select}>
				<select>
					<option>EUR/</option>
					<option>RUR</option>
					<option>CN</option>
					<option selected>USD/EUR TOM</option>
				</select>
				<div class={styles.selectArrow}></div>
			</div>

			<div className={styles.tradeButtons}>
				<button className={styles.tradeButtons__buy}>Buy</button>
				<button className={styles.tradeButtons__sell}>Sell</button>
			</div>
		</div>
	);
}

export default Trading;