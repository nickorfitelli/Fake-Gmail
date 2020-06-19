import React from "react";
import Card from "react-bootstrap/Card";

function SingleEmail({sender,subject}) {
          
	return (
		<div>
			<Card style={{ width: "95%", position:"relative", margin: ".5%"  }}>
				<Card.Body>
                    <Card.Text>
                        From: {sender}
                    </Card.Text>
					<Card.Text>
						Subject Line: {subject}
					</Card.Text>
				</Card.Body>
			</Card>
		</div>
	);
}

export default SingleEmail;
