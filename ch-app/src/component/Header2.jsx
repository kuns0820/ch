import React from 'react'
import { Link } from "react-router-dom";
import Menu, {SubMenu, Item as MenuItem, Divider} from 'rc-menu';
import 'rc-menu/assets/index.css'


export default function Header(){

	return (
		<header>
			<h1><Link to="/">Logo</Link></h1>
			<div id="gnb">
				<ul>
					<li style={{
						width : "500px"
					}}>
						<Menu>
							<MenuItem>회사소개</MenuItem>
							<SubMenu title="2">
								<MenuItem>2-1</MenuItem>
							</SubMenu>
							<MenuItem>제품소개</MenuItem>
							<SubMenu title="2">
								<MenuItem>2-1</MenuItem>
							</SubMenu>
							<MenuItem>커뮤니티</MenuItem>
							<SubMenu title="2">
								<MenuItem><Link to="/about">2-1</Link></MenuItem>
							</SubMenu>
						</Menu>
					</li>
				</ul>
				
			</div>
		</header>
	);
}
