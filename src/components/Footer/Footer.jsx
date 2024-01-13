import styles from "./Footer.module.scss";

// import { GoogleMapReact, LocationPin } from 'google-maps-react'
const Footer = () => {
	// const location = {
	//     address: '1600 Amphitheatre Parkway, Mountain View, california.',
	//     lat: 37.42216,
	//     lng: -122.08427,
	// };
	return (
		<div className={styles.footer}>
			<div className={styles.footerUpper}>
				<div className={styles.upper1}>
					<div className={styles.contact}>
						<div className={styles.buttondiv2}>
							<button className={styles.btn2}>
								<a href="">VISIT TECNOESIS</a>
							</button>
						</div>
						<p className={styles.pconnect}>CONNECT WITH US :</p>
						<div className={styles.social}>
							<div className={styles.imgdiv}>
								<img
									src="https://res.cloudinary.com/dxafdfvui/image/upload/v1705083563/instapxl_sj0sgp.svg"
									alt="instagram"
								/>
							</div>
							<div className={styles.imgdiv}>
								<img
									src="https://res.cloudinary.com/dxafdfvui/image/upload/v1705083563/fbpxl_imhsav.svg"
									alt="facebook"
								/>
							</div>
							<div className={styles.imgdiv}>
								<img
									src="https://res.cloudinary.com/dxafdfvui/image/upload/v1705083935/twitterlogo_al9ufe.svg"
									alt="twitter"
								/>
							</div>
						</div>
						<p className={styles.con}>CONTACT US</p>
						<p className={styles.gmail}>nitshacks.nits@gmail.com</p>
					</div>
					<div className={styles.logo}>
						<div className={styles.logoInner}>
							<img
								src="https://res.cloudinary.com/dxafdfvui/image/upload/v1705127726/logo_vfazzi.svg"
								alt="Logo"
							/>
						</div>
					</div>
					<div className={styles.maps}>
						<p>How to Reach</p>
						<div className={styles.mapsimg}>
							<iframe
								title="mymap"
								src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3623.1030424793535!2d92.79115564073894!3d24.757655927802585!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x374e49dcb63bae9b%3A0x81efa836714a289b!2sNational%20Institute%20Of%20Technology%2C%20Silchar!5e0!3m2!1sen!2sin!4v1666801726860!5m2!1sen!2sin"
								width="100%"
								height="100%"
								style={{ border: 0 }}
								allowfullscreen=""
								loading="lazy"
								referrerPolicy="no-referrer-when-downgrade"
							></iframe>
							{/* <div className={styles.map}>
                                <h2 className={styles.mapH2}>Come Visit Us At Our Campus</h2>

                                <div className={styles.googleMap}>
                                    <GoogleMapReact
                                        bootstrapURLKeys={{ key: '' }}
                                        defaultCenter={location}
                                        defaultZoom={zoomLevel}
                                    >
                                        <LocationPin
                                            lat={location.lat}
                                            lng={location.lng}
                                            text={location.address}
                                        />
                                    </GoogleMapReact>
                                </div>
                            </div> */}
						</div>
					</div>
					<div className={styles.buttondiv}>
						<button className={styles.btn2}>
							<a href="">VISIT TECNOESIS</a>
						</button>
					</div>
				</div>
				<div className={styles.upper2}>
					<div className={styles.copytxt}>
						<p>©Copyright </p>
						<p>2024, Nits Hacks </p>
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
