import React from 'react';
import Login from "./components/User/Login"
import Register from "./components/User/Register"

const pageData = [{
	"name": "Portfolio",
	"children": [
		{
			"name": "About",
			"displayText": "My resume and a blog of some kind.",
			"children": [
				{
					"name": "Resume",
					"children": [
						{ "name": "File", "value": "cgi-1.jpg" }
					]
				},
				{
					"name": "Profile",
					"children": [
						{ "name": "text", "value": "cgi-1.jpg" }
					]
				}
			]
		},
		{
			"name": "Contact",
			"displayText": "Social Media and Email address",
			"children": [
				{
					"name": "Social Media",
					"children": [
						{ "name": "Media", "value": "folding-1.jpg" }
					]
				},
				{
					"name": "Email",
					"children": [
						{ "name": "Phone", "value": "stitched-1.jpg" }
					]
				}			
			]
		},
		{
			"name": "DataFluent",
			"displayText": "Creative solutions for cleaning, analyzing and visualizing data.",
			"children": [
				{
					"name": "DBA DataFluent",
					"children": [
						{ "name": "dataFluentFeature", "value": "folding-1.jpg" },
						{ "name": "anotherContactForm", "value": "folding-1.jpg" },
                    ],
                    
				},			
			]
		},
		{
			"name": "Login",
			"displayText": "Sign up to record high scores and comment on projects.",
			"children": [
				{
					"name": "Login",
					"children": [
                        { "name": "loginfeature", "value": "folding-1.jpg" }
                    ],
                    "component": <Login />
				},
				{
					"name": "Register",
					"children": [
						{ "name": "reagisterfeature", "value": "stitched-1.jpg" }
                    ],
                    "component": <Register />
				}			
			]
		},
		{
			"name": "Projects",
			"displayText": "Live projects and Github links.",
			"children": [
				{
					"name": "Games",
					"children": [
						{ "name": "Snake", "value": "litho-1.jpg" }
					]
				},
				{
					"name": "D3",
					"children": [
						{ "name": "MLB", "value": "digital-1.jpg" }
					]
				},
				{
					"name": "Maps",
					"children": [
						{ "name": "denver311", "value": "litho-1.jpg" }
					]
				},
				{
					"name": "GPS Heatmap",
					"children": [
						{ "name": "gpsHeatMap", "value": "litho-1.jpg" }
					]
				},
				{
					"name": "Tetris",
					"children": [
						{ "name": "tetris", "value": "litho-1.jpg" }
					]
				},
			]
		}
	]
}]

export default pageData;