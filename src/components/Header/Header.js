import React from 'react'
import './Header.css'
import SearchIcon from '@material-ui/icons/Search';
import HeaderOption from './HeaderOption';
import HomeIcon from '@material-ui/icons/Home';
import SupervisorAccountIcon from '@material-ui/icons/SupervisorAccount';
import BusinessCenterIcon from '@material-ui/icons/BusinessCenter';
import ChatIcon from '@material-ui/icons/Chat';
import NotificationsIcon from '@material-ui/icons/Notifications';
import { useDispatch, useSelector } from 'react-redux';
import { logout, selectUser } from '../../features/userSlice';
import { auth } from '../firebase';

function Header() {

	const user = useSelector(selectUser);

	const dispatch = useDispatch();

	const logoutApp = () => {
		dispatch(logout());
		auth.signOut();
	}

	return (
		<div className="header">

			<div className="header_left">

				<img src="https://www.flaticon.com/svg/static/icons/svg/174/174857.svg" alt=""></img>
				
				<div className="header_search">
					<SearchIcon />
					<input type="text" placeholder="Search"></input>
				</div>

			</div>

			<div className="header_right">
				<HeaderOption Icon={HomeIcon} title="home" />
				<HeaderOption Icon={SupervisorAccountIcon} title="My Network" />
				<HeaderOption Icon={BusinessCenterIcon} title="Jobs" />
				<HeaderOption Icon={ChatIcon} title="Messaging" />
				<HeaderOption Icon={NotificationsIcon} title="Notifications" />
				<HeaderOption title={user?.displayName} onClick={logoutApp} avatar={true} />
			</div>
		</div>
	)
}

export default Header