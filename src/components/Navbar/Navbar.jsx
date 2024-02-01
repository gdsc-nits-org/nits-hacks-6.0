import { useState } from "react";
import { Link } from "react-router-dom";
import { Link as SectionLink } from "react-scroll";
import styles from "./Navbar.module.scss";
// import Teams from "../../Pages/TeamPage/Team";
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
				<Link to="/" className={styles.right}>
					<img src={logo} className={styles.navIcons} alt="logo loading..." />
				</Link>
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
					<SectionLink
						to="home"
						smooth={true}
						className={styles.link}
						onClick={() => setNav(!nav)}
					>
						HOME
					</SectionLink>
				</div>
				<div className={styles.linkParentMobile}>
					<SectionLink
						to="event"
						smooth={true}
						className={styles.link}
						onClick={() => setNav(!nav)}
					>
						EVENTS
					</SectionLink>
				</div>
				<div className={styles.linkParentMobile}>
					<Link to="/faq" className={styles.link} onClick={() => setNav(!nav)}>
						FAQ
					</Link>
				</div>
				<div className={styles.linkParentMobile}>
					<SectionLink
						to="sponsors"
						smooth={true}
						className={styles.link}
						onClick={() => setNav(!nav)}
					>
						SPONSORS
					</SectionLink>
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
							<SectionLink to="home" smooth={true} className={styles.link}>
								Home
							</SectionLink>
						</div>
					</div>
					<div className={styles.linkParent}>
						<div className={styles.innerParent}>
							<SectionLink to="event" smooth={true} className={styles.link}>
								Events
							</SectionLink>
						</div>
					</div>
					<div className={styles.linkParent}>
						<div className={styles.innerParent}>
							<Link to="/faq" className={styles.link}>
								FAQ
							</Link>
						</div>
					</div>
					<div className={styles.linkParent}>
						<div className={styles.innerParent}>
							<SectionLink to="sponsors" smooth={true} className={styles.link}>
								Sponsors
							</SectionLink>
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
export default Navbar;
