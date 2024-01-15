import styles from "./EventPage.module.scss";

const EventPage = () => {
	return (
		<div className={styles.MainDiv}>
			<div className={styles.event_info}>
				<img
					className={styles.head_img}
					src="https://res.cloudinary.com/dvra8rj4n/image/upload/v1705159558/NITSX/s8e6cjvpjyvgocbtbjpt.svg"
					alt="Header"
				/>
				<h1 className={styles.title}>EVENT NAME</h1>
				<p className={styles.desc}>
					Lorem ipsum dolor sit amet consectetur adipisicing elit. Reiciendis
					libero itaque quos consectetur, atque nisi vel nulla ea deleniti,
					fugiat ratione, sapiente non ab. Autem magni dolore quos alias
					nostrum, assumenda ab consequuntur officiis dolores nesciunt,
					similique qui sapiente optio sit. Minima quos eos nisi!
				</p>

				<p className={styles.desc}>
					Lorem ipsum dolor sit amet consectetur adipisicing elit. Sit vero
					voluptatem assumenda ut nisi nam impedit error exercitationem illo eos
					fugiat voluptatibus, minima deserunt similique beatae placeat facilis,
					ab, nobis rem consequuntur accusantium. Obcaecati, inventore soluta?
					Minus non reprehenderit illo possimus error fuga! Repellendus amet ex
					aliquid illum ipsa expedita!
				</p>
				<div className={styles.btn_wrapper}>
					<button className={styles.btn_1}>REGISTER NOW</button>
					<button className={styles.btn_2}>BACK TO HOME</button>
				</div>
			</div>
			<div className={styles.event_poster}>
				<img
					className={styles.poster}
					src="https://res.cloudinary.com/dvra8rj4n/image/upload/v1705161215/NITSX/dzxfy15gnq3t7tctn0ya.png"
					alt="POSTER"
				/>
			</div>
		</div>
	);
};

export default EventPage;
