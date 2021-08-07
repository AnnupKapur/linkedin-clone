import React, { useState, useEffect } from 'react'
import './Feed.css'
import CreateIcon from '@material-ui/icons/Create'
import InputOption from './InputOption'
import ImageIcon from '@material-ui/icons/Image';
import SubscriptionsIcon from '@material-ui/icons/Subscriptions';
import EventNoteIcon from '@material-ui/icons/EventNote';
import CalendarViewDayIcon from '@material-ui/icons/CalendarViewDay';
import Post from './Post';
import { db } from "../firebase";
import firebase from 'firebase';
import { useSelector } from 'react-redux';
import { selectUser } from '../../features/userSlice';
import FlipMove from 'react-flip-move';

function Feed() {

	const user = useSelector(selectUser);
	const [input, setInput] = useState("");
	const [posts, setPosts] = useState([]);

	useEffect(() => {
		db.collection("posts").orderBy("timestamp", "desc").onSnapshot((snapshot) => (
			setPosts(snapshot.docs.map((doc) => (
				{
					id: doc.id,
					data: doc.data()
				}
			)))
		))
	}, [])

	const sendPost = (e) => {
		e.preventDefault();
		db.collection("posts").add({
			name: user.displayName,
			description: user.email,
			message: input,
			photoURL: user.photoURL || '',
			timestamp: firebase.firestore.FieldValue.serverTimestamp()
		});

		setInput("");
	}

	return (
		<div className="feed">
			<div className="feed_inputContainer">
				<div className="feed_input">
					<CreateIcon />
					<form onSubmit={sendPost}>

						<input 
							type="text"
							value={input} 
							onChange={ (e) => (setInput(e.target.value))}/>

						{/* MAY NOT REQUIRE THIS BUTTON */}
						<button onClick={sendPost} id="sendButton" type="submit">send</button>
					</form>
				</div>
				<div className="feed_inputOptions">
					<InputOption Icon={ImageIcon} title="Photo" color="hsla(197, 73%, 68%, 1)"/>

					<InputOption Icon={SubscriptionsIcon} title="Video" color="hsla(9, 81%, 69%, 1)"/>

					<InputOption Icon={EventNoteIcon} title="Event" color="hsla(189, 12%, 65%, 1)"/>

					<InputOption Icon={CalendarViewDayIcon} title="Article" color="hsla(100, 60%, 50%, 1)"/>
				</div>
			</div>

			<FlipMove>
			{posts.map(({id, data: {name, description, message, photoURL}}) => (
				<Post
					key={id}
					name={name} 
					desc={description}
					message={message}
					photoURL={photoURL} 
				/>
			))}
			</FlipMove>
		</div>
	)
}

export default Feed
