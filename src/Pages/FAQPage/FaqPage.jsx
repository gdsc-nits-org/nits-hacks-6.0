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
				<div className={styles.faq_wrapper}>
					<ul className={styles.accordion}>
						<li>
							<input type="checkbox" name="accordion" id="1" />
							<label className={styles.label} htmlFor="1">
								Q. Will the events be online or offline?
							</label>

							<div className={styles.content}>
								<span>
									A. Software Track - Offline <br />
									&nbsp;&nbsp;&nbsp;UI/UX Track and Coding Track - Hybrid
								</span>
							</div>
						</li>
					</ul>

					<ul className={styles.accordion}>
						<li>
							<input type="checkbox" name="accordion" id="2" />
							<label className={styles.label} htmlFor="2">
								Q. What is the minimum number of members in each team?
							</label>

							<div className={styles.content}>
								<span>
									A. Coding and Software - 2 <br />
									&nbsp;&nbsp;&nbsp;UI/UX - Individual
								</span>
							</div>
						</li>
					</ul>

					<ul className={styles.accordion}>
						<li>
							<input type="checkbox" name="accordion" id="3" />
							<label className={styles.label} htmlFor="3">
								Q. Are there any participation fees?
							</label>

							<div className={styles.content}>
								<span>A. No participation fees is needed.</span>
							</div>
						</li>
					</ul>

					<ul className={styles.accordion}>
						<li>
							<input type="checkbox" name="accordion" id="4" />
							<label className={styles.label} htmlFor="4">
								Q. Can students of other colleges participate remotely?
							</label>

							<div className={styles.content}>
								<span>
									A. UI/UX and Coding Track - Remote participation allowed.
								</span>
							</div>
						</li>
					</ul>

					<ul className={styles.accordion}>
						<li>
							<input type="checkbox" name="accordion" id="5" />
							<label className={styles.label} htmlFor="5">
								Q. Do we need to be very good in order to participate?
							</label>

							<div className={styles.content}>
								<span>
									A. You need the basic knowledge of HTML, CSS to participate in
									Software track. That is more than enough. <br /> <br />
									Basic programming knowledge in any language is enough for
									Coding track. <br /> <br />
									Any sort of design thinking is welcome to participate in
									UI/UX. You need not be an expert in it.
								</span>
							</div>
						</li>
					</ul>

					<ul className={styles.accordion}>
						<li>
							<input type="checkbox" name="accordion" id="6" />
							<label className={styles.label} htmlFor="6">
								Q. What are the eligibility criteria for participation?
							</label>

							<div className={styles.content}>
								<span>
									A. Anyone with the interest to learn is free to participate.
									No one is restricted from participating.
								</span>
							</div>
						</li>
					</ul>

					<ul className={styles.accordion}>
						<li>
							<input type="checkbox" name="accordion" id="7" />
							<label className={styles.label} htmlFor="7">
								Q. Are there any restrictions on the tools or technologies
								participants can use?
							</label>

							<div className={styles.content}>
								<span>
									A. Participants are free to use any programming languages,
									frameworks, or tools that they prefer, as long as they meet
									the requirements of the respective tracks.
								</span>
							</div>
						</li>
					</ul>

					<ul className={styles.accordion}>
						<li>
							<input type="checkbox" name="accordion" id="8" />
							<label className={styles.label} htmlFor="8">
								Q. Will there be prizes for the winners?
							</label>

							<div className={styles.content}>
								<span>
									A. There are perks for both winners and participants.
								</span>
							</div>
						</li>
					</ul>
				</div>
			</div>
			<Footer />
		</>
	);
};

export default FaqPage;
