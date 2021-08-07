import { Avatar } from '@material-ui/core'
import React from 'react'
import { useSelector } from 'react-redux';
import { selectUser } from '../../features/userSlice';
import './Sidebar.css'

function Sidebar() {

	const user = useSelector(selectUser);

	const recentItem = (itemName) => (
		<div className="sidebar_recentItem">
			<span className="sidebar_hashtag">#</span>
			<p>{itemName}</p>
		</div>
	);

	return (
		<div className="sidebar">
			<div className="sidebar_top">
				<img src="https://picsum.photos/600/300/?blur" alt="" />
				<Avatar src={user.photoURL} className="sidebar_avatar">
					{user.displayName[0]}
				</Avatar>
				<h2>{user.displayName}</h2>
				<h4>{user.email}</h4>
			</div>

			<div className="sidebar_stats">
				<div className="sidebar_stat">
					<p>Who viewed you</p>
					<p className="sidebar_statNumber">1,234</p>
				</div>
				<div className="sidebar_stat">
					<p>Views on posts </p>
					<p className="sidebar_statNumber">9,876</p>
				</div>
			</div>

			<div className="sidebar_bottom">
				<p>Recent</p>
					{recentItem("wed dev")}
					{recentItem('programming')}
					{recentItem('softwareengineering')}
					{recentItem('design')}
			</div>
		</div>
	)
}

export default Sidebar
