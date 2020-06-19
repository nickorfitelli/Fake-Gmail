import React, { useEffect, useState } from "react";
import SingleEmail from "./SingleEmail.js";

function EmailBig({ sender, subject }) {
	const [emailStorage, setEmailStorage] = useState("");
	let emaillist;

	useEffect(() => {
		(async () => {
			//Fetch API data
			if (emailStorage === "") {
				const result = await fetch("http://localhost:3001/emails");
				if (!result.ok) {
					return;
				}
                const jsonResult = await result.json();

                let emailObj = {
                    sender: jsonResult.map,
                    recipient: "",
                    subject: "",
                    message:"",
                    date:"",
                    id: ""
                }

               let emails = jsonResult.map((item) => item.sender);
				setEmailStorage(emails);


				console.log(emails);

                if (emailStorage === undefined) return
                
					emaillist = (
						<>
							{emails.map((x, i) => (
								<SingleEmail sender={x} key={i} />
							))}
						</>
                    );
                    
                    console.log(emailStorage)
			}
		})(); //defines function, immediately calls -> "iffy"
	}, [emailStorage]);

	return (
		<div style={{ margin: "1%", width: "100%", height: "100%" }}>
			<SingleEmail sender={"Nick"} subject = {"This is important"} />
							
		</div>
	);
}

export default EmailBig;
