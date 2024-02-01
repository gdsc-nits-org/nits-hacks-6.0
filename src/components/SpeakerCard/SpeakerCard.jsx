import styles from "./SpeakerCard.module.css";

const SpeakerCard = () => {
	const speakers = [
		{
			id: 1,
			image:
				"https://res.cloudinary.com/dnuhxx8aa/image/upload/v1705826342/utkarsh_ekhwgs.webp",
			name: "Utkarsh Gupta",
			role: "SDE @Graviton",
			data: "AIR 1 @Google Kickstart; Ex AIR 1 @Codeforces; Grandmaster @Codeforces; 7 Star on CodeChef; ICPC '21 World Finalist",
		},
		{
			id: 2,
			image:
				"https://res.cloudinary.com/dnuhxx8aa/image/upload/v1705826158/harsh_mu4xlo.webp",
			name: "Harsh Mishra",
			role: "Open Source Engineer @LocalStack",
			data: "Google Summer of Code '21; Google Season of Docs '21; AWS Community Builder; Open Source Contributor @moja global",
		},
	];
	return (
		<section className={styles.section} id="speakers">
			<h1 className={styles.heading}>PAST SPEAKERS</h1>
			<div className={styles.gridContainer}>
				{speakers.map((speaker) => {
					const dataList = speaker.data.split(";");
					return (
						<div className={styles.flip_card} key={speaker.id}>
							<div className={styles.flip_card_front}>
								<div className={styles.flip_card_inner}>
									<img src={speaker.image} className={styles.speaker_image} />
									<h1 className={styles.name}>{speaker.name}</h1>
									<h2 className={styles.role}>{speaker.role}</h2>
								</div>
							</div>
							<div className={styles.flip_card_back}>
								<div className={styles.flip_card_inner}>
									<ul className={styles.data}>
										{dataList.map((data, i) => (
											<li key={i}>{data.trim()}</li>
										))}
									</ul>
								</div>
							</div>
						</div>
					);
				})}
			</div>
		</section>
	);
};

export default SpeakerCard;
