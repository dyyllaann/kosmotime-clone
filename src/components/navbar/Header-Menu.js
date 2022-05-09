import React from "react";
import "./Navbar.css";

function FocusControls() {
	return (
		<div className="focus-controls">
			<h4 className="focus-controls--title">Focus</h4>
			<div className="focus-controls--close-tab">
				<div
					className="focus-controls--folder-icon iqMZGE CloseTabsButton__StyledIcon-q05zn3-0 iGlJHi"
					fill="none"
					size="16"
					stroke="none"
				>
					<svg
						width="15"
						height="11"
						viewBox="0 0 15 11"
						fill="none"
						xmlns="http://www.w3.org/2000/svg"
					>
						<path
							d="M1 1C1 0.861929 1.11193 0.75 1.25 0.75H5.98654C6.10236 1.32056 6.6068 1.75 7.21154 1.75H13.25C13.3881 1.75 13.5 1.86193 13.5 2V10C13.5 10.1381 13.3881 10.25 13.25 10.25H1.25C1.11193 10.25 1 10.1381 1 10V1Z"
							stroke="#B2AEC2"
							strokeWidth="1.5"
						></path>
					</svg>
				</div>
				{/* <div
					className="Icon__Container-sc-8dnspv-0 hMLWZM CloseTabsButton__StyledIcon-q05zn3-0 iGlJHi cropped-icon--1"
					fill="#b2aec2"
					size="11"
					stroke="none"
				>
					<svg
						className="cropped-folder"
						width="3"
						height="11"
						viewBox="0 0 3 11"
						fill="none"
						xmlns="http://www.w3.org/2000/svg"
					>
						<path
							d="M4.08984 10.2238V1.74805"
							stroke="#B2AEC2"
							strokeWidth="1.5"
							strokeLinecap="round"
						></path>
						<path
							className="cropped-folder__top-line"
							d="M4.0907 1.74805L1.71875 1.74805"
							stroke="#B2AEC2"
							strokeWidth="1.5"
							strokeLinecap="round"
						></path>
						<path
							className="cropped-folder__bottom-line"
							d="M4.0907 10.2236L1.71875 10.2236"
							stroke="#B2AEC2"
							strokeWidth="1.5"
							strokeLinecap="round"
						></path>
					</svg>
				</div> */}
				<span>CLOSE TABS</span>
			</div>
			<div className="focus-controls--mute-mode">
				<span>MUTE MODE</span>
				<div className="switch">
					<div className="slider"></div>
				</div>
			</div>
		</div>
	);
}

function ProfileContainer() {
	return (
			<div className="material-icons" id="profile">
				account_circle
			</div>
	);
}

function HelpContainer() {
	return (
			<div className="material-icons" id="help">
				help_outline
			</div>
	);
}

function MenuContainer() {
	return (
			<div className="material-icons" id="menu">
				menu
			</div>
	);
}

function Menu(props) {
	return (
		<div className="nav">
			<div className="nav--left">
				<FocusControls />
			</div>
			<div className="menu">
				<ul>
					<li
						className="menu-item"
						id="menu-item--calendar"
						onClick={() => props.handleChange(0)}
					>
						<span>Calendar</span>
					</li>
					<li
						className="menu-item"
						id="menu-item--tasks"
						onClick={() => props.handleChange(1)}
					>
						<svg
							className="tasks-icon"
							width="18"
							height="18"
							viewBox="0 0 18 18"
							fill="none"
							xmlns="http://www.w3.org/2000/svg"
						>
							<path
								d="M11.875 6.12012L8.147 9.84812C8.04453 9.9503 7.90572 10.0077 7.761 10.0077C7.61629 10.0077 7.47747 9.9503 7.375 9.84812L6.125 8.60012"
								stroke="#4D4375"
								strokeWidth="2"
								strokeLinecap="round"
								strokeLinejoin="round"
							></path>
							<path
								d="M15.6382 12.4424L12.4433 15.6379C12.265 15.8161 12.0532 15.9575 11.8202 16.0539C11.5872 16.1504 11.3374 16.1999 11.0853 16.1998H3.72078C3.21157 16.1998 2.72321 15.9975 2.36314 15.6374C2.00307 15.2774 1.80078 14.789 1.80078 14.2798V3.7198C1.80078 3.21059 2.00307 2.72223 2.36314 2.36216C2.72321 2.00209 3.21157 1.7998 3.72078 1.7998H14.2808C14.79 1.7998 15.2784 2.00209 15.6384 2.36216C15.9985 2.72223 16.2008 3.21059 16.2008 3.7198V11.0849C16.2007 11.5941 15.9983 12.0824 15.6382 12.4424V12.4424Z"
								stroke="#4D4375"
								strokeWidth="2"
								strokeLinecap="round"
								strokeLinejoin="round"
							></path>
							<path
								d="M11.4004 16.2004V13.3309C11.4004 12.8189 11.6038 12.3279 11.9658 11.9658C12.3279 11.6038 12.8189 11.4004 13.3309 11.4004H16.2004"
								stroke="#4D4375"
								strokeWidth="2"
								strokeLinecap="round"
								strokeLinejoin="round"
							></path>
						</svg>
						<span>Tasks</span>
					</li>
					<li
						className="menu-item"
						id="menu-item--time-reports"
						onClick={() => props.handleChange(2)}
					>
						<span>Time Reports</span>
					</li>
				</ul>
			</div>
			<div className="nav--right">
				<ProfileContainer />
				<HelpContainer />
				<MenuContainer />
			</div>
		</div>
	);
}

export default Menu;