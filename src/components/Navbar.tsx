import { listenerCount } from "process";
import { useState } from "react";
import useViewPort from "../hooks/useViewPort";
import '../styles/Navbar.scss'

const Navbar = () => {
	const isMobile = useViewPort();
	const [showMenu, setShowMenu] = useState(!isMobile)
	const menuItems = [
		{
			name: "About"
		},
		{
			name: "Experience"
		},
		{
			name: "Work"
		},
		{
			name: "Contact"
		}
	];
	const handleToggleMenu = () => {
		setShowMenu(!showMenu);
	};
	return <div className="nav-container">
		<span className="logo">{'<MD/>'}</span>
		{isMobile && (
			<div
				className={`hamburger ${showMenu && "active"}`}
				onClick={handleToggleMenu}
			>
				<div className="line1"></div>
				<div className="line2"></div>
			</div>
		)}

		{showMenu && <nav>
			<ul className="nav-list">
				{menuItems.map((menu, idx) => <li key={idx} className="nav-item">{menu.name}</li>)}
				<li className="nav-item"><a href="/Marutha_profile.pdf" className="btn" >Resume</a> </li>
			</ul>
		</nav>}
	</div>
}

export default Navbar;