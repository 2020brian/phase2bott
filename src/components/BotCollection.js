import React, { useState, useEffect } from "react";
import BotCard from "./BotCard";

function BotCollection() {
	const [data, setData] = useState([]);
	useEffect(() => {
		fetch("http://localhost:8002/bots").then((result) => {
			result.json().then((response) => {
				// console.log("result", response);
				setData(response);
			});
		});
	}, []);

	// Your code here
	return (
		<div className="ui four column grid">
			<div className="row">
      {/* <h1>Collection of bot</h1> */}

					{data.map((bot)=>( 
<>

            <BotCard bot={bot} />
            </>

					))} 
			</div>
		</div>
	);
}

export default BotCollection;
