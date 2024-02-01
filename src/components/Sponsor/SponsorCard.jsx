import styles from "./SponsorCard.module.scss";
const Sponsor = () => {
	const sponsors = [
		{
			id: 1,
			img: "https://res.cloudinary.com/dl19r276g/image/upload/v1706769021/xyzlogo_rcuvdb.svg",
			uri: "https://gen.xyz/",
		},
		{
			id: 2,
			img: "https://res.cloudinary.com/dl19r276g/image/upload/v1706769264/sp3_v5f57c.svg",
			uri: "https://www.cipherschools.com/",
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
			img: "https://res.cloudinary.com/dl19r276g/image/upload/v1706769405/sp2_lqrqnb.svg",
			uri: "https://anaitik.com/",
		},
		{
			id: 6,
			img: "https://res.cloudinary.com/dl19r276g/image/upload/v1706769702/hackerearth_k5ixla.svg",
			uri: "https://www.hackerearth.com/",
		},
	];
	return (
		<div className={styles.sponsorCont} id="sponsors">
			<h1 className={styles.heading}>OUR SPONSORS</h1>
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
