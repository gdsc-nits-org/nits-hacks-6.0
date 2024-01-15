import { useEffect } from "react";
import styles from "./404.module.scss";

export default function Custom404() {
	useEffect(() => {
		document.title = "My Page Title";
	}, []);
	return (
		<main className={styles.container}>
			<div className={styles.error}>404</div>
			<br />
			<br />
			<span className={styles.info}>File not found</span>
		</main>
	);
}
