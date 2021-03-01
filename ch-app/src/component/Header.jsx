import React from 'react'
import { Link } from "react-router-dom";
import { Dropdown, Menu } from 'semantic-ui-react';
import 'semantic-ui-css/semantic.min.css'


export default function Header(){
	const options = [
		{ key: 1, text: '회사소개', value: 1, href : "http://www.naver.com" },
		{ key: 2, text: '찾아오시는 길', value: 2, href : "link2" },
		{ key: 3, text: '사이트맵', value: 3, href : "link3" },
	]
	const options2 = [
		{ key: 1, text: '222 1', value: 1 },
		{ key: 2, text: '222 2', value: 2 },
		{ key: 3, text: '222 3', value: 3 },
	]
	const options3 = [
		{ key: 1, text: '333 1', value: 1 },
		{ key: 2, text: '333 2', value: 2 },
		{ key: 3, text: '333 3', value: 3 },
	]

	const DropdownExampleSimple = () => (
		<Menu compact>
			<Dropdown text='Dropdown' options={options} simple item />
		</Menu>
	);
	
	return (
		<header>
			<h1><Link to="/">Logo</Link></h1>
			<div id="gnb">
				<ul>
					<li>
						<Menu compact>
							<Dropdown text='회사소개' options={options} simple as={Link} onClick={ (e) => {
								return false;
							}} />
						</Menu>
					</li>
					<li>
						<Menu compact>
							<Dropdown text='제품소개' options={options2} simple as={Link} />
						</Menu>
					</li>
					<li>
						<Menu compact>
							<Dropdown text='시공사례' options={options3} simple />
						</Menu>
					</li>
				</ul>
				
			</div>
		</header>
	);
}
