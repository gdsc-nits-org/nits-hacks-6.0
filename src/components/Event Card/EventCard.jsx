import styles from "./Eventcard.module.scss";
const Event = () => {
	const events = [
		{
			id: 1,
			name: "Software Track",
			img: "https://res.cloudinary.com/dgnlmdkyq/image/upload/v1704971596/Nits%20hacks%206.0/Events/xbb2oxs7ytlcongnfkwn.svg",
			content:
				"Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book",
		},

		{
			id: 2,
			name: "UI/UX Track",
			img: "https://res.cloudinary.com/dgnlmdkyq/image/upload/v1704971595/Nits%20hacks%206.0/Events/ssk8rfvcx5kiqjym5sl4.svg",
			content:
				"UI/UX track aims to introduce tech enthusiasts to the aesthetic world of design and highlight its significance in technology.The design- a - thon provides beginners with education, skill development, andnetworking opportunities within the UI / UX community.",
		},

		{
			id: 3,
			name: "Speaker Session",
			img: "https://res.cloudinary.com/dgnlmdkyq/image/upload/v1704971595/Nits%20hacks%206.0/Events/spnzunypvuzxjmlskild.svg",
			content:
				"Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book",
		},
	];
	return (
		<div className={styles.eventCont} id="event">
			<h1 className={styles.heading}>EVENTS</h1>
			<div className={styles.pagebody}>
				{events.map((event) => {
					return (
						<div key={event.id} className={styles.card}>
							<img className={styles.img} src={event.img} alt={event} />
							<div className={styles.content}>
								<div className={styles.rectangle}>
									<div className={styles.box}>
										<p className={styles.title}>{event.name}</p>
									</div>
								</div>
								<p className={styles.description}>
									{" "}
									{event.content.slice(0, 80) +
										`${event.content.length > 100 ? "..." : ""}`}
								</p>
							</div>
						</div>
					);
				})}
			</div>
		</div>
	);
};

export default Event;
