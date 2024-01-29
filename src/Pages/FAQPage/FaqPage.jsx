import styles from "./FaqPage.module.scss";
import { Footer, Navbar2 } from "../../components";

const FaqPage = () => {
	return (
		<>
			<Navbar2 />
			<div className={styles.MainDiv}>
				<h1 className={styles.title}>FREQUENTLY ASKED QUESTIONS</h1>
			</div>
			<Footer />
		</>
	);
};

export default FaqPage;
