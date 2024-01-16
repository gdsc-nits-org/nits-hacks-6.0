import styles from "./EventCard.module.scss";
const Event = () => {
	const events = [
		{
			id: 1,
			name: "Coming soon",
			img: "https://res.cloudinary.com/dgnlmdkyq/image/upload/v1705409401/Nits%20hacks%206.0/Events/new2/wu6lez7se75gtjufzcc3.webp",
			content: "Coming soon",
		},

		{
			id: 2,
			name: "Coming soon",
			img: "https://res.cloudinary.com/dgnlmdkyq/image/upload/v1705409401/Nits%20hacks%206.0/Events/new2/wa4qxrgwacycncj0olhl.webp",
			content: "Coming soon",
		},

		{
			id: 3,
			name: "Coming soon",
			img: "https://res.cloudinary.com/dgnlmdkyq/image/upload/v1705409401/Nits%20hacks%206.0/Events/new2/e1e6wzqea5yvopgxxwla.webp",
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
									{event.content.slice(0, 50) +
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
