import React from 'react';
import "./main.css";

class Hello extends React.Component{
	render () {
		return (
			<div className='main-container'>
				<div className='left-menu'>
					<div className='left-menu__menu-block'>
						<div className='menu-icon__container'>
							<div className='menu-icon' />
						</div>
						<div className='search__container'>
							<input className='search-input' placeholder='Search'/>
							<div className='search-icon' />
						</div>
					</div>
					<div className='left-menu__dialogs'>
						<div className='left-menu__dialogs_item'>
							<div className='status--online' />
							<div className='dialogs-photo'>
								<div className='photo' />
							</div>
							<div className='dialogs-item'>
								<div className='dialog-container'>
									<div className='name'>Вася Божественный</div>
									<div className="dialogs-text">Ну, я такой весь Вася))))))))))))))))))))))))</div>
								</div>
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
						<div className='typing'><span className="name">Вася Божественный</span> печатает...</div>
						<div className='star-container'>
							<div className='star'/>
						</div>
					</div>
					<div className="chat">
						<div className='chat-item chat-item--sender'>
							<div className='message-container'>
								<div className='sender-info'>
									<div className='photo' />
									<div className='time'>15:30</div>
								</div>
								<div className='message'>Привет, хочешь покажу своего внутреннего Васю?</div>
							</div>
						</div>
						<div className='chat-item chat-item--receiver'>
							<div className='message-container'>
								<div className='sender-info'>
									<div className='photo' />
									<div className='time'>15:31</div>
								</div>
								<div className='message'>О ДА!!!!</div>
							</div>
						</div>
						<div className='chat-item chat-item--sender'>
							<div className='message-container'>
								<div className='sender-info'>
									<div className='photo' />
									<div className='time'>15:31</div>
								</div>
								<div className='message'>Ну, я такой весь Вася)))))</div>
							</div>
						</div>
					</div>
					<div className='typing-block'>
						<div className='attach' />
						<div className='input'>печатай сюда</div>
						<div className='emoji-container'>
							<div className='emoji' />
						</div>
						<div className='send-container'>
							<div className='send' />
						</div>
					</div>
				</div>
				<div className='right-menu'>
					<div className='bell-container' />
					<div className='general-info-container'>
						<div className='general-info'>
							<div className='photo' />
							<div className='name'>Вася Божественный</div>
							<div className='location'>Москва, конечно же</div>
						</div>
						<div className='dots-container'>
							<div className='dots'/>
						</div>
					</div>
					<div className='additional-info'>
						<div className='additional-info-text'><span className='info-header'>Никнейм:</span> nagibator_vasya1980</div>
						<div className='additional-info-text'><span className='info-header'>Гендер:</span> васясексуал</div>
					</div>
				</div>
			</div>
		)
	}
}

export default Hello;