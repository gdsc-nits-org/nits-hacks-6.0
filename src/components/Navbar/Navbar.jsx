import styles from "./Navbar.module.scss";
import { useState } from "react";
import { Link } from "react-router-dom";
const Navbar = () => {
	const [nav, setNav] = useState(false);
	const hamburger = {
		inactive:
			"https://res.cloudinary.com/dhry5xscm/image/upload/v1704999259/nits-hacks-6.0/hamburger_icon_nitshacks_gx0xew.svg",
		active:
			"https://res.cloudinary.com/dhry5xscm/image/upload/v1704999663/nits-hacks-6.0/hamburger_icon_close_zgmrjl.svg",
	};
	const logo =
		"https://res.cloudinary.com/dhry5xscm/image/upload/v1705000767/nits-hacks-6.0/logo-nitshacks_ztwqrk.svg";
	const hamClick = async (e) => {
		e.target.style.opacity = "0";
		setTimeout(() => {
			if (nav === false) {
				setNav(true);
			} else {
				setNav(false);
			}
			e.target.style.opacity = "1";
		}, 200);
	};
	return (
		<div className={styles.navCont}>
			<div className={styles.NavbarMobile}>
				<div className={styles.left}>
					<button className={styles.btn} onClick={hamClick}>
						<img
							src={`${nav === false ? hamburger.inactive : hamburger.active}`}
							style={{ transition: "ease 0.5s" }}
							className={styles.navIcons}
							alt="hamburger loading..."
						/>
					</button>
				</div>
				<div className={styles.right}>
					<img src={logo} className={styles.navIcons} alt="logo loading..." />
				</div>
			</div>
			<div
				className={styles.mobileActive}
				style={{
					display: `${nav === false ? "none" : "flex"}`,
					zIndex: `${nav === false ? "-1" : "3"}`,
					opacity: `${nav === false ? "0" : "1"}`,
					transition: "ease 500ms",
				}}
			>
				<div className={styles.linkParentMobile}>
					<Link to="/" className={styles.link}>
						HOME
					</Link>
				</div>
				<div className={styles.linkParentMobile}>
					<Link to="/about" className={styles.link}>
						ABOUT
					</Link>
				</div>
				<div className={styles.linkParentMobile}>
					<Link to="/sponsors" className={styles.link}>
						SPONSORS
					</Link>
				</div>
				<div className={styles.linkParentMobile}>
					<Link to="/team" className={styles.link}>
						TEAM
					</Link>
				</div>
			</div>
			<div className={styles.deskNav}>
				<div className={styles.left}>
					<img src={logo} alt="logo loading..." className={styles.logo} />
				</div>
				<div className={styles.right}>
					<div className={styles.linkParent}>
						<div className={styles.innerParent}>
							<Link to="/" className={styles.link}>
								Home
							</Link>
						</div>
					</div>
					<div className={styles.linkParent}>
						<div className={styles.innerParent}>
							<Link to="/about" className={styles.link}>
								About
							</Link>
						</div>
					</div>
					<div className={styles.linkParent}>
						<div className={styles.innerParent}>
							<Link to="/sponsors" className={styles.link}>
								Sponsors
							</Link>
						</div>
					</div>
					<div className={styles.linkParent}>
						<div className={styles.innerParent}>
							<Link to="/team" className={styles.link}>
								Team
							</Link>
						</div>
					</div>
				</div>
			</div>
		</div>
	);
};
export default Navbar;
