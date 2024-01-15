import styles from "./Eventcard.module.scss";
const Event = () => {
	const events = [
		{
			id: 1,
			name: "Coming soon",
			img: "https://res.cloudinary.com/dgnlmdkyq/image/upload/v1704971596/Nits%20hacks%206.0/Events/xbb2oxs7ytlcongnfkwn.svg",
			content: "Coming soon",
		},

		{
			id: 2,
			name: "Coming soon",
			img: "https://res.cloudinary.com/dgnlmdkyq/image/upload/v1704971595/Nits%20hacks%206.0/Events/ssk8rfvcx5kiqjym5sl4.svg",
			content: "Coming soon",
		},

		{
			id: 3,
			name: "Coming soon",
			img: "https://res.cloudinary.com/drffnopta/image/upload/v1705331366/depositphotos_632822984-stock-photo-generative-illustration-gaming-background-abstract_2400x1600_1_phjyw9.svg",
			content: "Coming soon",
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
