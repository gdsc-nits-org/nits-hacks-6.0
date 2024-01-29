import styles from "./FaqPage.module.scss";
import { Footer, Navbar2 } from "../../components";

const FaqPage = () => {
	return (
		<>
			<Navbar2 />
			<div className={styles.MainDiv}>
				<h1 className={styles.title}>FREQUENTLY ASKED QUESTIONS</h1>
				<img
					src="https://res.cloudinary.com/dvra8rj4n/image/upload/v1706544920/NITSX/aqtbggdpooofxlccyxxf.png"
					alt=""
				/>
				<ul className={styles.accordion}>
					<li>
						<input type="checkbox" name="accordion" id="1" />
						<label className={styles.label} htmlFor="1">
							Q. Lorem ipsum dolor sit amet consectetur adipisicing elit. Minus
							reprehenderit sapiente quod veritatis consequatur
						</label>

						<div className={styles.content}>
							<span>
								A. Lorem ipsum dolor sit, amet consectetur adipisicing elit.
								Adipisci, suscipit tempora molestiae laboriosam praesentium
								ipsum iure distinctio ipsam accusamus quam quisquam aliquam
								itaque ratione cupiditate sint. Magnam sed sunt perferendis,
								exercitationem atque id cumque sapiente nihil praesentium
								deleniti officiis facere alias ratione, ullam asperiores harum
								hic aperiam accusamus sit assumenda veniam! Dolorem nulla
								voluptate officiis!
							</span>
						</div>
					</li>
				</ul>
				<ul className={styles.accordion}>
					<li>
						<input type="checkbox" name="accordion" id="2" />
						<label className={styles.label} htmlFor="2">
							Q. Lorem ipsum dolor sit amet consectetur adipisicing elit. Minus
							reprehenderit sapiente quod veritatis consequatur
						</label>
						<div className={styles.content}>
							<span>
								Lorem ipsum dolor sit amet consectetur adipisicing elit.
								Corrupti dicta officiis itaque magnam eveniet aspernatur.
								Tenetur voluptatum qui eaque earum officia placeat, culpa totam
								sit repellat nesciunt architecto unde quidem!
							</span>
						</div>
					</li>
				</ul>
			</div>
			<Footer />
		</>
	);
};

export default FaqPage;
