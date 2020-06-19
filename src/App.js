import React from "react";
import "bootstrap/dist/css/bootstrap.min.css";
import Navbar from "react-bootstrap/Navbar";
import Nav from "react-bootstrap/Nav";
import Form from "react-bootstrap/Form";
import Button from "react-bootstrap/Button";
import FormControl from "react-bootstrap/FormControl";
import SendEmail from "./SendEmail.js";
import EmailBig from "./EmailBig.js"

function App() {
	return (
		<div>
			<Navbar>
				<Navbar.Brand href="#home">Fake Gmail</Navbar.Brand>
				<Navbar.Toggle aria-controls="basic-navbar-nav" />
				<Navbar.Collapse id="basic-navbar-nav">
					<Nav className="mr-auto">
						<SendEmail></SendEmail>
						<Form inline>
							<FormControl
								type="text"
								placeholder="Search"
								className="mr-sm-2"
							/>
							<Button variant="outline-success" style = {{padding: "5px"}}>Search</Button>
						</Form>
					</Nav>
				</Navbar.Collapse>
			</Navbar>

      <EmailBig />

		</div>
	);
}

export default App;
