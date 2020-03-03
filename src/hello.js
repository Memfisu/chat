import React from 'react';
import "./main.css";

class Hello extends React.Component{
	render () {
		return (
			<div className='main-container'>
				<div className='left-menu'>
					<div className='left-menu__menu-block'>
						<div className='menu-icon' />
						<div className='search' />
					</div>
					<div className='left-menu__dialogs'>
						<div className='left-menu__dialogs_item'>
							<div className='photo' />
							<div>online</div>
							<div className='dialogs-item'>
								<div className='name'>Вася Божественный</div>
								<div className="dialogs-text">Ну, я такой весь Вася...</div>
								<div className='additional-container'>
									<div className='dots'/>
									<div className='time'>15:42</div>
								</div>
							</div>
						</div>
					</div>
				</div>
				<div className='main-window'>
					<div className='upper-block'>
						<div><span className="name">Вася Божественный</span> печатает...</div>
						<div className='star'/>
					</div>
					<div className="chat">
						<div className='sender-info'>
							<div className='photo' />
							<div className='time'>15:30</div>
						</div>
						<div className='message message--sender'>Привет, хочешь покажу своего внутреннего Васю?</div>
						<div className='sender-info'>
							<div className='photo' />
							<div className='time'>15:31</div>
						</div>
						<div className='message message--receiver'>О ДА!!!!</div>
						<div className='sender-info'>
							<div className='photo' />
							<div className='time'>15:31</div>
						</div>
						<div className='message message--sender'>Ну, я такой весь Вася)))))</div>
					</div>
					<div className='typing-block'>
						<div className='attach' />
						<div>печатай сюда</div>
						<div className='emoji' />
						<div className='send' />
					</div>
				</div>
				<div className='right-menu'>
					<div className='general-info'>
						<div className='dots'/>
						<div className='photo' />
						<div className='name'>Вася Божественный</div>
						<div className='location'>Москва, конечно же</div>
					</div>
					<div className='additional-info'>
						<div><span className='info-header'>Никнейм:</span> nagibator_vasya1980</div>
						<div><span className='info-header'>Гендер:</span> васясексуал</div>
					</div>
				</div>
			</div>
		)
	}
}

export default Hello;