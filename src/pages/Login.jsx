import { useState  } from "react";

import { Link } from "react-router-dom";

import { useNavigate } from "react-router-dom";
import "./css/login.css";

const Login = () => {
	const [data, setData] = useState({ email: "", password: "" });
	const [error, setError] = useState("");
	const navigate = useNavigate();

	const handleChange = ({ currentTarget: input }) => {
		setData({ ...data, [input.name]: input.value });
	};

	const handleSubmit = async (e) => {
		console.log("data", data);
        navigate("/");
	};

	return (
		<div className='login_container'>
			<div className='login_form_container'>
				<div className='left'>
					<form className='form_container' onSubmit={handleSubmit}>
						<h1>Login to Your Account</h1>
						<input
							type="email"
							placeholder="Email"
							name="email"
							onChange={handleChange}
							value={data.email}
							required
							className='input'
						/>
						<input
							type="password"
							placeholder="Password"
							name="password"
							onChange={handleChange}
							value={data.password}
							required
							className='input'
						/>
						{error && <div className='error_msg'>{error}</div>}
						<button type="submit" className='green_btn'>
							Sing In
						</button>
					</form>
				</div>
				<div className='right'>
					<h1>New Here ?</h1>
					<Link to="/">
						<button type="button" className='white_btn'>
							Sing Up
						</button>
					</Link>
				</div>
			</div>
		</div>
	);
};

export default Login;