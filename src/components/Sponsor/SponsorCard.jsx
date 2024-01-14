import styles from "./SponsorCard.module.scss";
const Sponsor = () => {
	const sponsors = [
		{
			id: 1,
			img: "https://res.cloudinary.com/dgnlmdkyq/image/upload/v1705059309/Nits%20hacks%206.0/Sponser/qy5qhfq0kludgcgebzin.svg",
		},
		{
			id: 2,
			img: "https://res.cloudinary.com/dgnlmdkyq/image/upload/v1705059309/Nits%20hacks%206.0/Sponser/lfu29ie3aklxwyjh88ya.svg",
		},
		{
			id: 3,
			img: "https://res.cloudinary.com/dgnlmdkyq/image/upload/v1705059309/Nits%20hacks%206.0/Sponser/wtggcgvbsegp6t4e5mad.svg",
		},
		{
			id: 4,
			img: "https://res.cloudinary.com/dgnlmdkyq/image/upload/v1705059308/Nits%20hacks%206.0/Sponser/byr8z9pbwsujrzkbbfbm.svg",
		},
		{
			id: 5,
			img: "https://res.cloudinary.com/dgnlmdkyq/image/upload/v1705059308/Nits%20hacks%206.0/Sponser/inwswvexnjhnjdeymzud.svg",
		},
		{
			id: 6,
			img: "https://res.cloudinary.com/dgnlmdkyq/image/upload/v1705059308/Nits%20hacks%206.0/Sponser/wwipljdkdubocnhrl5iy.svg",
		},
	];
	return (
		<div className={styles.sponsorCont}>
			<h1 className={styles.heading}>SPONSORS</h1>
			<div className={styles.pagebody}>
				{sponsors.map((s) => {
					return (
						<div key={s.id} className={styles.card}>
							<div className={styles.wrapper}>
								<div className={styles.box}>
									<img src={s.img} className={styles.img} alt={s} />
								</div>
							</div>
						</div>
					);
				})}
			</div>
		</div>
	);
};

export default Sponsor;
