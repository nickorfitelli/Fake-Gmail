import React, { useEffect, useState } from "react";
import SingleEmail from "./SingleEmail.js";

function EmailBig({ sender, subject }) {
	const [emailStorage, setEmailStorage] = useState("");
	let send = []

	useEffect(() => {
		(async () => {
			//Fetch API data
			if (emailStorage === "") {
				const result = await fetch("http://localhost:3001/emails");
				if (!result.ok) {
					return;
				}
                const jsonResult = await result.json();

                console.log(jsonResult)
                // let emailObj = {
                //     sender:jsonResult.map(x=>x.sender),
                //     recipient: jsonResult.map(x=>x.recipient),
                //     subject: jsonResult.map(x=>x.subject),
                //     message:jsonResult.map(x=>x.message),
                //     date:jsonResult.map(x=>x.date),
                //     id: jsonResult.map(x=>x.id)
                // }

              
				setEmailStorage(jsonResult);


                // if (emailStorage === undefined) return
                
					//  const emaillist = (
					// 	<>
					// 		{this.state.map((x, i) => (
					// 			<SingleEmail sender={x} key={i} />
					// 		))}
					// 	</>
                    // );
                
			}
		})(); //defines function, immediately calls -> "iffy"
	}, [emailStorage]);

	return (
		<div style={{ margin: "1%", width: "100%", height: "100%" }}>
			<SingleEmail sender={""} subject = {""} />
							
		</div>
	);
}

export default EmailBig;
