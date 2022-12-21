import { useEffect, useState } from "react";
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
import { slashRemover } from "../store/SlashRemover";
import styles from "./Trading.module.scss";

function Trading(props) {
	const dispatch = useDispatch();
	const price__buy = styles.price__buy + " " + styles.priceButtons;
	const price__sell = styles.price__sell + " " + styles.priceButtons;
	const [rerender, setRerender] = useState(false);
	const [prefix, setPrefix] = useState("USDEUR");
	const [popupPrefix, setPopupPrefix] = useState("USD/EUR TOM");
	const [buy, setBuy] = useState(1.0631);
	const [sell, setSell] = useState(1.0628);
	const [operation, setOperation] = useState("BUY");
	const [operationColor, setOperationColor] = useState({});
	const [volume, setVolume] = useState(1);
	const [zIndexStyle, setZindexStyle] = useState({
		zIndex: -3,
		visibility: "hidden",
	});
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

	const handleSetPrefix = e => {
		const targetValue = String(e.target.value);
		const s = slashRemover(targetValue.slice(0, -3)).trim();
		setPrefix(s);
		setPopupPrefix(targetValue);
	};

	const handlePriceRender = () => {
		const buySell = new Map();
		buySell.set("USDEUR", [USDEURBuy, USDEURSell]);
		buySell.set("EURUSD", [EURUSDBuy, EURUSDSell]);
		buySell.set("RURUSD", [RURUSDBuy, RURUSDSell]);
		buySell.set("USDRUR", [USDRURBuy, USDRURSell]);
		buySell.set("RUREUR", [RUREURBuy, RUREURSell]);
		buySell.set("EURRUR", [EURRURBuy, EURRURSell]);
		const keyBuySell = buySell.get(prefix);
		setBuy(keyBuySell[0]);
		setSell(keyBuySell[1]);
	};

	const BuyActionHandler = () => {
		if (prefix === "USDEUR") {
			dispatch(USD_EURgenBuyAction());
		} else if (prefix === "EURUSD") {
			dispatch(EUR_USDgenBuyAction());
		} else if (prefix === "RURUSD") {
			dispatch(RUR_USDgenBuyAction());
		} else if (prefix === "USDRUR") {
			dispatch(USD_RURgenBuyAction());
		} else if (prefix === "RUREUR") {
			dispatch(RUR_EURgenBuyAction());
		} else if (prefix === "EURRUR") {
			dispatch(EUR_RURgenBuyAction());
		} else return undefined;
		setRerender(!rerender);
	};

	const SellActionHandler = () => {
		if (prefix === "USDEUR") {
			dispatch(USD_EURgenSellAction());
		} else if (prefix === "EURUSD") {
			dispatch(EUR_USDgenSellAction());
		} else if (prefix === "RURUSD") {
			dispatch(RUR_USDgenSellAction());
		} else if (prefix === "USDRUR") {
			dispatch(USD_RURgenSellAction());
		} else if (prefix === "RUREUR") {
			dispatch(RUR_EURgenSellAction());
		} else if (prefix === "EURRUR") {
			dispatch(EUR_RURgenSellAction());
		} else return undefined;
	};

	const handlePopUp = e => {
		setZindexStyle({
			zIndex: 2,
			visibility: "visible",
		});
		setOperation(String(e.target.value));
		if (String(e.target.value) === "BUY") {
			setOperationColor(styles.buyColor);
		} else if (String(e.target.value) === "SELL")
			setOperationColor(styles.sellColor);
		else setOperationColor(null);
	};
	const handleClosePopup = () => {
		setZindexStyle({
			zIndex: -3,
			visibility: "hidden",
		});
		setVolume(1);
	};
	const handleSubmit = () => {
		setZindexStyle({
			zIndex: -3,
			visibility: "hidden",
		});
		setVolume(1);
	};

	const volumeChangeAlways = e => {
		let number = Math.trunc(e.target.value);
		let array = [...number.toString()].map(Number);
		if (array.length > 7 || e.target.value > 9999999) {
			setVolume(9999999);
		} else if (array.length < 0 || e.target.value < 0) {
			setVolume(1);
		} else {
			setVolume(e.target.value);
		}
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

	return (
		<div className={styles.Trading}>
			<div className={styles.price}>
				<div className={price__buy}>{buy}</div>
				<div className={styles.verticalLine}></div>
				<div className={price__sell}>{sell}</div>
			</div>
			<div className={styles.select}>
				<select onChange={handleSetPrefix} onMouseLeave={handlePriceRender}>
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
				<button
					className={styles.tradeButtons__buy}
					value={"BUY"}
					onClick={handlePopUp}
				>
					Buy
				</button>
				<div className={styles.popup} style={zIndexStyle}>
					<div className={styles.popup__title}>Make order</div>
					<div className={operationColor}>
						<span>{operation}</span> {buy} {popupPrefix}
					</div>
					<br />
					<span>
						Volume{" "}
						<input
							type="number"
							name="volume"
							value={volume}
							min={1}
							maxLength="7"
							onChange={volumeChangeAlways}
							required
						/>
					</span>
					<div className={styles.popup__buttons}>
						<button
							className={[
								styles.popupButtons__cancelBtn,
								styles.popupButtons__button,
							].join(" ")}
							onClick={handleClosePopup}
						>
							CANCEL
						</button>
						<button
							className={[
								styles.popupButtons__okBtn,
								styles.popupButtons__button,
							].join(" ")}
							onClick={handleSubmit}
						>
							OK
						</button>
					</div>
				</div>
				<button
					className={styles.tradeButtons__sell}
					value={"SELL"}
					onClick={handlePopUp}
				>
					Sell
				</button>
			</div>
		</div>
	);
}

export default Trading;
