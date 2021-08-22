import React, { useState } from 'react'

import lightBroken from '../../../../images/lightBroken.png'
import lightOff from '../../../../images/lightOff.png'
import lightOn from '../../../../images/lightOn.png'
import bolt from '../../../../images/bolt.png'

import { energize220v } from '../../../services'

const LightSwitch = () => {
	const [state, setState] = useState({
		isOff: true,
		isEnergizing: false,
		isLightBroken: false,
	})

	const lampImage = () => {
		if (state.isEnergizing) {
			return <img src={bolt} />
		} else if (state.isLightBroken) {
			return <img src={lightBroken} />
		} else {
			if (state.isOff) {
				return <img src={lightOff} />
			} else {
				return <img src={lightOn} />
			}
		}
	}

	const handleSwitchOn = async selectedLampVoltage => {
		setState(prevState => ({
			...prevState,
			isEnergizing: true,
			isOff: false,
		}))

		try {
			await energize220v(selectedLampVoltage)

			setState(prevState => ({
				...prevState,
				isEnergizing: false,
				isOff: false,
			}))
		} catch (error) {
			setState(prevState => ({
				...prevState,
				isEnergizing: false,
				isLightBroken: true,
			}))
		}
	}

	const handleSwitchOff = () => {
		setState(prevState => ({
			...prevState,
			isOff: true,
			isEnergizing: false,
			isLightBroken: false,
		}))
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
