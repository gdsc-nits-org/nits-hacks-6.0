import styles from "./EventCard.module.scss";
const Event = () => {
	const events = [
		{
			id: 1,
			name: "Coming soon",
			img: "https://res.cloudinary.com/drffnopta/image/upload/v1705349994/software_track_cxotxh.webp",
			content: "Coming soon",
		},

		{
			id: 2,
			name: "Coming soon",
			img: "https://res.cloudinary.com/drffnopta/image/upload/v1705350222/ux_track_n8ftbq.webp",
			content: "Coming soon",
		},

		{
			id: 3,
			name: "Coming soon",
			img: "https://res.cloudinary.com/drffnopta/image/upload/v1705350056/coding_track_pbo1gw.webp",
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
							<div className={styles.object}>
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
						</div>
					);
				})}
			</div>
		</div>
	);
};

export default Event;
