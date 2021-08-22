import React from 'react'

import { useSelector, useDispatch } from 'react-redux'

import lampOff from '../../../../images/lightOff.png'
import lampOn from '../../../../images/lightOn.png'

const LightSwitch = () => {
	const dispatch = useDispatch()
	const lighOff = useSelector(state => state.isOff)

	const lampImage = () => {
		if (lighOff) {
			return <img src={lampOff} />
		} else {
			return <img src={lampOn} />
		}
	}

	const handleClick = () => {
		if (lighOff) {
			dispatch({ type: 'TURN_ON' })
		} else {
			dispatch({ type: 'TURN_OFF' })
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
