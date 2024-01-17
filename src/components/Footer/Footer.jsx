import styles from "./Footer.module.scss";

const Footer = () => {
	return (
		<div className={styles.footer}>
			<div className={styles.footerUpper}>
				<div className={styles.upper1}>
					<div className={styles.contact}>
						<div className={styles.buttondiv2}>
							<button className={styles.btn2}>
								<a
									href="https://www.tecnoesis.co.in/"
									target="_blank"
									rel="noreferrer"
								>
									VISIT TECNOESIS
								</a>
							</button>
						</div>
						<p className={styles.pconnect}>CONNECT WITH US :</p>
						<div className={styles.social}>
							<div className={styles.imgdiv}>
								<a
									href="https://www.instagram.com/nitshacks/"
									target="_blank"
									rel="noreferrer"
								>
									<img
										src="https://res.cloudinary.com/dxafdfvui/image/upload/v1705083563/instapxl_sj0sgp.svg"
										alt="instagram"
									/>
								</a>
							</div>
							<div className={styles.imgdiv}>
								<a
									href="https://www.facebook.com/NITSHacks"
									target="_blank"
									rel="noreferrer"
								>
									<img
										src="https://res.cloudinary.com/dxafdfvui/image/upload/v1705083563/fbpxl_imhsav.svg"
										alt="facebook"
									/>
								</a>
							</div>
							<div className={styles.imgdiv}>
								<a
									href="https://twitter.com/nitshacks"
									target="_blank"
									rel="noreferrer"
								>
									<img
										src="https://res.cloudinary.com/dxafdfvui/image/upload/v1705083935/twitterlogo_al9ufe.svg"
										alt="twitter"
									/>
								</a>
							</div>
							<div className={styles.imgdiv}>
								<a
									href="https://www.linkedin.com/company/nitshacks/"
									target="_blank"
									rel="noreferrer"
								>
									<img
										src="https://res.cloudinary.com/dxafdfvui/image/upload/v1705425238/linkedinneww_ctnyj8.svg"
										alt="linkedin"
									/>
								</a>
							</div>
						</div>
						<p className={styles.con}>CONTACT US</p>
						<p className={styles.gmail}>
							<a
								style={{ color: "#ffffff", textDecoration: "none" }}
								href="mailto:nitshacks.nits@gmail.com"
							>
								nitshacks.nits@gmail.com
							</a>
						</p>
					</div>
					<div className={styles.logo}>
						<a href="/" className={styles.logoInner}>
							<img src="/logo.png" alt="Logo" className={styles.logoImg} />
						</a>
					</div>
					<div className={styles.maps}>
						<p>How to Reach?</p>
						<div className={styles.mapsimg}>
							<iframe
								title="mymap"
								src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3623.1030424793535!2d92.79115564073894!3d24.757655927802585!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x374e49dcb63bae9b%3A0x81efa836714a289b!2sNational%20Institute%20Of%20Technology%2C%20Silchar!5e0!3m2!1sen!2sin!4v1666801726860!5m2!1sen!2sin"
								width="100%"
								height="100%"
								style={{ border: 0 }}
								allowFullScreen=""
								loading="lazy"
								referrerPolicy="no-referrer-when-downgrade"
							></iframe>
						</div>
					</div>
					<div className={styles.buttondiv}>
						<button className={styles.btn2}>
							<a
								href="https://tecnoesis.co.in/"
								target="_blank"
								rel="noreferrer"
							>
								VISIT TECNOESIS
							</a>
						</button>
					</div>
				</div>
				<div className={styles.upper2}>
					<div className={styles.copytxt2}>
						<p>
							Made with <span className={styles.span1}>❤️</span> by{" "}
							<a
								href="https://gdscnits.in/"
								target="_blank"
								rel="noreferrer"
							></a>
							GDSC, NIT Silchar
						</p>
					</div>
					<div className={styles.copytxt}>
						<p>©Copyright </p>
						<p>2024, NITS HACKS 6.0</p>
						<p>National Institute of Technology, Silchar</p>
					</div>
				</div>
			</div>

			<div className={styles.footerLower}>
				<div className={styles.maincontainer}>
					<div className={styles.line}>
						<div className={`${styles.left} ${styles.circle}`}></div>
						<div className={`${styles.right} ${styles.circle}`}></div>
					</div>
				</div>
			</div>
		</div>
	);
};
export default Footer;
