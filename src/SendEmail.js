import React, { useState } from "react";
import Modal from "react-bootstrap/Modal";
import Button from "react-bootstrap/Button";
import InputGroup from "react-bootstrap/InputGroup";
import FormControl from "react-bootstrap/FormControl";

function SendEmail() {
	const [show, setShow] = useState(false);
    const [recipient, setRecipient] = useState("");
    const [message, setMessage] = useState("Message")
	const handleClose = () => setShow(false);
    const handleShow = () => setShow(true);
    

	const data = {
		sender: "youremail@fakemail.com",
		recipient: "someone@gmail.com",
		subject: "Test Subject",
		message: {message},
	};

	const postData = () => {
		fetch("http://localhost:3001/send", {
			method: "POST",
			body: JSON.stringify(data),
			headers: {
				"Content-Type": "application/json",
			},
			credentials: "same-origin",
		}).then(
			function (response) {
                console.log(data)
				handleClose();
				return response.text();
			},
			function (error) {
				return;
			}
		);
	};

	// postData("https://example.com/answer", { answer: 42 }).then((data) => {
	// 	console.log(data); // JSON data parsed by `response.json()` call
	// });

	return (
		<>
			<Button
				variant="primary"
				size="md"
				onClick={handleShow}
				style={{ padding: "5px", margin: "5px" }}
			>
				Send Email
			</Button>

			<Modal show={show} onHide={handleClose}>
				<Modal.Header closeButton>
					<Modal.Title>Send Email</Modal.Title>
				</Modal.Header>
				<Modal.Body>
					<label>To:</label>
					<InputGroup className="mb-3">
						<FormControl
							placeholder="Recipient's Email Address"
							aria-label="Recipient's username"
							aria-describedby="basic-addon2"
						/>
					</InputGroup>
					<label>Subject</label>
					<InputGroup className="mb-3">
						<FormControl
							placeholder="Recipient's Email Address"
							aria-label="Recipient's username"
							aria-describedby="basic-addon2"
						/>
					</InputGroup>
					<label>Message:</label>
					<InputGroup>
						<FormControl
							as="textarea"
							rows="5"
							aria-label="With textarea"
							onChange={(event) => {
								setMessage(event.target.value);
							}}
						/>
					</InputGroup>
				</Modal.Body>
				<Modal.Footer>
					<Button variant="secondary" onClick={handleClose}>
						Close
					</Button>
					<Button variant="primary" onClick={postData}>
						Send Email
					</Button>
				</Modal.Footer>
			</Modal>
		</>
	);
}

export default SendEmail;
