import { Link } from "react-router-dom";
import { Footer, Navbar2 } from "../../components";
import styles from "./EventPage.module.scss";
import { useParams } from "react-router-dom";
const EventPage = () => {
	const data = [
		{
			name: "Software Track",
			para1:
				"Get ready to embark on a journey of unparalleled innovation as NITS HACKS, the epicentre of technological brilliance, proudly presents the Software Track - a platform where your coding prowess meets real-world challenges! The Software Track challenges you to push the boundaries of your skills and craft groundbreaking solutions using your preferred tech stack, be it an Android app or a cutting-edge website. Within a specified time limit, participants will immerse themselves in the world of coding, building solutions that transcend the ordinary.",
			para2:
				"Registration is now open! Please click the provided link to complete your registration. Gear up for the ultimate tech adventure and seize the opportunity to be a part of something extraordinary. Note: For outside teams, travel and accommodation expenses would have to borne by the teams themselves.",
			link: "https://drive.google.com/file/d/1YFBT7d1JLIrdheaS2lqTXAbwYdmKxCmw/view",
			img: "https://res.cloudinary.com/dgnlmdkyq/image/upload/v1706274690/Nits%20hacks%206.0/Events/wnivqlvhyuljhmkczkdh.webp",
		},
		{
			name: "UI/UX Track",
			para1:
				"We are particularly thrilled to unveil the UI/UX track, a pathway designed for enthusiasts eager to showcase their artistic talents. In this edition, NITS HACKS places a renewed emphasis on UI/UX, exposing tech enthusiasts to the captivating world of design and its crucial role in technology. This track serves as an educational platform, offering skill development and networking opportunities for beginners and prizes worth 30K to the winners. Comprising three distinct stages — moodboarding, designing, and prototyping — the UI/ UX track challenges participants to showcase the perfect fusion of creativity and technical expertise. The winning team will be the epitome of excellence, demonstrating a harmonious blend of these essential skills.",
			para2:
				"Registration is now open! Please click the provided link to complete your registration. Our seasoned panel of seniors will meticulously assess the entries based on solution effectiveness and final product design. Gear up for the ultimate tech adventure and seize the opportunity to be a part of something extraordinary.",
			link: "https://drive.google.com/file/d/1wOwwD-CnhXQd-Epjkn2BrWPOPjMUBaWE/view",
			img: "https://res.cloudinary.com/dgnlmdkyq/image/upload/v1706274690/Nits%20hacks%206.0/Events/f18k3hezqezvvh1r98kx.webp",
		},
		{
			name: "Coding Track",
			para1:
				"Dive into challenges that test your coding skills and be the smartest hands on the keyboard. Tackle problems, showcase your finesse, and progress to the next rounds. Join us to learn, compete, and make your code stand out among top coders! The contest will adhere to ICPC guidelines. The event comprises preliminary and final rounds. The final round, an online competition, awaits the top 30 preliminary teams out of which 10 spots are reserved for the NITS Team (excluding the top 20). Seize this opportunity to showcase your coding prowess and compete in an engaging environment!",
			para2:
				"Guidelines: 1. A team of 2-3 members from the same college can participate in the contest. 2. An eligible individual is allowed to join only one team. 3. It's crucial to register the team through the provided link below, compliance will result in disqualification",
			link: "https://codeforces.com/gym/496831",
			img: "https://res.cloudinary.com/drffnopta/image/upload/v1706291317/NITS_HACKS_5_ddvhwr.webp",
		},
	];
	const { id } = useParams();

	return (
		<>
			<Navbar2 />
			<div className={styles.MainDiv}>
				<div className={styles.event_info}>
					<img
						className={styles.head_img}
						src="https://res.cloudinary.com/dvra8rj4n/image/upload/v1705159558/NITSX/s8e6cjvpjyvgocbtbjpt.svg"
						alt="Header"
					/>
					<h1 className={styles.title}>{data[id - 1].name}</h1>
					<div className={styles.event_poster_new}>
						<img
							className={styles.poster}
							src={data[id - 1].img}
							alt="POSTER"
						/>
					</div>
					<a
						href={data[id - 1].link}
						target="_blank"
						rel="noreferrer"
						className={styles.btn_1_new}
					>
						PROBLEM STATEMENTS
					</a>

					<p className={styles.desc}>{data[id - 1].para1}</p>

					<p className={styles.desc}>{data[id - 1].para2}</p>
					<div className={styles.btn_wrapper}>
						<a
							href={data[id - 1].link}
							target="_blank"
							rel="noreferrer"
							className={styles.btn_1}
						>
							PROBLEM STATEMENTS
						</a>
						<Link to="/" className={styles.btn_2}>
							BACK TO HOME
						</Link>
					</div>
				</div>
				<div className={styles.event_poster}>
					<img className={styles.poster} src={data[id - 1].img} alt="POSTER" />
				</div>
			</div>
			<Footer />
		</>
	);
};

export default EventPage;
