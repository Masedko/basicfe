import { useState } from "react";
import classes from "./Image.module.css";

const Image = () => {
	const changeRate = 15;
	const [imageSize, setImageSize] = useState({ height: 300, width: 500 });
	const [isImageShown, setIsImageShown] = useState(true);
	const add = () => {
		setIsImageShown(true);
	}
	const remove = () => {
		setIsImageShown(false);
	}
	const increase = () => {
		setImageSize({height: imageSize.height + changeRate, width: imageSize.width + changeRate});
	};
	const decrease = () => {
		if(imageSize.height - changeRate > 0 && imageSize.width - changeRate > 0){
			setImageSize({height: imageSize.height - changeRate, width: imageSize.width - changeRate});
		}
	};
	const getDisplayValue = () => {
		return isImageShown ? "block" : "none";
	}
	return (
		<div>
			<div className={classes.buttons}>
				<button onClick={add}>Додати</button>
				<button onClick={increase}>Збільшити</button>
				<button onClick={decrease}>Зменшити</button>
				<button onClick={remove}>Видалити</button>
			</div>
			<a
				href ="https://city-adm.lviv.ua/news/society/social-sphere/293065-lvivski-pidlitky-vytratyly-znachnu-sumu-v-onlain-ihrakh-iak-tsomu-zapobihty"
				target="_blank"
				rel="noopener noreferrer"
				style={{display: getDisplayValue()}}
			>
				<img
					src="https://city-adm.lviv.ua/img/843x500/d/dsc9611-9354534c.jpg"
					className={classes.image}
					style={{height: `${imageSize.height}px`, width: `${imageSize.width}px`}}
					alt="Львів. Вид з даху"
				/>
			</a>
		</div>
	);
};

export default Image;