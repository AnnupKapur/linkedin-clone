import React from 'react'
import { useState } from 'react'
import { useDispatch } from 'react-redux';
import { login } from '../../features/userSlice';
import { auth } from '../firebase'
import "./Login.css"

function Login() {

	const [name, setName] = useState("");
	const [email, setEmail] = useState("");
	const [password, setPassword] = useState("");
	const [profilePic, setProfilePic] = useState("");
	const dispatch = useDispatch();

	const register = () => {
		if(!name){
			return alert("Please enter your full name!");
		}

		auth.createUserWithEmailAndPassword(email, password).then((userAuth) => {
			userAuth.user.updateProfile({
				displayName:name,
				photoURL: profilePic
			}).then(()=>{
				dispatch(login({
					email:userAuth.user.email,
					uid: userAuth.user.uid,
					displayName: name,
					photoURL: profilePic
				}))
			});
		}).catch(error => alert(error));
	};

	const loginToApp = (e) => {
		e.preventDefault();
		auth.signInWithEmailAndPassword(email, password).then(userAuth => {
			dispatch(login({
				email: userAuth.user.email,
				uid: userAuth.user.uid,
				displayName: userAuth.user.displayName,
				profileURL: userAuth.user.profileURL
			}));
		}).catch(error => alert(error));
	};

	return (
		<div className="login">
			<img src="https://upload.wikimedia.org/wikipedia/commons/0/01/LinkedIn_Logo.svg" alt="" />

			<form>
				<input 
					type="text" 
					placeholder="Fullname (required for registration)" 
					value={name}
					onChange={(e)=>setName(e.target.value)}/>

				<input 
					type="text" 
					placeholder="URL for profile photo (optional)"
					value={profilePic}
					onChange={(e)=>setProfilePic(e.target.value)}/>

				<input 
					type="Email" 
					placeholder="Email" 
					value={email} 
					onChange={(e)=>setEmail(e.target.value)} />

				<input 
					type="password"
					placeholder="Password"
					value={password}
					onChange={(e)=>setPassword(e.target.value)}/>

				<button type="submit" onClick={loginToApp}>Sign In</button>

			</form>

			<p>Not registered yet? 
				<span className="login_register" onClick={register}>Register Now</span>
			</p>
		</div>
	)
}

export default Login
