import React from 'react'

import { useMachine } from '@xstate/react'
import { lightSwitchMachine } from './machine'

import lampBroken from '../../../../images/lightBroken.png'
import lampOff from '../../../../images/lightOff.png'
import lampOn from '../../../../images/lightOn.png'
import bolt from '../../../../images/bolt.png'

const LightSwitch = () => {
	const [state, send] = useMachine(lightSwitchMachine)

	const lighOff = state.matches('lightOff')

	const lightBroken = state.matches('lightBroken')

	const energizingLamp = state.matches('energizingLamp')

	const lampImage = () => {
		if (energizingLamp) {
			return <img src={bolt} />
		} else if (lightBroken) {
			return <img src={lampBroken} />
		} else {
			if (lighOff) {
				return <img src={lampOff} />
			} else {
				return <img src={lampOn} />
			}
		}
	}

	const handleSwitchOn = voltage => {
		send('SELECT_LAMP', { voltage })
	}

	const handleSwitchOff = () => {
		send('TURN_OFF')
	}

	return (
		<div className="container energizing-bg">
			<div className="box">
				<div className="wrapper-img">{lampImage()}</div>

				<div>
					<button
						className="btn red-bg"
						onClick={() => {
							handleSwitchOn(110)
						}}
					>
						Usar lâmpada de 110V
					</button>

					<button
						className="btn"
						onClick={() => {
							handleSwitchOn(220)
						}}
					>
						Usar lâmpada de 220V
					</button>

					<button className="btn dark-bg" onClick={handleSwitchOff}>
						Apagar
					</button>
				</div>
			</div>
		</div>
	)
}

export default LightSwitch
