import styles from "./EventCard.module.scss";
const Event = () => {
	const events = [
		{
			id: 1,
			name: "Software Track",
			img: "https://res.cloudinary.com/dgnlmdkyq/image/upload/v1706274690/Nits%20hacks%206.0/Events/wnivqlvhyuljhmkczkdh.webp",
			content: "Get ready to embark on a journey of unparalleled innovation as NITS HACKS, the epicentre of technological brilliance, proudly presents the Software Track – a platform where your coding prowess meets real-world challenges! The Software Track challenges you to push the boundaries of your skills and craft groundbreaking solutions using your preferred tech stack, be it an Android app or a cutting-edge website. Within a specified time limit, participants will immerse themselves in the world of coding, creating solutions that transcend the ordinary.",
		},
		{
			id: 2,
			name: "UI/UX Track",
			img: "https://res.cloudinary.com/dgnlmdkyq/image/upload/v1706274690/Nits%20hacks%206.0/Events/f18k3hezqezvvh1r98kx.webp",
			content: "Greetings Developers! As NITS HACKS enters its sixth edition, the hackathon continues to evolve, introducing new and exciting elements. We are particularly thrilled to unveil the UI/UX track, a pathway designed for enthusiasts eager to showcase their artistic talents. In this edition, NITS HACKS places a renewed emphasis on UI/UX, exposing tech enthusiasts to the captivating world of design and its crucial role in technology. This track serves as an educational platform, offering skill development and networking opportunities for beginners and prizes worth 30K to the winners.Comprising three distinct stages—moodboarding, designing, and prototyping—the UI/ UX track challenges participants to showcase the perfect fusion of creativity and technical expertise.The winning team will be the epitome of excellence, demonstrating a harmonious blend of these essential skills."
		},

		{
			id: 3,
			name: "Coding Track",
			img: "https://res.cloudinary.com/dgnlmdkyq/image/upload/v1706274690/Nits%20hacks%206.0/Events/wnivqlvhyuljhmkczkdh.webp",
			content: "Get ready to embark on a journey of unparalleled innovation as NITS HACKS, the epicentre of technological brilliance, proudly presents the Software Track – a platform where your coding prowess meets real-world challenges! The Software Track challenges you to push the boundaries of your skills and craft groundbreaking solutions using your preferred tech stack, be it an Android app or a cutting-edge website. Within a specified time limit, participants will immerse themselves in the world of coding, creating solutions that transcend the ordinary.",
		},
	];
	return (
		<div className={styles.eventCont} id="event">
			<h1 className={styles.heading}>EVENTS</h1>
			<div className={styles.pagebody}>
				{events.map((event) => {
					return (
						<div key={event.id} className={styles.card} onClick={() => window.location.href = `/event/${event.id}`}>
							<div className={styles.innerCont}>
								<img className={styles.img} src={event.img} alt={event} />
								<div className={styles.content}>
									<div className={styles.rectangle}>
										<div className={styles.box}>
											<p className={styles.title}>{event.name}</p>
										</div>
									</div>
									<p className={styles.description}>
										{" "}
										{event.content.slice(0, 40) +
											`${event.content.length > 100 ? "..." : ""}`}
									</p>
								</div>
							</div>
						</div>
					);
				})}
			</div>
		</div>
	);
};

export default Event;
