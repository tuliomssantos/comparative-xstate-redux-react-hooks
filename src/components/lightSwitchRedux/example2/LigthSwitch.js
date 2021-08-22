import React from 'react'

import { useSelector, useDispatch } from 'react-redux'
import { energizeEvent } from './store'

import lightBroken from '../../../../images/lightBroken.png'
import lightOff from '../../../../images/lightOff.png'
import lightOn from '../../../../images/lightOn.png'
import bolt from '../../../../images/bolt.png'

const LightSwitch = () => {
	const dispatch = useDispatch()
	const isOff = useSelector(state => state.isOff)
	const isLightBroken = useSelector(state => state.isLightBroken)
	const isEnergizing = useSelector(state => state.isEnergizing)

	const handleSwitchOn = selectedLampVoltage => {
		dispatch({ type: 'SELECT_LAMP', selectedLampVoltage })

		const energizeThunk = energizeEvent(selectedLampVoltage)

		dispatch(energizeThunk)
	}

	const handleSwitchOff = () => {
		dispatch({ type: 'TURN_OFF' })
	}

	const lampImage = () => {
		if (isEnergizing) {
			return <img src={bolt} />
		} else if (isLightBroken) {
			return <img src={lightBroken} />
		} else {
			if (isOff) {
				return <img src={lightOff} />
			} else {
				return <img src={lightOn} />
			}
		}
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
