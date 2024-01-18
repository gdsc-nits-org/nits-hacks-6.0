import styles from "./SponsorCard.module.scss";
const Sponsor = () => {
	const sponsors = [
		{
			id: 1,
			img: "https://res.cloudinary.com/dxafdfvui/image/upload/v1705316692/interviewCake_1_kauyf0.svg",
			uri: "https://www.interviewcake.com/",
		},
		{
			id: 2,
			img: "https://res.cloudinary.com/dxafdfvui/image/upload/v1705317303/campuskarma_qwkjzg.svg",
			uri: "https://www.campuskarma.in/",
		},
		{
			id: 3,
			img: "https://res.cloudinary.com/dxafdfvui/image/upload/v1705318017/taskadenew_e3cr2l.svg",
			uri: "https://www.taskade.com/",
		},
		{
			id: 4,
			img: "https://res.cloudinary.com/dxafdfvui/image/upload/v1705318529/echo3d_almoq9.svg",
			uri: "https://www.echo3d.com/",
		},
		{
			id: 5,
			img: "https://res.cloudinary.com/dxafdfvui/image/upload/v1705319687/CryptoMode-Filecoin_hvwlug.svg",
			uri: "https://filecoin.io/",
		},
		{
			id: 6,
			img: "https://res.cloudinary.com/dxafdfvui/image/upload/v1705319958/replit_tibgzp.svg",
			uri: "https://replit.com/",
		},
		{
			id: 7,
			img: "https://res.cloudinary.com/dxafdfvui/image/upload/v1705320298/solana_yhw3k5.svg",
			uri: "https://solana.com/",
		},
		{
			id: 8,
			img: "https://res.cloudinary.com/dxafdfvui/image/upload/v1705320698/Polygon_blockchain_logo_gijj2n.svg",
			uri: "https://polygon.technology/",
		},
		{
			id: 9,
			img: "https://res.cloudinary.com/dxafdfvui/image/upload/v1705320842/devfolio_jpfrru.svg",
			uri: "https://devfolio.co/",
		},
	];
	return (
		<div className={styles.sponsorCont} id="sponsors">
			<h1 className={styles.heading}>PAST SPONSORS</h1>
			<div className={styles.pagebody}>
				{sponsors.map((s) => {
					return (
						<div key={s.id} className={styles.card}>
							<a
								href={s.uri}
								target="_blank"
								rel="noreferrer"
								className={styles.wrapper}
							>
								<div className={styles.box}>
									<img src={s.img} className={styles.img} alt={s} />
								</div>
							</a>
						</div>
					);
				})}
			</div>
		</div>
	);
};

export default Sponsor;
