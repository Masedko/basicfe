import { useState } from "react";
import classes from "./Content.module.css"

const Content = () => {
	const [isFirstStyled, setIsFirstStyled] = useState(false);
	const [isSecondStyled, setIsSecondStyled] = useState(false);
	const getFirstStyle = () =>
		isFirstStyled 
        ? { background: "red", color: "white" }
        : { background: "white", color: "black" }
	const getSecondStyle = () =>
		isSecondStyled
			? { background: "black", color: "white" }
			: { background: "white", color: "black" };
	return (
		<>
			<p
                onClick={() => setIsFirstStyled(!isFirstStyled)}
                style={getFirstStyle()}
            >
                Хоббі:</p>
            <ul
                onClick={() => setIsSecondStyled(!isSecondStyled)}
                style={getSecondStyle()}
            >
                <li>Комп'ютерні ігри</li>
                <li>Монтування відео</li>
                <li>Програмування</li>
            </ul>
            <p><i>Улюблені фільми:</i></p>
            <ol>
                <li>Memento</li>
                <li>Lock, Stock & Two Smoking Barrels</li>
                <li>Tenet</li>
            </ol>
            <p className={classes.text}>
                Львів — місто в Україні, адміністративний центр області, агломерації, району, міської громади, національно-культурний та
                освітньо-науковий осередок країни, великий промисловий центр і транспортний вузол, вважається столицею Галичини та
                центром Західної України. 
                За кількістю населення — сьоме місто країни (717 273 станом на 01.01.2022). Львів заснував король Данило приблизно у
                1231—1235 роках (перша згадка від 1256 року). Близько 1272 року місто стало столицею Королівств Русі (Галицько-
                Волинського князівства). З 1991 року Львів перебуває у складі України.
            </p>
		</>
	);
};

export default Content;