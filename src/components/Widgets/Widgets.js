import React from 'react'
import './Widgets.css'
import { Info, FiberManualRecord }from '@material-ui/icons'

function Widgets() {

	const newsArticle = (heading, subtitle) => (
		<div className="widgets_article">
			<div className="widgets_articleLeft">
				<FiberManualRecord />
			</div>
			<div className="widgets_articleRight">
				<h4>{heading}</h4>
				<p>{subtitle}</p>
			</div>
		</div>
	)

	return (
		<div className="widgets">
			<div className="widgets_header">
				<h2>Annup's Linkedin News</h2>
				<Info />
			</div>

			{newsArticle("4 hour coding session", "Built on August 6th 2021 to demo my skills")}

			{newsArticle("To log out", "Click your avatar in the header")}

			{newsArticle("You can post", "This allowes you to join the discussion")}

			{newsArticle("Using React", "For an interactive interface")}

			{newsArticle("Using Redux", "For app-wide state management")}

			{newsArticle("Using Firebase", "As a web server for posts storage and user authentication")}

		</div>
	)
}

export default Widgets
