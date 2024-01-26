import { Link } from "react-router-dom";
import { Footer, Navbar2 } from "../../components";
import styles from "./EventPage.module.scss";
import { useParams } from "react-router-dom";
import { useEffect, useState } from "react"
const EventPage = () => {
	const data = [
		{
			name: "Software Track", para1: "Get ready to embark on a journey of unparalleled innovation as NITS HACKS, the epicentre of technological brilliance, proudly presents the Software Track – a platform where your coding prowess meets real-world challenges! The Software Track challenges you to push the boundaries of your skills and craft groundbreaking solutions using your preferred tech stack, be it an Android app or a cutting-edge website. Within a specified time limit, participants will immerse themselves in the world of coding, creating solutions that transcend the ordinary.",
			para2: "Registration is now open! Please click the provided link to complete your registration.Our seasoned panel of seniors will meticulously assess the entries based on solution effectiveness and final product design. Gear up for the ultimate tech adventure and seize the opportunity to be a part of something extraordinary. ",
			link: "https://forms.gle/5MRD8AZkpv3yJ1ku5", img: "https://res.cloudinary.com/dgnlmdkyq/image/upload/v1706274690/Nits%20hacks%206.0/Events/wnivqlvhyuljhmkczkdh.webp"
		},
		{
			name: "UI/UX Track", para1: "Greetings Developers! As NITS HACKS enters its sixth edition, the hackathon continues to evolve, introducing new and exciting elements. We are particularly thrilled to unveil the UI/UX track, a pathway designed for enthusiasts eager to showcase their artistic talents. In this edition, NITS HACKS places a renewed emphasis on UI/UX, exposing tech enthusiasts to the captivating world of design and its crucial role in technology. This track serves as an educational platform, offering skill development and networking opportunities for beginners and prizes worth 30K to the winners.Comprising three distinct stages—moodboarding, designing, and prototyping—the UI/ UX track challenges participants to showcase the perfect fusion of creativity and technical expertise.The winning team will be the epitome of excellence, demonstrating a harmonious blend of these essential skills.",
			para2: "Registration is now open! Please click the provided link to complete your registration.Our seasoned panel of seniors will meticulously assess the entries based on solution effectiveness and final product design. Gear up for the ultimate tech adventure and seize the opportunity to be a part of something extraordinary. ",
			link: "https://forms.gle/puMdwWKroEVnuh937", img: "https://res.cloudinary.com/dgnlmdkyq/image/upload/v1706274690/Nits%20hacks%206.0/Events/f18k3hezqezvvh1r98kx.webp"
		},
		{
			name: "Coding Track", para1: "Get ready to embark on a journey of unparalleled innovation as NITS HACKS, the epicentre of technological brilliance, proudly presents the Software Track – a platform where your coding prowess meets real-world challenges! The Software Track challenges you to push the boundaries of your skills and craft groundbreaking solutions using your preferred tech stack, be it an Android app or a cutting-edge website. Within a specified time limit, participants will immerse themselves in the world of coding, creating solutions that transcend the ordinary.",
			para2: "Registration is now open! Please click the provided link to complete your registration.Our seasoned panel of seniors will meticulously assess the entries based on solution effectiveness and final product design. Gear up for the ultimate tech adventure and seize the opportunity to be a part of something extraordinary. ",
			link: "https://forms.gle/5MRD8AZkpv3yJ1ku5", img: "https://res.cloudinary.com/dgnlmdkyq/image/upload/v1706274690/Nits%20hacks%206.0/Events/f18k3hezqezvvh1r98kx.webp"
		}
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
					<a href={data[id - 1].link} target="_blank" className={styles.btn_1_new}>
							REGISTER NOW
					</a>
					
					<p className={styles.desc}>
						{data[id - 1].para1}
					</p>

					<p className={styles.desc}>
						{data[id - 1].para2}
					</p>
					<div className={styles.btn_wrapper}>
						<a href={data[id - 1].link} target="_blank" className={styles.btn_1}>
							REGISTER NOW
						</a>
						<Link to="/" className={styles.btn_2}>
							BACK TO HOME
						</Link>
					</div>
				</div>
				<div className={styles.event_poster}>
					<img
						className={styles.poster}
						src={data[id - 1].img}
						alt="POSTER"
					/>
				</div>
			</div>
			<Footer />
		</>
	);
};

export default EventPage;
