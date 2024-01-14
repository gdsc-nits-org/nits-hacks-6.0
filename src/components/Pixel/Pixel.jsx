export const Pixel = () => {
	return (
		<svg style={{ position: "fixed" }}>
			<filter id="pixelate-mosaic" x="0%" y="0%" width="100%" height="100%">
				<feGaussianBlur stdDeviation="2" in="SourceGraphic" result="smoothed" />
				<feImage
					width="15"
					height="15"
					xlinkHref="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAAUAAAAFCAIAAAACDbGyAAAAAXNSR0IArs4c6QAAAARnQU1BAACxjwv8YQUAAAAJcEhZcwAADsMAAA7DAcdvqGQAAAAWSURBVAgdY1ywgOEDAwKxgJhIgFQ+AP/vCNK2s+8LAAAAAElFTkSuQmCC"
					result="displacement-map"
				/>
				<feTile in="displacement-map" result="pixelate-map" />
				<feDisplacementMap
					in="smoothed"
					in2="pixelate-map"
					xChannelSelector="R"
					yChannelSelector="G"
					scale="50"
					result="pre-final"
				/>
				<feComposite operator="in" in2="SourceGraphic" />
			</filter>
			<filter id="pixelate" x="0" y="0">
				<feFlood x="4" y="4" height="2" width="2" />
				<feComposite width="10" height="10" />
				<feTile result="a" />
				<feComposite in="SourceGraphic" in2="a" operator="in" />
				<feMorphology operator="dilate" radius="5" />
			</filter>
		</svg>
	);
};

export default Pixel;
