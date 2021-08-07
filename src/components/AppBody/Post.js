import { Avatar } from '@material-ui/core'
import React , { forwardRef } from 'react'
import InputOption from './InputOption'
import './Post.css'
import ThumbUpAltOutlinedIcon from '@material-ui/icons/ThumbUpAltOutlined';
import ChatOutlinedIcon from '@material-ui/icons/ChatOutlined';
import ShareOutlinedIcon from '@material-ui/icons/ShareOutlined';
import SendOutlinedIcon from '@material-ui/icons/SendOutlined';

const Post = forwardRef(({ name, desc, message, photoURL}, ref) => {
	return (
		<div ref={ref} className="post">
			<div className="post_header">
				<Avatar src={photoURL}>{name[0]}</Avatar>
				<div className="post_info">
					<h2>{name}</h2>
					<p>{desc}</p>
				</div>
			</div>

			<div className="post_body">
				<p>{message}</p>
			</div>

			<div className="post_buttons">
				<InputOption Icon={ThumbUpAltOutlinedIcon} title="like" color="gray"/>
				<InputOption Icon={ChatOutlinedIcon} title="like" color="gray"/>
				<InputOption Icon={ShareOutlinedIcon} title="like" color="gray"/>
				<InputOption Icon={SendOutlinedIcon} title="like" color="gray"/>
			</div>

		</div>
	)
})

export default Post