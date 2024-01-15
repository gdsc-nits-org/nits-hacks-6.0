import styles from "./SponsorCard.module.scss";
const Sponsor = () => {
	const sponsors = [
		{
			id: 1,
			img: "https://res.cloudinary.com/dxafdfvui/image/upload/v1705316692/interviewCake_1_kauyf0.svg",
		},
		{
			id: 2,
			img: "https://res.cloudinary.com/dxafdfvui/image/upload/v1705317303/campuskarma_qwkjzg.svg",
		},
		{
			id: 3,
			img: "https://res.cloudinary.com/dxafdfvui/image/upload/v1705318017/taskadenew_e3cr2l.svg",
		},
		{
			id: 4,
			img: "https://res.cloudinary.com/dxafdfvui/image/upload/v1705318529/echo3d_almoq9.svg",
		},
		{
			id: 5,
			img: "https://res.cloudinary.com/dxafdfvui/image/upload/v1705319687/CryptoMode-Filecoin_hvwlug.svg",
		},
		{
			id: 6,
			img: "https://res.cloudinary.com/dxafdfvui/image/upload/v1705319958/replit_tibgzp.svg",
		},
		{
			id: 7,
			img: "https://res.cloudinary.com/dxafdfvui/image/upload/v1705320298/solana_yhw3k5.svg",
		},
		{
			id: 8,
			img: "https://res.cloudinary.com/dxafdfvui/image/upload/v1705320698/Polygon_blockchain_logo_gijj2n.svg",
		},
		{
			id: 9,
			img: "https://res.cloudinary.com/dxafdfvui/image/upload/v1705320842/devfolio_jpfrru.svg",
		},
	];
	return (
		<div className={styles.sponsorCont} id="sponsors">
			<h1 className={styles.heading}>PAST SPONSORS</h1>
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
