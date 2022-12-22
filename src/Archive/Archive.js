import { useSelector } from "react-redux";

import styles from "./Archive.module.scss";

function Archive() {
	const archiveItems = useSelector(state => state.archive);

	let res = archiveItems.map(function (item) {
		return (
			<tr>
				<td>{item.side}</td>
				<td>{item.price}</td>
				<td>{item.instrument}</td>
				<td>{item.volume}</td>
				<td>{item.timestamp}</td>
			</tr>
		);
	});
	// if (archiveItems <= 0) {
	// 	res = <div className={styles.emptyArchive}>Archive is empty!</div>;
	// }
	return (
		<div className={styles.Archive}>
			{archiveItems.length > 0 ? (
				<table rules="groups">
					<thead style={{ border: "1px solid #b3adad" }}>
						<tr>
							<th>Side</th>
							<th>Price</th>
							<th>Instrument</th>
							<th>Volume</th>
							<th>Timestamp</th>
						</tr>
					</thead>
					<tbody>{res}</tbody>
				</table>
			) : (
				<div className={styles.emptyArchive}>Archive is empty!</div>
			)}
		</div>
	);
}

export default Archive;
