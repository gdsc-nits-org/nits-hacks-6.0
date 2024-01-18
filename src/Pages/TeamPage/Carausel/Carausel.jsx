/* eslint-disable react/prop-types */
import React, { useState } from "react";
import styles from "./Carausel.module.scss";
import TeamCard from "../../../components/TeamCard/TeamCard";
import VOLUNTEERS from "../Volunteers.json";
import TECH from "../Tech.json";
import ORGANISERS from "../Organisers.json";
import Techlead from "../Techlead.json";
import Coordinator from "../Coordinator.json";
import Convener from "../Convener.json";
import Coreteam from "../Coreteam.json";
//import FACULTY from "../Faculty.json"

const MAX_VISIBILITY = 3;
const MemberDetails = (d) => {
	return <TeamCard {...d} key={d._id} />;
};

const Carousel = ({ children }) => {
<<<<<<< HEAD
    const [active, setActive] = useState(0);
    const count = React.Children.count(children);
    return (
        <div className={styles.carouselCont}>
            <div className={styles.carousel}>
                {active > 0 && <button className={styles.left} onClick={() => setActive(i => i - 1)}>&lt;</button>}
                {React.Children.map(children, (child, i) => (
                    <div className={styles.cardContainer} style={{
                        '--active': i === active ? 1 : 0,
                        '--offset': (active - i) / 3,
                        '--direction': Math.sign(active - i),
                        '--abs-offset': Math.abs(active - i) / 3,
                        'pointerEvents': active === i ? 'auto' : 'none',
                        'opacity': Math.abs(active - i) >= MAX_VISIBILITY ? '0' : '1',
                        'display': Math.abs(active - i) > MAX_VISIBILITY ? 'none' : 'block',
                        zIndex: `${i === active ? 5 : 0}`,

                    }}>
                        {child}
                    </div>
                ))}
                {active < count - 1 && <button className={styles.right} onClick={() => setActive(i => i + 1)}>&gt;</button>}
            </div>

            <div style={{ display: 'flex', alignItems: 'center', justifyContent: 'center' }}>
                <div className={`${styles.bubbleCont}`}>
                    {React.Children.map(children, (child, i) => (
                        <div className={i === active ? `${styles.active}` : `${styles.inactive}`}></div>
                    ))}
                </div>
            </div>
        </div>
    );
=======
	const [active, setActive] = useState(0);
	const count = React.Children.count(children);
	return (
		<div className={styles.carouselCont}>
			<div className={styles.carousel}>
				{active > 0 && (
					<button
						className={`${styles.nav} ${styles.left}`}
						onClick={() => setActive((i) => i - 1)}
					>
						&lt;
					</button>
				)}
				{React.Children.map(children, (child, i) => (
					<div
						className={styles.cardContainer}
						style={{
							"--active": i === active ? 1 : 0,
							"--offset": (active - i) / 3,
							"--direction": Math.sign(active - i),
							"--abs-offset": Math.abs(active - i) / 3,
							pointerEvents: active === i ? "auto" : "none",
							opacity: Math.abs(active - i) >= MAX_VISIBILITY ? "0" : "1",
							display: Math.abs(active - i) > MAX_VISIBILITY ? "none" : "block",
							zIndex: `${i === active ? 5 : 0}`,
						}}
					>
						{child}
					</div>
				))}
				{active < count - 1 && (
					<button
						className={`${styles.nav} ${styles.right}`}
						onClick={() => setActive((i) => i + 1)}
					>
						&gt;
					</button>
				)}
			</div>

			<div
				style={{
					display: "flex",
					alignItems: "center",
					justifyContent: "center",
				}}
			>
				<div className={`${styles.bubbleCont}`}>
					{React.Children.map(children, (child, i) => (
						<div
							className={
								i === active ? `${styles.active}` : `${styles.inactive}`
							}
						></div>
					))}
				</div>
			</div>
		</div>
	);
>>>>>>> e9e4d2c904f5cf80abb37a64381941aadecc796c
};

const Events = () => (
	<div className={styles.page}>
		{/*}     <div className={styles.content}>
            <div className={styles.heading}><p>FACULTY</p></div>
            <div className={styles.Events}>
                <Carousel>
                    {FACULTY.map(MemberDetails)
                    }
                </Carousel>
            </div>
                </div> 
            */}
		<div className={styles.content}>
			<div className={styles.heading}>
				<p>CORE</p>
			</div>

			<div className={styles.Events}>
				<Carousel>{Convener.map(MemberDetails)}</Carousel>
			</div>
			<div className={styles.Events}>
				<Carousel>{Coordinator.map(MemberDetails)}</Carousel>
			</div>
			<div className={styles.Events}>
				<Carousel>{Coreteam.map(MemberDetails)}</Carousel>
			</div>
		</div>
		<div className={styles.content}>
			<div className={styles.heading}>
				<p>TECH</p>
			</div>
			<div className={styles.Events}>
				<Carousel>{Techlead.map(MemberDetails)}</Carousel>
			</div>
			<div className={styles.Events}>
				<Carousel>{TECH.map(MemberDetails)}</Carousel>
			</div>
		</div>
		<div className={styles.content}>
			<div className={styles.heading}>
				<p>ORGANISERS</p>
			</div>
			<div className={styles.Events}>
				<Carousel>{ORGANISERS.map(MemberDetails)}</Carousel>
			</div>
		</div>
		<div className={styles.content}>
			<div className={styles.heading}>
				<p>VOLUNTEERS</p>
			</div>
			<div className={styles.Events}>
				<Carousel>{VOLUNTEERS.map(MemberDetails)}</Carousel>
			</div>
		</div>
	</div>
);
export default Events;
