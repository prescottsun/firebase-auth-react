import React from "react";
import { Container } from "react-bootstrap";
import Signup from "./components/Signup";
import { AuthProvider } from "./contexts/AuthContext";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import Dashboard from "./components/Dashboard";
import Login from "./components/Login";
import PrivateRoute from "./components/PrivateRoute";
import ForgotPassword from "./components/ForogotPassword";
import UpdateProfile from "./components/UpdateProfile";

function App() {
	return (
		<Container
			className="d-flex align-items-center justify-content-center"
			style={{ minHeight: "100vh" }}
		>
			<div className="w-100" style={{ maxWidth: "400px" }}>
				<Router>
					<AuthProvider>
						<Switch>
							<PrivateRoute exact path="/" component={Dashboard} />
							<PrivateRoute path="/update-profile" component={UpdateProfile} />
							<Route path="/signup" component={Signup} />
							<Route path="/login" component={Login} />
							<Route path="/forgot-password" component={ForgotPassword} />
						</Switch>
					</AuthProvider>
				</Router>
			</div>
		</Container>
	);
}

export default App;
