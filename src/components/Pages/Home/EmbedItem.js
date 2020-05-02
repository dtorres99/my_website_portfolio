import React, { useState, useEffect } from "react";
import InstagramEmbed from "react-instagram-embed";

const EmbedItem = ({ src, width, height, title, caption, percentage }) => {
	let itemHeight;
	let item = <div></div>;
	const itemPercentage = percentage || 0.8;
	const itemTitle = title || src.split("/")[4];
	const [pageWidth, setPageWidth] = useState(window.innerWidth);
	const [itemWidth, setItemWidth] = useState(
		parseInt(width, 10) || pageWidth * itemPercentage
	);

	const embedInstagram = () => {
		item = (
			<InstagramEmbed
				className="instaPost"
				url={src}
				maxWidth={itemWidth}
				hideCaption={true}
				containerTagName="div"
				protocol=""
				injectScript
				onLoading={() => {}}
				onSuccess={() => {}}
				onAfterRender={() => {}}
				onFailure={() => {}}
			/>
		);
	};

	const embedYoutube = () => {
		const widthToHeightRatio = 315 / 560;
		itemHeight = itemWidth * widthToHeightRatio;
		item = (
			<iframe
				className="history-item-youtube"
				title={itemTitle}
				width={itemWidth.toString()}
				height={itemHeight.toString()}
				src={src}
				frameBorder="0"
				allow="accelerometer; autoplay; encrypted-media; gyroscope; picture-in-picture"
				allowFullScreen></iframe>
		);
	};

	const embedImg = () => {
		itemHeight = height;
		item = (
			<img
				src={src}
				alt="place-holder"
				width={itemWidth}
				height={itemHeight}
				title={title}
			/>
		);
	};

	if (src.includes("instagram")) {
		embedInstagram();
	} else if (src.includes("youtube")) {
		embedYoutube();
	} else {
		embedImg();
	}

	const handleResize = () => {
		setPageWidth(window.innerWidth);
		// console.log(itemWidth * (1 / itemPercentage));
		if (pageWidth < width * (1 / itemPercentage) || width === undefined) {
			setItemWidth(pageWidth * itemPercentage);
		} else {
			setItemWidth(width);
		}
	};

	useEffect(handleResize, []);

	window.addEventListener("resize", handleResize);

	return (
		<div className="history-item">
			<h1 className="history-item-title">{itemTitle}</h1>
			{item}
			<figcaption className="history-item-caption">{caption}</figcaption>
		</div>
	);
};

export default EmbedItem;
