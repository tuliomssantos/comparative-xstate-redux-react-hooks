import React from 'react'

import { useMachine } from '@xstate/react'
import { lightSwitchMachine } from './machine'

import lampOff from '../../../../images/lightOff.png'
import lampOn from '../../../../images/lightOn.png'

const LightSwitch = () => {
	const [state, send] = useMachine(lightSwitchMachine)

	const lighOff = state.matches('lightOff')

	const lampImage = () => {
		if (lighOff) {
			return <img src={lampOff} />
		} else {
			return <img src={lampOn} />
		}
	}

	const handleClick = () => {
		if (lighOff) {
			send('TURN_ON')
		} else {
			send('TURN_OFF')
		}
	}

	return (
		<div className="container energizing-bg">
			<div className="box">
				<div className="wrapper-img">{lampImage()}</div>

				<button
					className={lighOff ? 'btn' : 'btn dark-bg'}
					onClick={handleClick}
				>
					{lighOff ? 'Acender' : 'Apagar'}
				</button>
			</div>
		</div>
	)
}

export default LightSwitch
