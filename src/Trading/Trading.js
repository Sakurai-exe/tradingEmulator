import { useEffect, useLayoutEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import {
	USD_EURgenBuyAction,
	EUR_USDgenBuyAction,
	RUR_USDgenBuyAction,
	USD_RURgenBuyAction,
	RUR_EURgenBuyAction,
	EUR_RURgenBuyAction,
	USD_EURgenSellAction,
	EUR_USDgenSellAction,
	RUR_USDgenSellAction,
	USD_RURgenSellAction,
	RUR_EURgenSellAction,
	EUR_RURgenSellAction,
} from "../store/Actions";
import { randomRoll } from "../store/Randomizer";
import { slashRemover } from "../store/SlashRemover";
import styles from "./Trading.module.scss";

function Trading(props) {
	const dispatch = useDispatch();
	const price__buy = styles.price__buy + " " + styles.priceButtons;
	const price__sell = styles.price__sell + " " + styles.priceButtons;
	const [rerender, setRerender] = useState(false);
	const [selectValue, setSelectValue] = useState("USDEUR");
	const [buy, setBuy] = useState(1.0631);
	const [sell, setSell] = useState(1.0628);
	const handleTEst = e => {
		const targetValue = String(e.target.value);
		const s = slashRemover(targetValue.slice(0, -3)).trim();
		setSelectValue(s);
	};
	const USDEURBuy = useSelector(state => state.buy.USDEUR_b);
	const USDEURSell = useSelector(state => state.sell.USDEUR_s);
	const EURUSDBuy = useSelector(state => state.buy.EURUSD_b);
	const EURUSDSell = useSelector(state => state.sell.EURUSD_s);
	const RURUSDBuy = useSelector(state => state.buy.RURUSD_b);
	const RURUSDSell = useSelector(state => state.sell.RURUSD_s);
	const USDRURBuy = useSelector(state => state.buy.USDRUR_b);
	const USDRURSell = useSelector(state => state.sell.USDRUR_s);
	const RUREURBuy = useSelector(state => state.buy.RUREUR_b);
	const RUREURSell = useSelector(state => state.sell.RUREUR_s);
	const EURRURBuy = useSelector(state => state.buy.EURRUR_b);
	const EURRURSell = useSelector(state => state.sell.EURRUR_s);

	const handlePriceRender = () => {
		const buySell = new Map();
		buySell.set("USDEUR", [USDEURBuy, USDEURSell]);
		buySell.set("EURUSD", [EURUSDBuy, EURUSDSell]);
		buySell.set("RURUSD", [RURUSDBuy, RURUSDSell]);
		buySell.set("USDRUR", [USDRURBuy, USDRURSell]);
		buySell.set("RUREUR", [RUREURBuy, RUREURSell]);
		buySell.set("EURRUR", [EURRURBuy, EURRURSell]);
		const keyBuySell = buySell.get(selectValue);
		setBuy(keyBuySell[0]);
		setSell(keyBuySell[1]);
	};
	const BuyActionHandler = () => {
		if (selectValue === "USDEUR") {
			dispatch(USD_EURgenBuyAction());
		} else if (selectValue === "EURUSD") {
			dispatch(EUR_USDgenBuyAction());
		} else if (selectValue === "RURUSD") {
			dispatch(RUR_USDgenBuyAction());
		} else if (selectValue === "USDRUR") {
			dispatch(USD_RURgenBuyAction());
		} else if (selectValue === "RUREUR") {
			dispatch(RUR_EURgenBuyAction());
		} else if (selectValue === "EURRUR") {
			dispatch(EUR_RURgenBuyAction());
		} else return undefined;
		// handlePriceRender();
		setRerender(!rerender);
	};
	const SellActionHandler = () => {
		if (selectValue === "USDEUR") {
			dispatch(USD_EURgenSellAction());
		} else if (selectValue === "EURUSD") {
			dispatch(EUR_USDgenSellAction());
		} else if (selectValue === "RURUSD") {
			dispatch(RUR_USDgenSellAction());
		} else if (selectValue === "USDRUR") {
			dispatch(USD_RURgenSellAction());
		} else if (selectValue === "RUREUR") {
			dispatch(RUR_EURgenSellAction());
		} else if (selectValue === "EURRUR") {
			dispatch(EUR_RURgenSellAction());
		} else return undefined;
		// handlePriceRender();
	};
	useEffect(() => {
		let randomIntervalBuy = Math.random() * (5000 - 2000) + 2000;
		let randomIntervalSell = Math.random() * (4000 - 500) + 500;
		const timerBuy = setInterval(BuyActionHandler, randomIntervalBuy);
		const timerSell = setInterval(SellActionHandler, randomIntervalSell);
		console.log("1");
		handlePriceRender();
		return function cleanup() {
			clearInterval(timerBuy);
			clearInterval(timerSell);
		};
	}, [rerender]);
	// useEffect(() => {
	// 	let randomIntervalSell = randomRoll(2000, 3000);
	// 	const timerSell = setInterval(SellActionHandler, randomIntervalSell);
	// 	console.log("2");
	// 	handlePriceRender();
	// 	return function cleanup() {
	// 		clearInterval(timerSell);
	// 	};
	// }, [rerender]);
	return (
		<div className={styles.Trading}>
			<div className={styles.price}>
				<div className={price__buy}>{buy}</div>
				<div className={styles.verticalLine}></div>
				<div className={price__sell}>{sell}</div>
			</div>
			<div className={styles.select}>
				<select onChange={handleTEst} onMouseLeave={handlePriceRender}>
					<option>EUR/USD TOM</option>
					<option>RUR/USD TOM</option>
					<option>USD/RUR TOM</option>
					<option>RUR/EUR TOM</option>
					<option>EUR/RUR TOM</option>
					<option selected>USD/EUR TOM</option>
				</select>
				<div className={styles.selectArrow}></div>
			</div>

			<div className={styles.tradeButtons}>
				<button className={styles.tradeButtons__buy}>Buy</button>
				<button className={styles.tradeButtons__sell}>Sell</button>
			</div>
		</div>
	);
}

export default Trading;
