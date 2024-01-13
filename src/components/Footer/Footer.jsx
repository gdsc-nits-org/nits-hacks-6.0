import styles from './Footer.module.scss'
import React from "react"
// import { GoogleMapReact, LocationPin } from 'google-maps-react'
const Footer = () => {
    const location = {
        address: '1600 Amphitheatre Parkway, Mountain View, california.',
        lat: 37.42216,
        lng: -122.08427,
    };
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
                            <div className={styles.imgdiv}><img src="https://res.cloudinary.com/dxafdfvui/image/upload/v1705083563/instapxl_sj0sgp.svg" alt="instagram" /></div>
                            <div className={styles.imgdiv}><img src="https://res.cloudinary.com/dxafdfvui/image/upload/v1705083563/fbpxl_imhsav.svg" alt="facebook" /></div>
                            <div className={styles.imgdiv}><img src="https://res.cloudinary.com/dxafdfvui/image/upload/v1705083935/twitterlogo_al9ufe.svg" alt="twitter" /></div>
                        </div>
                        <p className={styles.con}>CONTACT US</p>
                        <p className={styles.gmail}>nitshack@gmail.com</p>
                    </div>
                    <div className={styles.logo}>
                        <div className={styles.logoInner}>
                            <img src="https://res.cloudinary.com/dxafdfvui/image/upload/v1705127726/logo_vfazzi.svg" alt="Logo" />
                        </div>
                    </div>
                    <div className={styles.maps}>
                        <p>How to Reach</p>
                        <div className={styles.mapsimg}>
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
                        <p>©Copyright  </p>
                        <p>2022, Nits Hacks  </p>
                        <p>National Institute of Technology, Silchar</p>
                    </div>
                </div>

            </div>

            <div className={styles.footerLower}>
                <div className={styles.maincontainer}>
                    <div class={styles.line}>
                        <div class={`${styles.left} ${styles.circle}`}></div>
                        <div class={`${styles.right} ${styles.circle}`}></div>
                    </div>
                </div>
            </div>

        </div>
    );
}
export default Footer;