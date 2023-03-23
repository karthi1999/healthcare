import { useState } from "react";
import ChangePasswordModel from "./ChangePasswordModel";
import { useNavigate } from "react-router-dom";
import logo from "../../img/logo.svg"

export default function SignIn() {
	const navigate = useNavigate()
	const [open, setOpen] = useState(false);
	const [hide, setHide] = useState(true);
	const [userName, setUserName] = useState('');
	const [password, setPassword] = useState('');
	const [error, setError] = useState('');

	const submitHandler = (e) => {
		e.preventDefault();
		if (userName && password) {
			navigate('/home')
		}
		else {
			setError('Invalid User!')
		}
	}
	return (
		<>
			<div className="flex min-h-screen flex-col justify-center py-12 sm:px-6 lg:px-8">
				<div className="sm:mx-auto sm:w-full sm:max-w-md">
					<p className="flex justify-center">
						<img src={logo} alt="Logo" />
					</p>
					<h2 className="sm:whitespace-nowrap mb-3 text-center text-3xl font-extrabold uppercase tracking-widest text-primary">A<span className="text-2xl font-extrabold">gan</span> H<span className="text-2xl font-extrabold">ealthcare</span> S<span className="text-2xl font-extrabold">ervices</span></h2>
				</div>
				{error && <div className="flex justify-center items-center"><p>Invalid User!</p></div>}
				<div className="sm:mx-auto sm:w-full sm:max-w-md">
					<div className="py-8 px-16">
						<form className="space-y-6" onSubmit={(e) => submitHandler(e)}>
							<div className="mx-2">
								<input
									id="text"
									name="text"
									type="text"
									value={userName}
									onClick={() => setError('')}
									onChange={(e) => { setUserName(e.target.value) }}
									autoComplete="text"
									placeholder="Enter Your Username / Email"
									className="block w-full rounded-md border-0 p-2.5 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-primary sm:text-sm sm:leading-6 outline-none focus:outline-none"
								/>
							</div>
							<div className="mx-2 relative">
								<input
									id="password"
									name="password"
									type={`${hide ? 'password' : 'text'}`}
									value={password}
									onClick={() => setError('')}
									onChange={(e) => { setPassword(e.target.value) }}
									placeholder="Enter Your Password"
									autoComplete="current-password"
									className="block w-full rounded-md border-0 p-2.5 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-primary sm:text-sm sm:leading-6 outline-none focus:outline-none"
								/>
								{hide ?
									<svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth="1.5" stroke="currentColor" className="w-6 h-6 absolute right-2 top-1/4 stroke-gray-400" onClick={() => { setHide(false) }}>
										<path strokeLinecap="round" strokeLinejoin="round" d="M3.98 8.223A10.477 10.477 0 001.934 12C3.226 16.338 7.244 19.5 12 19.5c.993 0 1.953-.138 2.863-.395M6.228 6.228A10.45 10.45 0 0112 4.5c4.756 0 8.773 3.162 10.065 7.498a10.523 10.523 0 01-4.293 5.774M6.228 6.228L3 3m3.228 3.228l3.65 3.65m7.894 7.894L21 21m-3.228-3.228l-3.65-3.65m0 0a3 3 0 10-4.243-4.243m4.242 4.242L9.88 9.88" />
									</svg>
									:
									<svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth="1.5" stroke="currentColor" className="w-6 h-6 absolute right-2 top-1/4 stroke-gray-400" onClick={() => { setHide(true) }}>
										<path strokeLinecap="round" strokeLinejoin="round" d="M2.036 12.322a1.012 1.012 0 010-.639C3.423 7.51 7.36 4.5 12 4.5c4.638 0 8.573 3.007 9.963 7.178.07.207.07.431 0 .639C20.577 16.49 16.64 19.5 12 19.5c-4.638 0-8.573-3.007-9.963-7.178z" />
										<path strokeLinecap="round" strokeLinejoin="round" d="M15 12a3 3 0 11-6 0 3 3 0 016 0z" />
									</svg>}

							</div>

							<div onClick={() => setOpen(!open)} className="text-center capitalize underline decoration-1 decoration-gray-400 underline-offset-2 cursor-pointer font-medium text-gray-500 text-sm">
								<p>change password</p>
							</div>
							<ChangePasswordModel open={open} setOpen={setOpen} />
							<div>
								<button
									type="submit"
									className="flex w-full justify-center rounded-md bg-primary py-4 px-3 text-md font-semibold text-white shadow-sm hover:bg-primary focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-primary"
								>
									Login
								</button>
							</div>
						</form>
					</div>
				</div>
			</div>
		</>
	)
}
