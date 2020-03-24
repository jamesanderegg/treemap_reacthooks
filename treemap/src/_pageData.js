import React from 'react';
import Login from "./components/User/Login"
import Register from "./components/User/Register"

const pageData = [{
	"name": "Portfolio",
	"children": [
		{
			"name": "About Me",
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
			"name": "Projects",
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
				}
			]
		},
		{
			"name": "Contact",
			"children": [
				{
					"name": "Resume",
					"children": [
						{ "name": "Download", "value": "folding-1.jpg" }
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
			"name": "Sign Up",
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
		}
	]
}]

export default pageData;