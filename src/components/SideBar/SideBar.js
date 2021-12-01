import React from "react";
import styled from "styled-components";

export default function SideBar() {
	//TODO API
	const uploadFile = async (event) => {
		event.preventDefault();
		console.log(event);
		const files = event.target.files;

		const formData = new FormData();
		Array.from(files).forEach((f) => formData.append("sprites", f));
		try {
			let res = await fetch("/uploadSprite", {
				method: "POST",
				body: formData,
			});
			console.log(res);
		} catch (e) {
			console.log(e);
		}
	};
	return (
		<Side>
			<TopSection>
				{/* Button to upload files */}
				<span>Upload Sprite Sheet:</span>
				<input multiple="multiple" type="file" onChange={uploadFile} />
			</TopSection>

			<ListContainer>
				<List>
					<ListItem>LIST</ListItem>
					<ListItem>LIST</ListItem>
					<ListItem>LIST</ListItem>
					<ListItem>LIST</ListItem>
					<ListItem>LIST</ListItem>
					<ListItem>LIST</ListItem>
					<ListItem>LIST</ListItem>
				</List>
			</ListContainer>
		</Side>
	);
}

const TopSection = styled.div`
	border: 1px solid blue;
	flex: 1;
	height: 20%;
`;

const ListItem = styled.div`
	display: inline-block;
	border: 1px solid yellow;
	padding: 0.5em;
	margin: 0.5em;
	width: calc(50% - 1em);
	/* display: flex; */

	/* justify-content: center; */
	/* align-items: center; */
`;
const List = styled.div`
	/* height: 100%; */
	border: 2px solid red;
	display: inline;
`;
const ListContainer = styled.div`
	border: 3px solid green;
	flex: 2;
	display: flex;
	flex-wrap: wrap;
	position: relative;
	overflow-y: auto;
	height: 80%;
`;

const Side = styled.div`
	z-index: 10;
	/* display: flex;

	flex-direction: column; */
	position: absolute;
	left: 0;
	top: 0;
	/* bottom: 0; */
	width: 200px;
	border: 5px solid #000000;
	background: #333;
	color: #ffffff;
	height: 100vh;
`;
