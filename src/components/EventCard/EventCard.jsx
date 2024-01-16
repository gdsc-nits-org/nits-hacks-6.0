import styles from "./EventCard.module.scss";
const Event = () => {
	const events = [
		{
			id: 1,
			name: "Coming soon",
			img: "https://https://res.cloudinary.com/dgnlmdkyq/image/upload/v1705407823/Nits%20hacks%206.0/Events/new/uksmyvzivxa1mpzcunei.png",
			content: "Coming soon",
		},

		{
			id: 2,
			name: "Coming soon",
			img: "https://https://res.cloudinary.com/dgnlmdkyq/image/upload/v1705407823/Nits%20hacks%206.0/Events/new/vrqrxf6s4lgj866e8ata.png",
			content: "Coming soon",
		},

		{
			id: 3,
			name: "Coming soon",
			img: "https://https://res.cloudinary.com/dgnlmdkyq/image/upload/v1705408332/Nits%20hacks%206.0/Events/new/zexwiouj456umaz6d3n7.png",
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
									{event.content.slice(0, 70) +
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
