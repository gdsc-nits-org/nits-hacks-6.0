import styles from "./404.module.scss";

export default function Custom404() {
	return (
		<main className={styles.container}>
			<div className={styles.error}>404</div>
			<br />
			<br />
			<span className={styles.info}>File not found</span>
		</main>
	);
}
