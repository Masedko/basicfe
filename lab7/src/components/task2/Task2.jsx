import React, { useEffect, useState } from "react";
import GoodsCard from "./GoodsCard";
import classes from "./Task2.module.css"

const Task2 = () => {
	const [goods, setGoods] = useState(null);

	useEffect(() => {
		fetch("https://dummyjson.com/products?limit=6")
			.then((response) => response.json())
			.then((data) => setGoods(data.products));
	}, []);

	if (!goods) {
		return <span>Loading...</span>;
	}

	return (
        <div className={classes.goods}>
            {goods.map((good) => {
                console.log(good.images);
                return (
                    <GoodsCard
                        key={good.title}
                        image={good.images[0]}
                        price={good.price}
                        title={good.title}
                        description={good.description}
                    />
                );
            })}
        </div>
	);
};

export default Task2;