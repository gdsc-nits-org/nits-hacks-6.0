import { useState } from "react";
import { Link } from "react-router-dom";
import styles from "./Navbar.module.scss";
// import Teams from "../../Pages/TeamPage/Team";
const Navbar2 = () => {
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
							src={nav === false ? hamburger.inactive : hamburger.active}
							style={{ transition: "ease 0.5s" }}
							className={styles.navIcons}
							alt="hamburger loading..."
						/>
					</button>
				</div>
				<Link to="/" className={styles.right}>
					<img src={logo} className={styles.navIcons} alt="logo loading..." />
				</Link>
			</div>
			<div
				className={styles.mobileActive}
				style={{
					display: nav === false ? "none" : "flex",
					zIndex: nav === false ? "-1" : "3",
					opacity: nav === false ? "0" : "1",
					transition: "ease 500ms",
				}}
			>
				<div className={styles.linkParentMobile}>
					<Link
						to="/#home"
						className={styles.link}
						onClick={() => setNav(!nav)}
					>
						HOME
					</Link>
				</div>
				<div className={styles.linkParentMobile}>
					<Link
						to="/#event"
						className={styles.link}
						onClick={() => setNav(!nav)}
					>
						EVENTS
					</Link>
				</div>
				<div className={styles.linkParentMobile}>
					<Link
						to="/#sponsors"
						className={styles.link}
						onClick={() => setNav(!nav)}
					>
						SPONSORS
					</Link>
				</div>
				<div className={styles.linkParentMobile}>
					<Link to="/teams" className={styles.link}>
						TEAM
					</Link>
				</div>
			</div>
			<div className={styles.deskNav}>
				<Link to="/" className={styles.left}>
					<img src={logo} alt="logo loading..." className={styles.logo} />
				</Link>
				<div className={styles.right}>
					<div className={styles.linkParent}>
						<div className={styles.innerParent}>
							<Link to="/#home" className={styles.link}>
								Home
							</Link>
						</div>
					</div>
					<div className={styles.linkParent}>
						<div className={styles.innerParent}>
							<Link to="/#event" className={styles.link}>
								Events
							</Link>
						</div>
					</div>
					<div className={styles.linkParent}>
						<div className={styles.innerParent}>
							<Link to="/#sponsors" smooth={true} className={styles.link}>
								Sponsors
							</Link>
						</div>
					</div>
					{
						<div className={styles.linkParent}>
							<div className={styles.innerParent}>
								<Link to="/teams" className={styles.link}>
									Team
								</Link>
							</div>
						</div>
					}
				</div>
			</div>
		</div>
	);
};
export default Navbar2;
