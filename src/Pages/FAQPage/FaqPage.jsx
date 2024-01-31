import styles from "./FaqPage.module.scss";
import { Footer, Navbar2 } from "../../components";

const FaqPage = () => {
	const faqs = [
		{
			ques: "Q. Will the events be online or offline?",
			ans: (
				<>
					A. Software Track - Offline <br /> &nbsp;&nbsp;&nbsp;UI/UX Track and
					Coding Track - Hybrid
				</>
			),
			attr: "1",
			id: 1,
		},
		{
			ques: "Q. What is the minimum number of members in each team?",
			ans: (
				<>
					A. Coding and Software - 2 <br /> &nbsp;&nbsp;&nbsp;UI/UX - Individual
				</>
			),
			attr: "2",
			id: 2,
		},
		{
			ques: "Q. Are there any participation fees?",
			ans: <>A. No participation fees is needed.</>,
			attr: "3",
			id: 3,
		},
		{
			ques: "Q. Can students of other colleges participate remotely?",
			ans: <>A. UI/UX and Coding Track - Remote participation allowed.</>,
			attr: "4",
			id: 4,
		},
		{
			ques: "Q. Do we need to be very good in order to participate?",
			ans: (
				<>
					A. You need the basic knowledge of HTML, CSS to participate in
					Software track. That is more than enough. <br /> <br />
					Basic programming knowledge in any language is enough for Coding
					track. <br /> <br />
					Any sort of design thinking is welcome to participate in UI/UX. You
					need not be an expert in it.
				</>
			),
			attr: "5",
			id: 5,
		},
		{
			ques: "Q. What are the eligibility criteria for participation?",
			ans: (
				<>
					A. Anyone with the interest to learn is free to participate. No one is
					restricted from participating.
				</>
			),
			attr: "6",
			id: 6,
		},
		{
			ques: "Q. Are there any restrictions on the tools or technologies participants can use?",
			ans: (
				<>
					A. Participants are free to use any programming languages, frameworks,
					or tools that they prefer, as long as they meet the requirements of
					the respective tracks.
				</>
			),
			attr: "7",
			id: 7,
		},
		{
			ques: "Q. Will there be prizes for the winners?",
			ans: <>A. There are perks for both winners and participants.</>,
			attr: "8",
			id: 8,
		},
	];
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
					{faqs.map((faq) => (
						<ul className={styles.accordion} key={faq.id}>
							<li>
								<input type="checkbox" name="accordion" id={faq.attr} />
								<label className={styles.label} htmlFor={faq.attr}>
									{faq.ques}
								</label>

								<div className={styles.content}>
									<span>{faq.ans}</span>
								</div>
							</li>
						</ul>
					))}
				</div>
			</div>
			<Footer />
		</>
	);
};

export default FaqPage;
